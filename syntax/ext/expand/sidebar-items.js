initSidebarItems({"fn":[["expand_block",""],["expand_block_elts",""],["expand_crate",""],["expand_expr",""],["expand_item",""],["expand_type",""]],"struct":[["ExpansionConfig",""],["IdentRenamer","A tree-folder that applies every rename in its (mutable) list to every identifier, including both bindings and varrefs (and lots of things that will turn out to be neither)"],["MacroExpander","A tree-folder that performs macro expansion"],["PatIdentRenamer","A tree-folder that applies every rename in its list to the idents that are in PatKind::Ident patterns. This is more narrowly focused than IdentRenamer, and is needed for FnDecl, where we want to rename the args but not the fn name or the generics etc."]]});