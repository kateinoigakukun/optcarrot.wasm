import { WASI } from "@wasmer/wasi";
import { WasmFs } from "@wasmer/wasmfs";

const main = async () => {
  // Setup WASI and FileSystem emulation
  const wasmFs = new WasmFs();
  const wasi = new WASI({
    bindings: {
      ...WASI.defaultBindings,
      fs: wasmFs.fs,
    },
  });

  // (Optional) Forward stdout/stderr to console
  const originalWriteSync = wasmFs.fs.writeSync.bind(wasmFs.fs);
  // @ts-ignore
  wasmFs.fs.writeSync = (fd, buffer, offset, length, position) => {
    const text = new TextDecoder("utf-8").decode(buffer);
    const handlers = {
      1: (line) => console.log(line),
      2: (line) => console.warn(line),
    };
    if (handlers[fd]) handlers[fd](text);
    return originalWriteSync(fd, buffer, offset, length, position);
  };

  // Fetch and instantiate WebAssembly binary
  const response = await fetch("./node_modules/ruby-wasm-wasi/dist/ruby.wasm");
  const buffer = await response.arrayBuffer();
  const vm = new RubyVM();

  const imports = {
    wasi_snapshot_preview1: wasi.wasiImport,
  };

  // Add imports for WebAssembly instantiation
  vm.addToImports(imports);

  // Instantiate the WebAssembly module
  const { instance } = await WebAssembly.instantiate(buffer, imports);

  // Set instance to vm
  await vm.setInstance(instance);

  // Initialize WASI application
  wasi.setMemory(instance.exports.memory);

  // Initialize Ruby VM
  vm.initialize();

  vm.eval(`
    require "js"
    luckiness = ["Lucky", "Unlucky"].sample
    JS::eval("document.body.innerText = '#{luckiness}'")
  `);
};

main();
