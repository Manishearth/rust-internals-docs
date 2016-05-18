initSidebarItems({"enum":[["BinOp_",""],["BindingMode",""],["BlockCheckMode",""],["CaptureClause",""],["Constness",""],["Decl_",""],["Defaultness",""],["Expr_",""],["ForeignItem_","An item within an `extern` block"],["FunctionRetTy",""],["ImplItemKind",""],["ImplPolarity",""],["Item_",""],["MatchSource",""],["Mutability",""],["PatKind",""],["PathListItem_",""],["PathParameters",""],["PrimTy","Not represented directly in the AST, referred to by name through a ty_path."],["SelfKind","Alternative representation for `Arg`s describing `self` parameter of methods."],["Stmt_",""],["TraitBoundModifier","A modifier on a bound, currently this is only used for `?Sized`, where the modifier is `Maybe`. Negative bounds should also be handled here."],["TraitItem_",""],["TyParamBound","The AST represents all type param bounds as types. typeck::collect::compute_bounds matches these against the \"special\" built-in traits (see middle::lang_items) and detects Copy, Send and Sync."],["Ty_","The different kinds of types recognized by the compiler"],["UnOp",""],["UnsafeSource",""],["Unsafety",""],["VariantData","Fields and Ids of enum variants and structs"],["ViewPath_",""],["Visibility",""],["WherePredicate","A single predicate in a `where` clause"]],"mod":[["check_attr",""],["def",""],["def_id",""],["fold","A Folder represents an HIR->HIR fold; it accepts a HIR piece, and returns a piece of the same type."],["intravisit","HIR walker. Each overridden visit method has full control over what happens with its node, it can do its own traversal of the node's children, call `intravisit::walk_*` to apply the default traversal algorithm, or prevent deeper traversal by doing nothing."],["lowering",""],["map",""],["pat_util",""],["print",""],["svh","Calculation and management of a Strict Version Hash for crates"]],"struct":[["AngleBracketedParameterData","A path like `Foo<'a, T>`"],["Arg","represents an argument in a function header"],["Arm","represents one arm of a 'match'"],["BareFnTy",""],["Block",""],["Crate",""],["EnumDef",""],["Expr","An expression"],["Field",""],["FieldPat","A single field in a struct pattern"],["FnDecl","Represents the header (not the body) of a function declaration"],["ForeignItem",""],["ForeignMod",""],["Freevar","A free variable referred to in a function."],["Generics","Represents lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["ImplItem",""],["InlineAsm",""],["InlineAsmOutput",""],["Item","An item"],["ItemId",""],["Lifetime",""],["LifetimeDef","A lifetime definition, eg `'a: 'b+'c+'d`"],["Local","Local represents a `let` statement, e.g., `let <pat>:<ty> = <expr>;`"],["MacroDef","A macro definition, in this crate or imported from another."],["MethodSig","Represents a method's signature in a trait declaration, or in an implementation."],["Mod",""],["MutTy",""],["ParenthesizedParameterData","A path like `Foo(A,B) -> C`"],["Pat",""],["Path","A \"Path\" is essentially Rust's notion of a name; for instance: std::cmp::PartialEq  .  It's represented as a sequence of identifiers, along with a bunch of supporting information."],["PathSegment","A segment of a path: an identifier, an optional lifetime, and a set of types."],["PolyTraitRef",""],["QSelf","The explicit Self type in a \"qualified path\". The actual path, including the trait and the associated item, is stored separately. `position` represents the index of the associated item qualified with this Self type."],["StructField",""],["TraitCandidate",""],["TraitItem","Represents an item declaration within a trait declaration, possibly including a default implementation. A trait item is either required (meaning it doesn't have an implementation, just a signature) or provided (meaning it has a default implementation)."],["TraitRef","TraitRef's appear in impls."],["Ty",""],["TyParam",""],["TypeBinding",""],["Variant_",""],["WhereBoundPredicate","A type bound, eg `for<'c> Foo: Send+Clone+'c`"],["WhereClause","A `where` clause in a definition"],["WhereEqPredicate","An equality predicate (unsupported), e.g. `T=int`"],["WhereRegionPredicate","A lifetime predicate, e.g. `'a: 'b+'c`"]],"type":[["BinOp",""],["CaptureModeMap",""],["CrateConfig",""],["Decl",""],["ExplicitSelf",""],["FreevarMap",""],["GlobMap",""],["HirVec","HIR doesn't commit to a concrete storage type and have its own alias for a vector. It can be `Vec`, `P<[T]>` or potentially `Box<[T]>`, or some other container with similar behavior. Unlike AST, HIR is mostly a static structure, so we can use an owned slice instead of `Vec` to avoid keeping extra capacity."],["PathListItem",""],["Stmt","A statement"],["TraitMap",""],["TyParamBounds",""],["Variant",""],["ViewPath",""]]});