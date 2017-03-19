initSidebarItems({"enum":[["FixupError",""],["InferTables","A version of &ty::TypeckTables which can be `Missing` (not needed), `InProgress` (during typeck) or `Interned` (result of typeck). Only the `InProgress` version supports `borrow_mut`."],["InferTablesRef",""],["LateBoundRegionConversionTime","Times when we replace late-bound regions with variables:"],["ParameterOrigin","Places that type/region parameters can appear."],["RegionVariableOrigin","Reasons to create a region inference variable"],["SubregionOrigin","The origin of a `r1 <= r2` constraint."],["ValuePairs","See `error_reporting` module for more details"]],"mod":[["error_reporting","Error Reporting Code for the inference engine"],["lattice","Lattice Variables"],["region_inference","See README.md"],["resolve",""],["type_variable",""],["unify_key",""]],"struct":[["CombinedSnapshot",""],["InferCtxt",""],["InferCtxtBuilder","Helper type of a temporary returned by tcx.infer_ctxt(...). Necessary because we can't write the following bound: F: for<'b, 'tcx> where 'gcx: 'tcx FnOnce(InferCtxt<'b, 'gcx, 'tcx>)."],["InferOk",""],["TypeFreshener",""],["TypeTrace","The trace designates the path through inference that we took to encounter an error or subtyping constraint."]],"trait":[["InferEnv",""],["TransNormalize","Helper trait for shortening the lifetimes inside a value for post-type-checking normalization."]],"type":[["Bound",""],["FixupResult",""],["InferResult",""],["SkolemizationMap","A map returned by `skolemize_late_bound_regions()` indicating the skolemized region that each late-bound region was replaced with."],["UnitResult",""]]});