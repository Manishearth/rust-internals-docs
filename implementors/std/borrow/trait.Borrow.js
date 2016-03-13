(function() {var implementors = {};
implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='std/borrow/enum.Cow.html' title='std::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a>, B::<a class='trait' href='std/borrow/trait.ToOwned.html' title='std::borrow::ToOwned'>Owned</a>: 'a</span>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.str.html'>str</a>&gt; for <a class='struct' href='std/string/struct.String.html' title='std::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='primitive.slice.html'>[</a>T<a class='primitive' href='primitive.slice.html'>]</a>&gt; for <a class='struct' href='std/vec/struct.Vec.html' title='std::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.CStr.html' title='std::ffi::CStr'>CStr</a>&gt; for <a class='struct' href='std/ffi/struct.CString.html' title='std::ffi::CString'>CString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/ffi/struct.OsStr.html' title='std::ffi::OsStr'>OsStr</a>&gt; for <a class='struct' href='std/ffi/struct.OsString.html' title='std::ffi::OsString'>OsString</a>","impl <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl&lt;T&gt; <a class='trait' href='std/borrow/trait.Borrow.html' title='std::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='std/marker/trait.Sized.html' title='std::marker::Sized'>Sized</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
