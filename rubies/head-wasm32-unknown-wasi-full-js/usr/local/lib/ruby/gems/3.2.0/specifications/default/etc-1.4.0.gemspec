# -*- encoding: utf-8 -*-
# stub: etc 1.4.0 ruby lib
# stub: ext/etc/extconf.rb

Gem::Specification.new do |s|
  s.name = "etc".freeze
  s.version = "1.4.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Yukihiro Matsumoto".freeze]
  s.bindir = "exe".freeze
  s.date = "2022-01-27"
  s.description = "Provides access to information typically stored in UNIX /etc directory.".freeze
  s.email = ["matz@ruby-lang.org".freeze]
  s.extensions = ["ext/etc/extconf.rb".freeze]
  s.extra_rdoc_files = ["LICENSE.txt".freeze, "README.md".freeze, "ChangeLog".freeze]
  s.files = ["ChangeLog".freeze, "LICENSE.txt".freeze, "README.md".freeze, "ext/etc/extconf.rb".freeze]
  s.homepage = "https://github.com/ruby/etc".freeze
  s.licenses = ["Ruby".freeze, "BSD-2-Clause".freeze]
  s.rdoc_options = ["--main".freeze, "README.md".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.6.0".freeze)
  s.rubygems_version = "3.4.0.dev".freeze
  s.summary = "Provides access to information typically stored in UNIX /etc directory.".freeze

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake-compiler>.freeze, [">= 0"])
    s.add_development_dependency(%q<test-unit>.freeze, [">= 0"])
  else
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rake-compiler>.freeze, [">= 0"])
    s.add_dependency(%q<test-unit>.freeze, [">= 0"])
  end
end
