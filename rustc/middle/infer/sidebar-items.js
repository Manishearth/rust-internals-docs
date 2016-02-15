initSidebarItems({"enum":[["FixupError",""],["LateBoundRegionConversionTime","Times when we replace late-bound regions with variables:"],["ParameterOrigin","Places that type/region parameters can appear."],["RegionVariableOrigin","Reasons to create a region inference variableSee `error_reporting.rs` for more details"],["SubregionOrigin","The origin of a `r1 <= r2` constraint.See `error_reporting.rs` for more details"],["TypeOrigin","Why did we require that the two types be related?See `error_reporting.rs` for more details"],["ValuePairs","See `error_reporting.rs` for more details"]],"fn":[["can_mk_eqty",""],["can_mk_subty",""],["common_supertype","Computes the least upper-bound of `a` and `b`. If this is not possible, reports an error and returns ty::err."],["drain_fulfillment_cx","Finishes processes any obligations that remain in the fulfillment context, and then \"freshens\" and returns `result`. This is primarily used during normalization and other cases where processing the obligations in `fulfill_cx` may cause type inference variables that appear in `result` to be unified, and hence we need to process those obligations to get the complete picture of the type."],["drain_fulfillment_cx_or_panic",""],["fixup_err_to_string",""],["mk_eq_trait_refs",""],["mk_eqty",""],["mk_sub_poly_trait_refs",""],["mk_subr",""],["mk_subty",""],["new_infer_ctxt",""],["normalize_associated_type",""],["normalizing_infer_ctxt",""]],"mod":[["bivariate","Applies the \"bivariance relationship\" to two types and/or regions. If (A,B) are bivariant then either A <: B or B <: A. It occurs when type/lifetime parameters are unconstrained. Usually this is an error, but we permit it in the specific case where a type parameter is constrained in a where-clause via an associated type.There are several ways one could implement bivariance. You could just do nothing at all, for example, or you could fully verify that one of the two subtyping relationships hold. We choose to thread a middle line: we relate types up to regions, but ignore all region relationships.At one point, handling bivariance in this fashion was necessary for inference, but I'm actually not sure if that is true anymore. In particular, it might be enough to say (A,B) are bivariant for all (A,B)."],["combine",""],["equate",""],["error_reporting","Error Reporting Code for the inference engineBecause of the way inference, and in particular region inference, works, it often happens that errors are not detected until far after the relevant line of code has been type-checked. Therefore, there is an elaborate system to track why a particular constraint in the inference graph arose so that we can explain to the user what gave rise to a particular error.The basis of the system are the \"origin\" types. An \"origin\" is the reason that a constraint or inference variable arose. There are different \"origin\" enums for different kinds of constraints/variables (e.g., `TypeOrigin`, `RegionVariableOrigin`). An origin always has a span, but also more information so that we can generate a meaningful error message.Having a catalogue of all the different reasons an error can arise is also useful for other reasons, like cross-referencing FAQs etc, though we are not really taking advantage of this yet.Region InferenceRegion inference is particularly tricky because it always succeeds \"in the moment\" and simply registers a constraint. Then, at the end, we can compute the full graph and report errors, so we need to be able to store and later report what gave rise to the conflicting constraints.Subtype TraceDetermining whether `T1 <: T2` often involves a number of subtypes and subconstraints along the way. A \"TypeTrace\" is an extended version of an origin that traces the types and other values that were being compared. It is not necessarily comprehensive (in fact, at the time of this writing it only tracks the root values being compared) but I'd like to extend it to include significant \"waypoints\". For example, if you are comparing `(T1, T2) <: (T3, T4)`, and the problem is that `T2 <: T4` fails, I'd like the trace to include enough information to say \"in the 2nd element of the tuple\". Similarly, failures when comparing arguments or return types in fn types should be able to cite the specific position, etc.Reality vs planOf course, there is still a LOT of code in typeck that has yet to be ported to this system, and which relies on string concatenation at the time of error detection."],["glb",""],["lattice","Lattice VariablesThis file contains generic code for operating on inference variables that are characterized by an upper- and lower-bound.  The logic and reasoning is explained in detail in the large comment in `infer.rs`.The code in here is defined quite generically so that it can be applied both to type variables, which represent types being inferred, and fn variables, which represent function types being inferred. It may eventually be applied to their types as well, who knows. In some cases, the functions are also generic with respect to the operation on the lattice (GLB vs LUB).Although all the functions are generic, we generally write the comments in a way that is specific to type variables and the LUB operation.  It's just easier that way.In general all of the functions are defined parametrically over a `LatticeValue`, which is a value defined with respect to a lattice."],["lub",""],["region_inference","See README.md"],["resolve",""],["sub",""],["type_variable",""],["unify_key",""]],"struct":[["CombinedSnapshot",""],["InferCtxt",""],["TypeFreshener",""],["TypeTrace","The trace designates the path through inference that we took to encounter an error or subtyping constraint.See `error_reporting.rs` for more details."]],"type":[["Bound",""],["FixupResult",""],["SkolemizationMap","A map returned by `skolemize_late_bound_regions()` indicating the skolemized region that each late-bound region was replaced with."],["UnitResult",""]]});