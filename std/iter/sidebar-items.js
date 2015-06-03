initSidebarItems({"enum":[["MinMaxResult","`MinMaxResult` is an enum returned by `min_max`. See `Iterator::min_max` for more detail."]],"fn":[["empty","Creates an iterator that yields nothing."],["iterate","Creates a new iterator that produces an infinite sequence of repeated applications of the given function `f`."],["once","Creates an iterator that yields an element exactly once."],["range_inclusive","Returns an iterator over the range [start, stop]."],["repeat","Creates a new iterator that endlessly repeats the element `elt`."]],"mod":[["order","Functions for lexicographical ordering of sequences."]],"struct":[["Chain","An iterator that strings two iterators together"],["Cloned","An iterator that clones the elements of an underlying iterator"],["Cycle","An iterator that repeats endlessly"],["Empty","An iterator that yields nothing."],["Enumerate","An iterator that yields the current count and the element during iteration"],["Filter","An iterator that filters the elements of `iter` with `predicate`"],["FilterMap","An iterator that uses `f` to both filter and map elements from `iter`"],["FlatMap","An iterator that maps each element to an iterator, and yields the elements of the produced iterators"],["Fuse","An iterator that yields `None` forever after the underlying iterator yields `None` once."],["Inspect","An iterator that calls a function with a reference to each element before yielding it."],["Map","An iterator that maps the values of `iter` with `f`"],["Once","An iterator that yields an element exactly once."],["Peekable","An iterator with a `peek()` that returns an optional reference to the next element."],["RangeInclusive","An iterator over the range [start, stop]"],["Repeat","An iterator that repeats an element endlessly"],["Rev","An double-ended iterator with the direction inverted"],["Scan","An iterator to maintain state while iterating another iterator"],["Skip","An iterator that skips over `n` elements of `iter`."],["SkipWhile","An iterator that rejects elements while `predicate` is true"],["StepBy","An adapter for stepping range iterators by a custom amount."],["Take","An iterator that only iterates over the first `n` iterations of `iter`."],["TakeWhile","An iterator that only accepts elements while `predicate` is true"],["Unfold","An iterator that passes mutable state to a closure and yields the result."],["Zip","An iterator that iterates two other iterators simultaneously"]],"trait":[["DoubleEndedIterator","A range iterator able to yield elements from both ends"],["ExactSizeIterator","An iterator that knows its exact length"],["Extend","A type growable from an `Iterator` implementation"],["FromIterator","Conversion from an `Iterator`"],["IntoIterator","Conversion into an `Iterator`"],["Iterator","An interface for dealing with \"external iterators\". These types of iterators can be resumed at any time as all state is stored internally as opposed to being located on the call stack."],["RandomAccessIterator","An object implementing random access indexing by `usize`"],["Step","Objects that can be stepped over in both directions."]],"type":[["Iterate",""]]});