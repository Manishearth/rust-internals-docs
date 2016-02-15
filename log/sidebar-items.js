initSidebarItems({"constant":[["DEBUG","Debug log level"],["ERROR","Error log level"],["INFO","Info log level"],["MAX_LOG_LEVEL","Maximum logging level of a module that can be specified. Common logging levels are found in the DEBUG/INFO/WARN/ERROR constants."],["WARN","Warn log level"]],"fn":[["set_logger","Replaces the thread-local logger with the specified logger, returning the old logger."]],"macro":[["debug!","A convenience macro for logging at the debug log level. This macro will be omitted at compile time in an optimized build unless `-C debug-assertions` is passed to the compiler.ExamplesAssumes the binary is `main`:"],["error!","A convenience macro for logging at the error log level.ExamplesAssumes the binary is `main`:"],["info!","A convenience macro for logging at the info log level.ExamplesAssumes the binary is `main`:"],["log!","The standard logging macroThis macro will generically log over a provided level (of type u32) with a format!-based argument list. See documentation in `std::fmt` for details on how to use the syntax.ExamplesAssumes the binary is `main`:"],["log_enabled!","A macro to test whether a log level is enabled for the current module.ExamplesAssumes the binary is `main`:"],["warn!","A convenience macro for logging at the warning log level.ExamplesAssumes the binary is `main`:"]],"mod":[["macros","Logging macros"]],"struct":[["LogLevel","Wraps the log level with fmt implementations."],["LogRecord","A LogRecord is created by the logging macros, and passed as the only argument to Loggers."]],"trait":[["Logger","A trait used to represent an interface to a thread-local logger. Each thread can have its own custom logger which can respond to logging messages however it likes."]]});