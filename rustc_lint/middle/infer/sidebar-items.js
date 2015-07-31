initSidebarItems({"enum":[["FixupError",""],["GenericKind",""],["IntVarValue",""],["LateBoundRegionConversionTime","Times when we replace late-bound regions with variables:"],["RegionVariableOrigin","Reasons to create a region inference variable"],["SubregionOrigin","The origin of a `r1 <= r2` constraint."],["TypeOrigin","Why did we require that the two types be related?"],["ValuePairs","See `error_reporting.rs` for more details"]],"fn":[["can_mk_eqty",""],["can_mk_subty",""],["common_supertype","Computes the least upper-bound of `a` and `b`. If this is not possible, reports an error and returns ty::err."],["drain_fulfillment_cx","Finishes processes any obligations that remain in the fulfillment context, and then \"freshens\" and returns `result`. This is primarily used during normalization and other cases where processing the obligations in `fulfill_cx` may cause type inference variables that appear in `result` to be unified, and hence we need to process those obligations to get the complete picture of the type."],["drain_fulfillment_cx_or_panic",""],["erase_regions","Returns an equivalent value with all free regions removed (note that late-bound regions remain, because they are important for subtyping, but they are anonymized and normalized as well). This is a stronger, caching version of `ty_fold::erase_regions`."],["fixup_err_to_string",""],["mk_eqty",""],["mk_sub_poly_trait_refs",""],["mk_subr",""],["mk_subty",""],["new_infer_ctxt","errors_will_be_reported is required to proxy to the fulfillment context FIXME -- a better option would be to hold back on modifying the global cache until we know that all dependent obligations are also satisfied. In that case, we could actually remove this boolean flag, and we'd also avoid the problem of squelching duplicate errors that occur across fns."],["normalize_associated_type",""],["normalizing_infer_ctxt",""]],"mod":[["bivariate","Applies the \"bivariance relationship\" to two types and/or regions. If (A,B) are bivariant then either A <: B or B <: A. It occurs when type/lifetime parameters are unconstrained. Usually this is an error, but we permit it in the specific case where a type parameter is constrained in a where-clause via an associated type."],["combine",""],["equate",""],["error_reporting","Error Reporting Code for the inference engine"],["glb",""],["lattice","Lattice Variables"],["lub",""],["region_inference","See README.md"],["resolve",""],["sub",""],["type_variable",""],["unify_key",""]],"struct":[["CombinedSnapshot",""],["InferCtxt",""],["TypeFreshener",""],["TypeTrace","The trace designates the path through inference that we took to encounter an error or subtyping constraint."]],"type":[["Bound",""],["FixupResult",""],["SkolemizationMap",""],["UnitResult",""]]});