initSidebarItems({"constant":[["DIAGNOSTICS",""]],"enum":[["MakeGlobMap",""],["Namespace",""],["ResolutionError",""],["ResolveResult",""],["UnresolvedNameContext","Context of where `ResolutionError::UnresolvedName` arose."]],"fn":[["create_resolver","Builds a name resolution walker to be used within this module, or used externally, with an optional callback function.The callback takes a &mut bool which allows callbacks to end a walk when set to true, passing through the rest of the walk, while preserving the ribs + current module. This allows resolve_path calls to be made with the correct scope info. The node in the callback corresponds to the current node in the walk."],["resolve_crate","Entry point to crate resolution."]],"struct":[["CrateMap",""],["DefModifiers",""],["ModuleS","One node in the tree of modules."],["NameBinding",""],["Resolver","The main resolver class."],["ResolverArenas",""]],"type":[["ErrorMessage",""],["Module",""]]});