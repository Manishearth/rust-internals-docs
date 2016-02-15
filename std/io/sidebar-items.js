initSidebarItems({"enum":[["CharsError","An enumeration of possible errors that can be generated from the `Chars` adapter."],["ErrorKind","A list specifying general categories of I/O error.This list is intended to grow over time and it is not recommended to exhaustively match against it."],["SeekFrom","Enumeration of possible methods to seek within an I/O object."]],"fn":[["copy","Copies the entire contents of a reader into a writer.This function will continuously read data from `reader` and then write it into `writer` in a streaming fashion until `reader` returns EOF.On success, the total number of bytes that were copied from `reader` to `writer` is returned.ErrorsThis function will return an error immediately if any call to `read` or `write` returns an error. All instances of `ErrorKind::Interrupted` are handled by this function and the underlying operation is retried.Examples"],["empty","Constructs a new handle to an empty reader.All reads from the returned reader will return `Ok(0)`.ExamplesA slightly sad example of not reading anything into a buffer:"],["repeat","Creates an instance of a reader that infinitely repeats one byte.All reads from this reader will succeed by filling the specified buffer with the given byte."],["sink","Creates an instance of a writer which will successfully consume all data.All calls to `write` on the returned instance will return `Ok(buf.len())` and the contents of the buffer will not be inspected."],["stderr","Constructs a new handle to the standard error of the current process.This handle is not buffered.ExamplesUsing implicit synchronization:Using explicit synchronization:"],["stdin","Constructs a new handle to the standard input of the current process.Each handle returned is a reference to a shared global buffer whose access is synchronized via a mutex. If you need more explicit control over locking, see the `lock() method`.ExamplesUsing implicit synchronization:Using explicit synchronization:"],["stdout","Constructs a new handle to the standard output of the current process.Each handle returned is a reference to a shared global buffer whose access is synchronized via a mutex. If you need more explicit control over locking, see the Stdout::lock method.ExamplesUsing implicit synchronization:Using explicit synchronization:"]],"mod":[["prelude","The I/O PreludeThe purpose of this module is to alleviate imports of many common I/O traits by adding a glob import to the top of I/O heavy modules:"]],"struct":[["Broadcast","A `Write` adaptor which will write data to multiple locations.This struct is generally created by calling `broadcast()` on a writer. Please see the documentation of `broadcast()` for more details."],["BufReader","The `BufReader` struct adds buffering to any reader.It can be excessively inefficient to work directly with a `Read` instance. For example, every call to `read` on `TcpStream` results in a system call. A `BufReader` performs large, infrequent reads on the underlying `Read` and maintains an in-memory buffer of the results.Examples"],["BufWriter","Wraps a writer and buffers its output.It can be excessively inefficient to work directly with something that implements `Write`. For example, every call to `write` on `TcpStream` results in a system call. A `BufWriter` keeps an in-memory buffer of data and writes it to an underlying writer in large, infrequent batches.The buffer will be written out when the writer is dropped.ExamplesLet's write the numbers one through ten to a `TcpStream`:Because we're not buffering, we write each one in turn, incurring the overhead of a system call per byte written. We can fix this with a `BufWriter`:By wrapping the stream with a `BufWriter`, these ten writes are all grouped together by the buffer, and will all be written out in one system call when the `stream` is dropped."],["Bytes","An iterator over `u8` values of a reader.This struct is generally created by calling `bytes()` on a reader. Please see the documentation of `bytes()` for more details."],["Chain","Adaptor to chain together two readers.This struct is generally created by calling `chain()` on a reader. Please see the documentation of `chain()` for more details."],["Chars","An iterator over the `char`s of a reader.This struct is generally created by calling `chars()` on a reader. Please see the documentation of `chars()` for more details."],["Cursor","A `Cursor` wraps another type and provides it with a `Seek` implementation.Cursors are typically used with in-memory buffers to allow them to implement `Read` and/or `Write`, allowing these buffers to be used anywhere you might use a reader or writer that does actual I/O.The standard library implements some I/O traits on various types which are commonly used as a buffer, like `Cursor<Vec<u8>>` and `Cursor<&[u8]>`.ExamplesWe may want to write bytes to a `File` in our production code, but use an in-memory buffer in our tests. We can do this with `Cursor`:"],["Empty","A reader which is always at EOF.This struct is generally created by calling `empty()`. Please see the documentation of `empty()` for more details."],["Error","The error type for I/O operations of the `Read`, `Write`, `Seek`, and associated traits.Errors mostly originate from the underlying OS, but custom instances of `Error` can be created with crafted error messages and a particular value of `ErrorKind`."],["IntoInnerError","An error returned by `into_inner` which combines an error that happened while writing out the buffer, and the buffered writer object which may be used to recover from the condition.Examples"],["LineWriter","Wraps a writer and buffers output to it, flushing whenever a newline (`0x0a`, `'\\n'`) is detected.The `BufWriter` struct wraps a writer and buffers its output. But it only does this batched write when it goes out of scope, or when the internal buffer is full. Sometimes, you'd prefer to write each line as it's completed, rather than the entire buffer at once. Enter `LineWriter`. It does exactly that.If there's still a partial line in the buffer when the `LineWriter` is dropped, it will flush those contents.ExamplesWe can use `LineWriter` to write one line at a time, significantly reducing the number of actual writes to the file."],["Lines","An iterator over the lines of an instance of `BufRead`.This struct is generally created by calling `lines()` on a `BufRead`. Please see the documentation of `lines()` for more details."],["Repeat","A reader which yields one byte over and over and over and over and over and...This struct is generally created by calling `repeat()`. Please see the documentation of `repeat()` for more details."],["Sink","A writer which will move data into the void.This struct is generally created by calling `sink()`. Please see the documentation of `sink()` for more details."],["Split","An iterator over the contents of an instance of `BufRead` split on a particular byte.This struct is generally created by calling `split()` on a `BufRead`. Please see the documentation of `split()` for more details."],["Stderr","A handle to the standard error stream of a process.For more information, see the `io::stderr` method."],["StderrLock","A locked reference to the `Stderr` handle.This handle implements the `Write` trait and is constructed via the `Stderr::lock` method."],["Stdin","A handle to the standard input stream of a process.Each handle is a shared reference to a global buffer of input data to this process. A handle can be `lock`'d to gain full access to `BufRead` methods (e.g. `.lines()`). Writes to this handle are otherwise locked with respect to other writes.This handle implements the `Read` trait, but beware that concurrent reads of `Stdin` must be executed with care.Created by the `io::stdin` method."],["StdinLock","A locked reference to the `Stdin` handle.This handle implements both the `Read` and `BufRead` traits, and is constructed via the `Stdin::lock` method."],["Stdout","A handle to the global standard output stream of the current process.Each handle shares a global buffer of data to be written to the standard output stream. Access is also synchronized via a lock and explicit control over locking is available via the `lock` method.Created by the `io::stdout` method."],["StdoutLock","A locked reference to the `Stdout` handle.This handle implements the `Write` trait, and is constructed via the `Stdout::lock` method."],["Take","Reader adaptor which limits the bytes read from an underlying reader.This struct is generally created by calling `take()` on a reader. Please see the documentation of `take()` for more details."],["Tee","An adaptor which will emit all read data to a specified writer as well.This struct is generally created by calling `tee()` on a reader. Please see the documentation of `tee()` for more details."]],"trait":[["BufRead","A `BufRead` is a type of `Read`er which has an internal buffer, allowing it to perform extra ways of reading.For example, reading line-by-line is inefficient without using a buffer, so if you want to read by line, you'll need `BufRead`, which includes a `read_line()` method as well as a `lines()` iterator.ExamplesA locked standard input implements `BufRead`:If you have something that implements `Read`, you can use the `BufReader` type to turn it into a `BufRead`.For example, `File` implements `Read`, but not `BufRead`. `BufReader` to the rescue!"],["Read","The `Read` trait allows for reading bytes from a source.Implementors of the `Read` trait are sometimes called 'readers'.Readers are defined by one required method, `read()`. Each call to `read` will attempt to pull bytes from this source into a provided buffer. A number of other methods are implemented in terms of `read()`, giving implementors a number of ways to read bytes while only needing to implement a single method.Readers are intended to be composable with one another. Many implementors throughout `std::io` take and provide types which implement the `Read` trait.Please note that each call to `read` may involve a system call, and therefore, using something that implements `BufRead`, such as `BufReader`, will be more efficient.Examples`File`s implement `Read`:"],["Seek","The `Seek` trait provides a cursor which can be moved within a stream of bytes.The stream typically has a fixed size, allowing seeking relative to either end or the current offset.Examples`File`s implement `Seek`:"],["Write","A trait for objects which are byte-oriented sinks.Implementors of the `Write` trait are sometimes called 'writers'.Writers are defined by two required methods, `write()` and `flush()`:The `write()` method will attempt to write some data into the object, returning how many bytes were successfully written.The `flush()` method is useful for adaptors and explicit buffers themselves for ensuring that all buffered data has been pushed out to the 'true sink'.Writers are intended to be composable with one another. Many implementors throughout `std::io` take and provide types which implement the `Write` trait.Examples"]],"type":[["Result","A specialized `Result` type for I/O operations.This type is broadly used across `std::io` for any operation which may produce an error.This typedef is generally used to avoid writing out `io::Error` directly and is otherwise a direct mapping to `Result`.While usual Rust style is to import types directly, aliases of `Result` often are not, to make it easier to distinguish between them. `Result` is generally assumed to be `std::result::Result`, and so users of this alias will generally use `io::Result` instead of shadowing the prelude's import of `std::result::Result`.ExamplesA convenience function that bubbles an `io::Result` to its caller:"]]});