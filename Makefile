
static/optcarrot.wasm:
	wasi-vfs pack rubies/head-wasm32-unknown-wasi-full-js/usr/local/bin/ruby --mapdir /usr::rubies/head-wasm32-unknown-wasi-full-js/usr --mapdir /optcarrot::./optcarrot -o static/optcarrot.wasm
