initSidebarItems({"fn":[["check_ast_crate",""],["check_crate","Perform lint checking on a crate.Consumes the `lint_store` field of the `Session`."],["gather_attrs","Parse the lint attributes into a vector, with `Err`s for malformed lint attributes. Writing this as an iterator is an enormous mess."],["raw_emit_lint","Emit a lint as a warning or an error (or not at all) according to `level`.This lives outside of `Context` so it can be used by checks in trans that run after the main lint pass is finished. Most lints elsewhere in the compiler should call `Session::add_lint()` instead."],["raw_struct_lint",""]],"struct":[["EarlyContext","Context for lint checking of the AST, after expansion, before lowering to HIR."],["FutureIncompatibleInfo","Extra information for a future incompatibility lint. See the call to `register_future_incompatible` in `librustc_lint/lib.rs` for guidelines."],["GatherNodeLevels",""],["LateContext","Context for lint checking after type checking."],["LintStore","Information about the registered lints.This is basically the subset of `Context` that we can build early in the compile pipeline."]],"trait":[["LintContext",""]]});