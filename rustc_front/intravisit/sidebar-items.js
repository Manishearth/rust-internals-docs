initSidebarItems({"enum":[["FnKind",""]],"fn":[["walk_arm",""],["walk_assoc_type_binding",""],["walk_block",""],["walk_crate","Walks the contents of a crate. See also `Crate::visit_all_items`."],["walk_decl",""],["walk_enum_def",""],["walk_explicit_self",""],["walk_expr",""],["walk_fn",""],["walk_fn_decl",""],["walk_fn_decl_nopat",""],["walk_fn_kind",""],["walk_fn_ret_ty",""],["walk_foreign_item",""],["walk_generics",""],["walk_ident",""],["walk_impl_item",""],["walk_item",""],["walk_lifetime",""],["walk_lifetime_def",""],["walk_local",""],["walk_macro_def",""],["walk_mod",""],["walk_opt_ident",""],["walk_opt_name",""],["walk_pat",""],["walk_path",""],["walk_path_list_item",""],["walk_path_parameters",""],["walk_path_segment",""],["walk_poly_trait_ref",""],["walk_stmt",""],["walk_struct_def",""],["walk_struct_field",""],["walk_trait_item",""],["walk_trait_ref",""],["walk_ty",""],["walk_ty_param_bound",""],["walk_variant",""]],"trait":[["Visitor","Each method of the Visitor trait is a hook to be potentially overridden.  Each method's default implementation recursively visits the substructure of the input via the corresponding `walk` method; e.g. the `visit_mod` method by default calls `intravisit::walk_mod`.Note that this visitor does NOT visit nested items by default (this is why the module is called `intravisit`, to distinguish it from the AST's `visit` module, which acts differently). If you simply want to visit all items in the crate in some order, you should call `Crate::visit_all_items`. Otherwise, see the comment on `visit_nested_item` for details on how to visit nested items.If you want to ensure that your code handles every variant explicitly, you need to override each method.  (And you also need to monitor future changes to `Visitor` in case a new method with a new default implementation gets introduced.)"]]});