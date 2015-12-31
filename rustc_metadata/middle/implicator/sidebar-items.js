initSidebarItems({"enum":[["Implication",""]],"fn":[["implications","This routine computes the well-formedness constraints that must hold for the type `ty` to appear in a context with lifetime `outer_region`"],["object_region_bounds","Given an object type like `SomeTrait+Send`, computes the lifetime bounds that must hold on the elided self type. These are derived from the declarations of `SomeTrait`, `Send`, and friends -- if they declare `trait SomeTrait : 'static`, for example, then `'static` would appear in the list. The hard work is done by `ty::required_region_bounds`, see that for more information."]]});