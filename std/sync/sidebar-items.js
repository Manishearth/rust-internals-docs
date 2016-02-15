initSidebarItems({"constant":[["CONDVAR_INIT","Constant initializer for a statically allocated condition variable."],["MUTEX_INIT","Static initialization of a mutex. This constant can be used to initialize other mutex constants."],["ONCE_INIT","Initialization value for static `Once` values."],["RW_LOCK_INIT","Constant initialization for a statically-initialized rwlock."]],"enum":[["TryLockError","An enumeration of possible errors which can occur while calling the `try_lock` method."]],"mod":[["atomic","Atomic typesAtomic types provide primitive shared-memory communication between threads, and are the building blocks of other concurrent types.This module defines atomic versions of a select number of primitive types, including `AtomicBool`, `AtomicIsize`, and `AtomicUsize`. Atomic types present operations that, when used correctly, synchronize updates between threads.Each method takes an `Ordering` which represents the strength of the memory barrier for that operation. These orderings are the same as LLVM atomic orderings.Atomic variables are safe to share between threads (they implement `Sync`) but they do not themselves provide the mechanism for sharing. The most common way to share an atomic variable is to put it into an `Arc` (an atomically-reference-counted shared pointer).Most atomic types may be stored in static variables, initialized using the provided static initializers like `INIT_ATOMIC_BOOL`. Atomic statics are often used for lazy global initialization.ExamplesA simple spinlock:Keep a global count of live threads:"],["mpsc","Multi-producer, single-consumer FIFO queue communication primitives.This module provides message-based communication over channels, concretely defined among three types:`Sender` `SyncSender` `Receiver` A `Sender` or `SyncSender` is used to send data to a `Receiver`. Both senders are clone-able (multi-producer) such that many threads can send simultaneously to one receiver (single-consumer).These channels come in two flavors:An asynchronous, infinitely buffered channel. The `channel()` function will return a `(Sender, Receiver)` tuple where all sends will be **asynchronous** (they never block). The channel conceptually has an infinite buffer.A synchronous, bounded channel. The `sync_channel()` function will return a `(SyncSender, Receiver)` tuple where the storage for pending messages is a pre-allocated buffer of a fixed size. All sends will be **synchronous** by blocking until there is buffer space available. Note that a bound of 0 is allowed, causing the channel to become a \"rendezvous\" channel where each sender atomically hands off a message to a receiver.DisconnectionThe send and receive operations on channels will all return a `Result` indicating whether the operation succeeded or not. An unsuccessful operation is normally indicative of the other half of a channel having \"hung up\" by being dropped in its corresponding thread.Once half of a channel has been deallocated, most operations can no longer continue to make progress, so `Err` will be returned. Many applications will continue to `unwrap()` the results returned from this module, instigating a propagation of failure among threads if one unexpectedly dies.ExamplesSimple usage:Shared usage:Propagating panics:Synchronous channels:"]],"struct":[["Arc","An atomically reference counted wrapper for shared state.ExamplesIn this example, a large vector is shared between several threads. With simple pipes, without `Arc`, a copy would have to be made for each thread.When you clone an `Arc<T>`, it will create another pointer to the data and increase the reference counter."],["Barrier","A barrier enables multiple threads to synchronize the beginning of some computation."],["BarrierWaitResult","A result returned from wait.Currently this opaque structure only has one method, `.is_leader()`. Only one thread will receive a result that will return `true` from this function."],["Condvar","A Condition VariableCondition variables represent the ability to block a thread such that it consumes no CPU time while waiting for an event to occur. Condition variables are typically associated with a boolean predicate (a condition) and a mutex. The predicate is always verified inside of the mutex before determining that thread must block.Functions in this module will block the current **thread** of execution and are bindings to system-provided condition variables where possible. Note that this module places one additional restriction over the system condition variables: each condvar can be used with precisely one mutex at runtime. Any attempt to use multiple mutexes on the same condition variable will result in a runtime panic. If this is not desired, then the unsafe primitives in `sys` do not have this restriction but may result in undefined behavior.Examples"],["Mutex","A mutual exclusion primitive useful for protecting shared dataThis mutex will block threads waiting for the lock to become available. The mutex can also be statically initialized or created via a `new` constructor. Each mutex has a type parameter which represents the data that it is protecting. The data can only be accessed through the RAII guards returned from `lock` and `try_lock`, which guarantees that the data is only ever accessed when the mutex is locked.PoisoningThe mutexes in this module implement a strategy called \"poisoning\" where a mutex is considered poisoned whenever a thread panics while holding the lock. Once a mutex is poisoned, all other threads are unable to access the data by default as it is likely tainted (some invariant is not being upheld).For a mutex, this means that the `lock` and `try_lock` methods return a `Result` which indicates whether a mutex has been poisoned or not. Most usage of a mutex will simply `unwrap()` these results, propagating panics among threads to ensure that a possibly invalid invariant is not witnessed.A poisoned mutex, however, does not prevent all access to the underlying data. The `PoisonError` type has an `into_inner` method which will return the guard that would have otherwise been returned on a successful lock. This allows access to the data, despite the lock being poisoned.ExamplesTo recover from a poisoned mutex:"],["MutexGuard","An RAII implementation of a \"scoped lock\" of a mutex. When this structure is dropped (falls out of scope), the lock will be unlocked.The data protected by the mutex can be access through this guard via its `Deref` and `DerefMut` implementations"],["Once","A synchronization primitive which can be used to run a one-time global initialization. Useful for one-time initialization for FFI or related functionality. This type can only be constructed with the `ONCE_INIT` value.Examples"],["PoisonError","A type of error which can be returned whenever a lock is acquired.Both Mutexes and RwLocks are poisoned whenever a thread fails while the lock is held. The precise semantics for when a lock is poisoned is documented on each lock, but once a lock is poisoned then all future acquisitions will return this error."],["RwLock","A reader-writer lockThis type of lock allows a number of readers or at most one writer at any point in time. The write portion of this lock typically allows modification of the underlying data (exclusive access) and the read portion of this lock typically allows for read-only access (shared access).The priority policy of the lock is dependent on the underlying operating system's implementation, and this type does not guarantee that any particular policy will be used.The type parameter `T` represents the data that this lock protects. It is required that `T` satisfies `Send` to be shared across threads and `Sync` to allow concurrent access through readers. The RAII guards returned from the locking methods implement `Deref` (and `DerefMut` for the `write` methods) to allow access to the contained of the lock.PoisoningRwLocks, like Mutexes, will become poisoned on panics. Note, however, that an RwLock may only be poisoned if a panic occurs while it is locked exclusively (write mode). If a panic occurs in any reader, then the lock will not be poisoned.Examples"],["RwLockReadGuard","RAII structure used to release the shared read access of a lock when dropped."],["RwLockWriteGuard","RAII structure used to release the exclusive write access of a lock when dropped."],["Semaphore","A counting, blocking, semaphore.Semaphores are a form of atomic counter where access is only granted if the counter is a positive value. Each acquisition will block the calling thread until the counter is positive, and each release will increment the counter and unblock any threads if necessary.Examples"],["SemaphoreGuard","An RAII guard which will release a resource acquired from a semaphore when dropped."],["StaticCondvar","Statically allocated condition variables.This structure is identical to `Condvar` except that it is suitable for use in static initializers for other structures.Examples"],["StaticMutex","The static mutex type is provided to allow for static allocation of mutexes.Note that this is a separate type because using a Mutex correctly means that it needs to have a destructor run. In Rust, statics are not allowed to have destructors. As a result, a `StaticMutex` has one extra method when compared to a `Mutex`, a `destroy` method. This method is unsafe to call, and documentation can be found directly on the method.Examples"],["StaticRwLock","Structure representing a statically allocated RwLock.This structure is intended to be used inside of a `static` and will provide automatic global access as well as lazy initialization. The internal resources of this RwLock, however, must be manually deallocated.Examples"],["WaitTimeoutResult","A type indicating whether a timed wait on a condition variable returned due to a time out or not."],["Weak","A weak pointer to an `Arc`.Weak pointers will not keep the data inside of the `Arc` alive, and can be used to break cycles between `Arc` pointers."]],"type":[["LockResult","A type alias for the result of a lock method which can be poisoned.The `Ok` variant of this result indicates that the primitive was not poisoned, and the `Guard` is contained within. The `Err` variant indicates that the primitive was poisoned. Note that the `Err` variant *also* carries the associated guard, and it can be acquired through the `into_inner` method."],["TryLockResult","A type alias for the result of a nonblocking locking method.For more information, see `LockResult`. A `TryLockResult` doesn't necessarily hold the associated guard in the `Err` type as the lock may not have been acquired for other reasons."]]});