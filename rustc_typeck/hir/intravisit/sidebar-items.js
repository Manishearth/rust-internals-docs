initSidebarItems({"enum":[["FnKind",""]],"fn":[["compute_id_range_for_fn_body","Computes the id range for a single fn body, ignoring nested items."],["walk_arm",""],["walk_assoc_type_binding",""],["walk_block",""],["walk_crate","Walks the contents of a crate. See also `Crate::visit_all_items`."],["walk_decl",""],["walk_enum_def",""],["walk_expr",""],["walk_fn",""],["walk_fn_decl",""],["walk_fn_decl_nopat",""],["walk_fn_kind",""],["walk_fn_ret_ty",""],["walk_foreign_item",""],["walk_generics",""],["walk_impl_item",""],["walk_item",""],["walk_lifetime",""],["walk_lifetime_def",""],["walk_local",""],["walk_macro_def",""],["walk_mod",""],["walk_opt_name",""],["walk_opt_sp_name",""],["walk_pat",""],["walk_path",""],["walk_path_list_item",""],["walk_path_parameters",""],["walk_path_segment",""],["walk_poly_trait_ref",""],["walk_stmt",""],["walk_struct_def",""],["walk_struct_field",""],["walk_trait_item",""],["walk_trait_ref",""],["walk_ty",""],["walk_ty_param_bound",""],["walk_variant",""],["walk_vis",""]],"struct":[["IdRange",""],["IdRangeComputingVisitor",""],["IdVisitor",""]],"trait":[["IdVisitingOperation",""],["Visitor","Each method of the Visitor trait is a hook to be potentially overridden.  Each method's default implementation recursively visits the substructure of the input via the corresponding `walk` method; e.g. the `visit_mod` method by default calls `intravisit::walk_mod`."]]});