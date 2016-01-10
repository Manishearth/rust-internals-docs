initSidebarItems({"enum":[["FulfillmentErrorCode",""],["ObligationCauseCode",""],["SelectionError",""],["Vtable","Given the successful resolution of an obligation, the `Vtable` indicates where the vtable comes from. Note that while we call this a \"vtable\", it does not necessarily indicate dynamic dispatch at runtime. `Vtable` instances just tell the compiler where to find methods, but in generic code those methods are typically statically dispatched -- only when an object is constructed is a `Vtable` instance reified into an actual vtable."]],"fn":[["fully_normalize",""],["normalize_param_env_or_error","Normalizes the parameter environment, reporting errors if they occur."],["predicates_for_generics","Creates predicate obligations from the generic bounds."],["trait_ref_for_builtin_bound",""],["type_known_to_meet_builtin_bound","Determines whether the type `ty` is known to meet `bound` and returns true if so. Returns false if `ty` either does not meet `bound` or is not known to meet bound (note that this is conservative towards *no impl*, which is the opposite of the `evaluate` methods)."]],"struct":[["DerivedObligationCause",""],["FulfillmentError",""],["Obligation","An `Obligation` represents some trait reference (e.g. `int:Eq`) for which the vtable must be found.  The process of finding a vtable is called \"resolving\" the `Obligation`. This process consists of either identifying an `impl` (e.g., `impl Eq for int`) that provides the required vtable, or else finding a bound that is in scope. The eventual result is usually a `Selection` (defined below)."],["ObligationCause","Why did we incur this obligation? Used for error reporting."],["VtableBuiltinData",""],["VtableClosureData",""],["VtableDefaultImplData",""],["VtableImplData","Identifies a particular impl in the source, along with a set of substitutions from the impl's type/lifetime parameters. The `nested` vector corresponds to the nested obligations attached to the impl's type parameters."],["VtableObjectData","A vtable for some object-safe trait `Foo` automatically derived for the object type `Foo`."]],"type":[["Obligations",""],["PredicateObligation",""],["PredicateObligations",""],["Selection",""],["SelectionResult",""],["TraitObligation",""],["TraitObligations",""]]});