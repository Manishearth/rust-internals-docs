initSidebarItems({"enum":[["MethodViolationCode","Reasons a method might not be object-safe."],["ObjectSafetyViolation",""]],"fn":[["astconv_object_safety_violations","Returns the object safety violations that affect astconv - currently, Self in supertraits. This is needed because `object_safety_violations` can't be used during type collection."],["is_object_safe",""],["is_vtable_safe_method","We say a method is *vtable safe* if it can be invoked on a trait object.  Note that object-safe traits can have some non-vtable-safe methods, so long as they require `Self:Sized` or otherwise ensure that they cannot be used when `Self=Trait`."],["object_safety_violations",""]]});