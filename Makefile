FORCE:
.PHONY: FORCE

RUBY_ROOT = rubies/pr5502-wasm32-unknown-wasi-full-js

static/optcarrot.wasm: FORCE
	rm -rf $(RUBY_ROOT)/usr/local/include
	rm -f $(RUBY_ROOT)/usr/local/lib/libruby-static.a
	wasi-vfs pack $(RUBY_ROOT)/usr/local/bin/ruby --mapdir /usr::$(RUBY_ROOT)/usr --mapdir /optcarrot::./optcarrot -o static/optcarrot.wasm
