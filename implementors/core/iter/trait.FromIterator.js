(function() {var implementors = {};
implementors['collections'] = ["impl&lt;T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","impl&lt;K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;(K, V)&gt; for <a class='struct' href='collections/struct.BTreeMap.html' title='collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/struct.BTreeSet.html' title='collections::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a>&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;char&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a str&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, [T]&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['core'] = [];implementors['syntax'] = ["impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='syntax/util/small_vector/struct.SmallVector.html' title='syntax::util::small_vector::SmallVector'>SmallVector</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;<a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt;",];implementors['rustc'] = ["impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['rustc_borrowck'] = ["impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='rustc_front/hir/struct.Pat.html' title='rustc_front::hir::Pat'>Pat</a>&gt;&gt; for <a class='struct' href='rustc/middle/check_match/struct.Matrix.html' title='rustc::middle::check_match::Matrix'>Matrix</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['rustc_lint'] = ["impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='rustc_front/hir/struct.Pat.html' title='rustc_front::hir::Pat'>Pat</a>&gt;&gt; for <a class='struct' href='rustc/middle/check_match/struct.Matrix.html' title='rustc::middle::check_match::Matrix'>Matrix</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['rustc_metadata'] = ["impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='rustc_front/hir/struct.Pat.html' title='rustc_front::hir::Pat'>Pat</a>&gt;&gt; for <a class='struct' href='rustc/middle/check_match/struct.Matrix.html' title='rustc::middle::check_match::Matrix'>Matrix</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['rustc_typeck'] = ["impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='rustc_front/hir/struct.Pat.html' title='rustc_front::hir::Pat'>Pat</a>&gt;&gt; for <a class='struct' href='rustc/middle/check_match/struct.Matrix.html' title='rustc::middle::check_match::Matrix'>Matrix</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['rustc_trans'] = ["impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='rustc_front/hir/struct.Pat.html' title='rustc_front::hir::Pat'>Pat</a>&gt;&gt; for <a class='struct' href='rustc/middle/check_match/struct.Matrix.html' title='rustc::middle::check_match::Matrix'>Matrix</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='syntax/util/small_vector/struct.SmallVector.html' title='syntax::util::small_vector::SmallVector'>SmallVector</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;<a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt;",];implementors['rustdoc'] = ["impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;&amp;'a <a class='struct' href='rustc_front/hir/struct.Pat.html' title='rustc_front::hir::Pat'>Pat</a>&gt;&gt; for <a class='struct' href='rustc/middle/check_match/struct.Matrix.html' title='rustc::middle::check_match::Matrix'>Matrix</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='std/primitive.char.html'>char</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='std/primitive.slice.html'>[T]</a>&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
