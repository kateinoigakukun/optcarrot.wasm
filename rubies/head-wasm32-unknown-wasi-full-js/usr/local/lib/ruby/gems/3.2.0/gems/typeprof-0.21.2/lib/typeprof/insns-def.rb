TypeProf::INSN_TABLE = {:nop=>[],
 :getlocal=>["lindex_t", "rb_num_t"],
 :setlocal=>["lindex_t", "rb_num_t"],
 :getblockparam=>["lindex_t", "rb_num_t"],
 :setblockparam=>["lindex_t", "rb_num_t"],
 :getblockparamproxy=>["lindex_t", "rb_num_t"],
 :getspecial=>["rb_num_t", "rb_num_t"],
 :setspecial=>["rb_num_t"],
 :getinstancevariable=>["ID", "IVC"],
 :setinstancevariable=>["ID", "IVC"],
 :getclassvariable=>["ID"],
 :setclassvariable=>["ID"],
 :getconstant=>["ID"],
 :setconstant=>["ID"],
 :getglobal=>["GENTRY"],
 :setglobal=>["GENTRY"],
 :putnil=>[],
 :putself=>[],
 :putobject=>["VALUE"],
 :putspecialobject=>["rb_num_t"],
 :putstring=>["VALUE"],
 :concatstrings=>["rb_num_t"],
 :tostring=>[],
 :objtostring=>[],
 :anytostring=>[],
 :freezestring=>["VALUE"],
 :toregexp=>["rb_num_t", "rb_num_t"],
 :intern=>[],
 :newarray=>["rb_num_t"],
 :newarraykwsplat=>["rb_num_t"],
 :duparray=>["VALUE"],
 :duphash=>["VALUE"],
 :expandarray=>["rb_num_t", "rb_num_t"],
 :concatarray=>[],
 :splatarray=>["VALUE"],
 :newhash=>["rb_num_t"],
 :newrange=>["rb_num_t"],
 :pop=>[],
 :dup=>[],
 :dupn=>["rb_num_t"],
 :swap=>[],
 :reverse=>["rb_num_t"],
 :topn=>["rb_num_t"],
 :setn=>["rb_num_t"],
 :adjuststack=>["rb_num_t"],
 :defined=>["rb_num_t", "VALUE", "VALUE"],
 :checkmatch=>["rb_num_t"],
 :checkkeyword=>["lindex_t", "lindex_t"],
 :checktype=>["rb_num_t"],
 :defineclass=>["ID", "ISEQ", "rb_num_t"],
 :definemethod=>["ID", "ISEQ"],
 :definesmethod=>["ID", "ISEQ"],
 :send=>["CALL_DATA", "ISEQ"],
 :invokesuper=>["CALL_DATA", "ISEQ"],
 :invokeblock=>["CALL_DATA"],
 :leave=>[],
 :throw=>["rb_num_t"],
 :jump=>["OFFSET"],
 :branchif=>["OFFSET"],
 :branchunless=>["OFFSET"],
 :branchnil=>["OFFSET"],
 :once=>["ISEQ", "ISE"],
 :invokebuiltin=>["RB_BUILTIN"]}