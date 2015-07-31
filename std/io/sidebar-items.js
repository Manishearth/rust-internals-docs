initSidebarItems({"enum":[["CharsError","An enumeration of possible errors that can be generated from the `Chars` adapter."],["ErrorKind","A list specifying general categories of I/O error."],["SeekFrom","Enumeration of possible methods to seek within an I/O object."]],"fn":[["copy","Copies the entire contents of a reader into a writer."],["empty","Constructs a new handle to an empty reader."],["repeat","Creates an instance of a reader that infinitely repeats one byte."],["sink","Creates an instance of a writer which will successfully consume all data."],["stderr","Constructs a new handle to the standard error of the current process."],["stdin","Constructs a new handle to the standard input of the current process."],["stdout","Constructs a new handle to the standard output of the current process."]],"mod":[["prelude","The I/O Prelude"]],"struct":[["Broadcast","A `Write` adaptor which will write data to multiple locations."],["BufReader","The `BufReader` struct adds buffering to any reader."],["BufStream","Wraps a Stream and buffers input and output to and from it."],["BufWriter","Wraps a writer and buffers its output."],["Bytes","An iterator over `u8` values of a reader."],["Chain","Adaptor to chain together two readers."],["Chars","An iterator over the `char`s of a reader."],["Cursor","A `Cursor` wraps another type and provides it with a `Seek` implementation."],["Empty","A reader which is always at EOF."],["Error","The error type for I/O operations of the `Read`, `Write`, `Seek`, and associated traits."],["IntoInnerError","An error returned by `into_inner` which combines an error that happened while writing out the buffer, and the buffered writer object which may be used to recover from the condition."],["LineWriter","Wraps a writer and buffers output to it, flushing whenever a newline (`0x0a`, `'\\n'`) is detected."],["Lines","An iterator over the lines of an instance of `BufRead`."],["Repeat","A reader which yields one byte over and over and over and over and over and..."],["Sink","A writer which will move data into the void."],["Split","An iterator over the contents of an instance of `BufRead` split on a particular byte."],["Stderr","A handle to the standard error stream of a process."],["StderrLock","A locked reference to the a `Stderr` handle."],["Stdin","A handle to the standard input stream of a process."],["StdinLock","A locked reference to the a `Stdin` handle."],["Stdout","A handle to the global standard output stream of the current process."],["StdoutLock","A locked reference to the a `Stdout` handle."],["Take","Reader adaptor which limits the bytes read from an underlying reader."],["Tee","An adaptor which will emit all read data to a specified writer as well."]],"trait":[["BufRead","A `BufRead` is a type of `Read`er which has an internal buffer, allowing it to perform extra ways of reading."],["Read","The `Read` trait allows for reading bytes from a source."],["Seek","The `Seek` trait provides a cursor which can be moved within a stream of bytes."],["Write","A trait for objects which are byte-oriented sinks."]],"type":[["Result","A specialized [`Result`][result] type for I/O operations."]]});