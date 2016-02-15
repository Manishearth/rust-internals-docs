initSidebarItems({"enum":[["DefPathData",""],["MapEntry","Represents an entry and its parent NodeID. The odd layout is to bring down the total size."],["Node",""],["PathElem",""]],"fn":[["map_crate",""],["map_decoded_item","Used for items loaded from external crate that are being inlined into this crate."],["path_to_string",""]],"mod":[["blocks","This module provides a simplified abstraction for working with code blocks identified by their integer node-id.  In particular, it captures a common set of attributes that all \"function-like things\" (represented by `FnLike` instances) share.  For example, all `FnLike` instances have a type signature (be it explicit or inferred).  And all `FnLike` instances have a body, i.e. the code that is run when the function-like thing it represents is invoked.With the above abstraction in place, one can treat the program text as a collection of blocks of code (and most such blocks are nested within a uniquely determined `FnLike`), and users can ask for the `Code` associated with a particular NodeId."],["definitions",""]],"struct":[["DefKey","A unique identifier that we can use to lookup a definition precisely. It combines the index of the definition's parent (if any) with a `DisambiguatedDefPathData`."],["Definitions",""],["DisambiguatedDefPathData","Pair of `DefPathData` and an integer disambiguator. The integer is normally 0, but in the event that there are multiple defs with the same `parent` and `data`, we use this field to disambiguate between them. This introduces some artificial ordering dependency but means that if you have (e.g.) two impls for the same type in the same module, they do get distinct def-ids."],["Forest","Stores a crate and any number of inlined items from other crates."],["InlinedParent",""],["LinkedPath",""],["LinkedPathNode",""],["Map","Represents a mapping from Node IDs to AST elements and their parent Node IDs"],["NodesMatchingSuffix",""]],"trait":[["FoldOps",""],["NodePrinter",""]],"type":[["DefPath",""],["PathElems",""]]});