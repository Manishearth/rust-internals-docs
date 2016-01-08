initSidebarItems({"constant":[["INITIAL_DISCRIMINANT_VALUE",""]],"enum":[["AdtKind",""],["BorrowKind",""],["BoundRegion",""],["BuiltinBound",""],["ClosureKind",""],["DtorKind",""],["ExplicitSelfCategory","The category of explicit self."],["FnOutput",""],["FragmentInfo","Describes the fragment-state associated with a NodeId."],["ImplOrTraitItem",""],["ImplOrTraitItemContainer",""],["ImplOrTraitItemId",""],["InferTy",""],["IntVarValue",""],["LvaluePreference",""],["ObjectLifetimeDefault","Default region to use for the bound of objects that are supplied as the value for this type parameter. This is derived from `T:'a` annotations appearing in the type definition.  If this is `None`, then the default is inherited from the surrounding context. See RFC #599 for details."],["Predicate",""],["Region","Representation of regions."],["TypeVariants",""],["UpvarCapture","Information describing the capture of an upvar. This is computed during `typeck`, specifically by `regionck`."],["Variance",""],["VariantKind",""]],"mod":[["_match",""],["adjustment",""],["cast",""],["error",""],["fast_reject",""],["fold","Generalized type folding mechanism. The setup is a bit convoluted but allows for convenient usage. Let T be an instance of some \"foldable type\" (one which implements `TypeFoldable`) and F be an instance of a \"folder\" (a type which implements `TypeFolder`). Then the setup is intended to be:"],["maps",""],["outlives",""],["relate","Generalized type relating mechanism. A type relation R relates a pair of values (A, B). A and B are usually types or regions but can be other things. Examples of type relations are subtyping, type equality, etc."],["tls",""],["trait_def",""],["util","misc. type-system utilities too small to deserve their own file"],["walk","An iterator over the type substructure. WARNING: this does not keep track of the region depth."],["wf",""]],"struct":[["AdtDefData","The definition of an abstract data type - a struct or enum."],["AdtFlags",""],["AssociatedConst",""],["AssociatedType",""],["BareFnTy",""],["Binder","Binder is a binder for higher-ranked lifetimes. It is part of the compiler's representation for things like `for<'a> Fn(&'a isize)` (which would be represented by the type `PolyTraitRef == Binder<TraitRef>`). Note that when we skolemize, instantiate, erase, or otherwise \"discharge\" these bound regions, we change the type from `Binder<T>` to just `T` (see e.g. `liberate_late_bound_regions`)."],["BuiltinBounds",""],["CReaderCacheKey",""],["ClosureSubsts","A closure can be modeled as a struct that looks like:"],["ClosureTy",""],["ClosureUpvar",""],["CrateAnalysis","The complete set of all analyses described in this module. This is produced by the driver and fed to trans and later passes."],["CtxtArenas","Internal storage"],["DebruijnIndex","A [De Bruijn index][dbi] is a standard means of representing regions (and perhaps later types) in a higher-ranked setting. In particular, imagine a type like this:"],["EarlyBoundRegion",""],["EquatePredicate",""],["ExistentialBounds","Bounds suitable for an existentially quantified type parameter such as those that appear in object types or closure types."],["FieldDefData",""],["FloatVid",""],["FnSig","Signature of a function type, which I have arbitrarily decided to use to refer to the input/output types."],["FreeRegion","A \"free\" region `fr` can be interpreted as \"some region at least as big as the scope `fr.scope`\"."],["Freevar","A free variable referred to in a function."],["GenericPredicates","Bounds on generics."],["Generics","Information about the formal type/lifetime parameters associated with an item or method. Analogous to hir::Generics."],["InstantiatedPredicates","Represents the bounds declared on a particular set of type parameters.  Should eventually be generalized into a flag list of where clauses.  You can obtain a `InstantiatedPredicates` list from a `GenericPredicates` by using the `instantiate` method. Note that this method reflects an important semantic invariant of `InstantiatedPredicates`: while the `GenericPredicates` are expressed in terms of the bound type parameters of the impl/trait/whatever, an `InstantiatedPredicates` instance represented a set of bounds for some particular instantiation, meaning that the generic parameters have been substituted with their values."],["IntVid",""],["ItemSubsts","Records the substitutions used to translate the polytype for an item into the monotype of an item reference."],["ItemVariances",""],["Method",""],["MethodCall","With method calls, we store some extra information in side tables (i.e method_map). We use MethodCall as a key to index into these tables instead of just directly using the expression's NodeId. The reason for this being that we may apply adjustments (coercions) with the resulting expression also needing to use the side tables. The problem with this is that we don't assign a separate NodeId to this new expression and so it would clash with the base expression if both needed to add to the side tables. Thus to disambiguate we also keep track of whether there's an adjustment in our key."],["MethodCallee",""],["OutlivesPredicate",""],["ParamTy",""],["ParameterEnvironment","When type checking, we use the `ParameterEnvironment` to track details about the type/lifetime parameters that are in scope. It primarily stores the bounds information."],["ProjectionPredicate","This kind of predicate has no *direct* correspondent in the syntax, but it roughly corresponds to the syntactic forms:"],["ProjectionTy","Represents the projection of an associated type. In explicit UFCS form this would be written `<T as Trait<..>>::N`."],["RegionParameterDef",""],["RegionVid",""],["SkolemizedRegionVid",""],["Tables",""],["TraitPredicate",""],["TraitRef","A complete reference to a trait. These take numerous guises in syntax, but perhaps the most recognizable form is in a where clause:"],["TraitTy",""],["TransmuteRestriction","A restriction that certain types must be the same size. The use of `transmute` gives rise to these restrictions. These generally cannot be checked until trans; therefore, each call to `transmute` will push one or more such restriction into the `transmute_restrictions` vector during `intrinsicck`. They are then checked during `trans` by the fn `check_intrinsics`."],["TyS",""],["TyVid",""],["TypeAndMut",""],["TypeContents","Type contents is how the type checker reasons about kinds. They track what kinds of things are found within a type.  You can think of them as kind of an \"anti-kind\".  They track the kinds of values and thinks that are contained in types.  Having a larger contents for a type tends to rule that type *out* from various kinds.  For example, a type that contains a reference is not sendable."],["TypeFlags",""],["TypeParameterDef",""],["TypeScheme","A \"type scheme\", in ML terminology, is a type combined with some set of generic types that the type is, well, generic over. In Rust terms, it is the \"type\" of a fn item or struct -- this type will include various generic parameters that must be substituted when the item/struct is referenced. That is called converting the type scheme to a monotype."],["UpvarBorrow",""],["UpvarId","Upvars do not get their own node-id. Instead, we use the pair of the original var id (that is, the root variable that is referenced by the upvar) and the id of the closure expression."],["VariantDefData",""],["ctxt","The data structure to keep track of all the information that typechecker generates so that so that it can be reused and doesn't have to be redone later on."]],"trait":[["Lift","A trait implemented for all X<'a> types which can be safely and efficiently converted to X<'tcx> as long as they are part of the provided ty::ctxt<'tcx>. This can be done, for example, for Ty<'tcx> or &'tcx Substs<'tcx> by looking them up in their respective interners. None is returned if the value or one of the components is not part of the provided context. For Ty, None can be returned if either the type interner doesn't contain the TypeVariants key or if the address of the interned pointer differs. The latter case is possible if a primitive type, e.g. `()` or `u8`, was interned in a different context."],["ToPolyTraitRef",""],["ToPredicate",""]],"type":[["AdtDef",""],["AdtDefMaster",""],["CaptureModeMap",""],["Disr",""],["FieldDef",""],["FieldDefMaster",""],["FreevarMap",""],["GlobMap",""],["MethodMap",""],["PolyEquatePredicate",""],["PolyFnOutput",""],["PolyFnSig",""],["PolyOutlivesPredicate",""],["PolyProjectionPredicate",""],["PolyRegionOutlivesPredicate",""],["PolyTraitPredicate",""],["PolyTraitRef",""],["PolyTypeOutlivesPredicate",""],["TraitMap",""],["Ty",""],["UpvarCaptureMap",""],["VariantDef",""],["VariantDefMaster",""]]});