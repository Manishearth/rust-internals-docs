initSidebarItems({"struct":[["Match","A type \"A\" *matches* \"B\" if the fresh types in B could be substituted with values so as to make it equal to A. Matching is intended to be used only on freshened types, and it basically indicates if the non-freshened versions of A and B could have been unified.It is only an approximation. If it yields false, unification would definitely fail, but a true result doesn't mean unification would succeed. This is because we don't track the \"side-constraints\" on type variables, nor do we track if the same freshened type appears more than once. To some extent these approximations could be fixed, given effort.Like subtyping, matching is really a binary relation, so the only important thing about the result is Ok/Err. Also, matching never affects any type variables or unification state."]]});