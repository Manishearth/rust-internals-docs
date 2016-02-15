initSidebarItems({"mod":[["abi",""],["rpath",""],["svh","Calculation and management of a Strict Version Hash for cratesToday's ABI problemIn today's implementation of rustc, it is incredibly difficult to achieve forward binary compatibility without resorting to C-like interfaces. Within rust code itself, abi details such as symbol names suffer from a variety of unrelated factors to code changing such as the \"def id drift\" problem. This ends up yielding confusing error messages about metadata mismatches and such.The core of this problem is when an upstream dependency changes and downstream dependents are not recompiled. This causes compile errors because the upstream crate's metadata has changed but the downstream crates are still referencing the older crate's metadata.This problem exists for many reasons, the primary of which is that rust does not currently support forwards ABI compatibility (in place upgrades of a crate).SVH and how it alleviates the problemWith all of this knowledge on hand, this module contains the implementation of a notion of a \"Strict Version Hash\" for a crate. This is essentially a hash of all contents of a crate which can somehow be exposed to downstream crates.This hash is currently calculated by just hashing the AST, but this is obviously wrong (doc changes should not result in an incompatible ABI). Implementation-wise, this is required at this moment in time.By encoding this strict version hash into all crate's metadata, stale crates can be detected immediately and error'd about by rustc itself.Relevant linksOriginal issue: https://github.com/rust-lang/rust/issues/10207"]]});