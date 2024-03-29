# Optcarrot.wasm

[![Publish](https://github.com/kateinoigakukun/optcarrot.wasm/actions/workflows/publish.yml/badge.svg)](https://github.com/kateinoigakukun/optcarrot.wasm/actions/workflows/publish.yml)

A NES emulator written in Ruby on browser powered by WebAssembly. Built on top of <a href="https://github.com/mame/optcarrot" target="_blank">Optcarrot</a>

Demo: https://kateinoigakukun.github.io/optcarrot.wasm

<div align="center">
<img src=./docs/demo.png width="400px">
</div>

## Dependencies

- [wasi-vfs](https://github.com/kateinoigakukun/wasi-vfs/): Only CLI tool is required

## Development

```console
$ make static/optcarrot.wasm
$ npm install
$ npx parcel ./src/index.html
```

