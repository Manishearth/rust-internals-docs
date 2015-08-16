initSidebarItems({"enum":[["FulfillmentErrorCode",""],["MethodMatchResult",""],["MethodMatchedData",""],["MethodViolationCode","Reasons a method might not be object-safe."],["ObjectSafetyViolation",""],["ObligationCauseCode",""],["OrphanCheckErr",""],["SelectionError",""],["Vtable","Given the successful resolution of an obligation, the `Vtable` indicates where the vtable comes from. Note that while we call this a \"vtable\", it does not necessarily indicate dynamic dispatch at runtime. `Vtable` instances just tell the compiler where to find methods, but in generic code those methods are typically statically dispatched -- only when an object is constructed is a `Vtable` instance reified into an actual vtable."]],"fn":[["elaborate_predicates",""],["fully_normalize",""],["get_vtable_index_of_object_method","Given an upcast trait object described by `object`, returns the index of the method `method_def_id` (which should be part of `object.upcast_trait_ref`) within the vtable for `object`."],["is_object_safe",""],["is_vtable_safe_method","We say a method is *vtable safe* if it can be invoked on a trait object.  Note that object-safe traits can have some non-vtable-safe methods, so long as they require `Self:Sized` or otherwise ensure that they cannot be used when `Self=Trait`."],["normalize","Normalizes any associated type projections in `value`, replacing them with a fully resolved type where possible. The return value combines the normalized result and any additional obligations that were incurred as result."],["normalize_param_env_or_error","Normalizes the parameter environment, reporting errors if they occur."],["object_safety_violations",""],["orphan_check","Checks the coherence orphan rules. `impl_def_id` should be the def-id of a trait impl. To pass, either the trait must be local, or else two conditions must be satisfied:"],["overlapping_impls","True if there exist types that satisfy both of the two given impls."],["predicate_for_trait_def",""],["predicates_for_generics","Creates predicate obligations from the generic bounds."],["report_fulfillment_errors",""],["report_object_safety_error",""],["report_overflow_error","Reports that an overflow has occurred and halts compilation. We halt compilation unconditionally because it is important that overflows never be masked -- they basically represent computations whose result could not be truly determined and thus we can't say if the program type checks or not -- and they are unusual occurrences in any case."],["report_selection_error",""],["suggest_new_overflow_limit",""],["supertrait_def_ids",""],["supertraits",""],["trait_ref_for_builtin_bound",""],["transitive_bounds",""],["type_known_to_meet_builtin_bound","Determines whether the type `ty` is known to meet `bound` and returns true if so. Returns false if `ty` either does not meet `bound` or is not known to meet bound (note that this is conservative towards *no impl*, which is the opposite of the `evaluate` methods)."],["upcast","Cast a trait reference into a reference to one of its super traits; returns `None` if `target_trait_def_id` is not a supertrait."]],"struct":[["DerivedObligationCause",""],["FulfilledPredicates",""],["FulfillmentContext","The fulfillment context is used to drive trait resolution.  It consists of a list of obligations that must be (eventually) satisfied. The job is to track which are satisfied, which yielded errors, and which are still pending. At any point, users can call `select_where_possible`, and the fulfilment context will try to do selection, retaining only those obligations that remain ambiguous. This may be helpful in pushing type inference along. Once all type inference constraints have been generated, the method `select_all_or_error` can be used to report any remaining ambiguous cases as errors."],["FulfillmentError",""],["MismatchedProjectionTypes",""],["Normalized",""],["Obligation","An `Obligation` represents some trait reference (e.g. `int:Eq`) for which the vtable must be found.  The process of finding a vtable is called \"resolving\" the `Obligation`. This process consists of either identifying an `impl` (e.g., `impl Eq for int`) that provides the required vtable, or else finding a bound that is in scope. The eventual result is usually a `Selection` (defined below)."],["ObligationCause","Why did we incur this obligation? Used for error reporting."],["RFC1214Warning","This marker is used in some caches to record whether the predicate, if it is found to be false, will yield a warning (due to RFC1214) or an error. We separate these two cases in the cache so that if we see the same predicate twice, first resulting in a warning, and next resulting in an error, we still report the error, rather than considering it a duplicate."],["RegionObligation",""],["SelectionCache",""],["SelectionContext",""],["SupertraitDefIds",""],["VtableBuiltinData",""],["VtableClosureData",""],["VtableDefaultImplData",""],["VtableImplData","Identifies a particular impl in the source, along with a set of substitutions from the impl's type/lifetime parameters. The `nested` vector corresponds to the nested obligations attached to the impl's type parameters."],["VtableObjectData","A vtable for some object-safe trait `Foo` automatically derived for the object type `Foo`."]],"type":[["Obligations",""],["PredicateObligation",""],["PredicateObligations",""],["Selection",""],["SelectionResult","When performing resolution, it is typically the case that there can be one of three outcomes:"],["Supertraits",""],["TraitObligation",""],["TraitObligations",""]]});