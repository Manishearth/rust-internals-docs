(function() {var implementors = {};
implementors['alloc'] = ["impl&lt;T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","impl&lt;T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;",];implementors['rustc_unicode'] = [];implementors['core'] = [];implementors['syntax'] = ["impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='syntax/util/interner/struct.RcStr.html' title='syntax::util::interner::RcStr'>RcStr</a>",];implementors['rustc'] = ["impl&lt;'tcx&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='enum' href='rustc/middle/ty/enum.TypeVariants.html' title='rustc::middle::ty::TypeVariants'>TypeVariants</a>&lt;'tcx&gt;&gt; for <a class='struct' href='rustc/middle/ty/struct.InternedTy.html' title='rustc::middle::ty::InternedTy'>InternedTy</a>&lt;'tcx&gt;","impl&lt;'a, B&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.slice.html'>[T]</a>&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];implementors['rustc_borrowck'] = ["impl&lt;'tcx&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='enum' href='rustc/middle/ty/enum.TypeVariants.html' title='rustc::middle::ty::TypeVariants'>TypeVariants</a>&lt;'tcx&gt;&gt; for <a class='struct' href='rustc/middle/ty/struct.InternedTy.html' title='rustc::middle::ty::InternedTy'>InternedTy</a>&lt;'tcx&gt;","impl&lt;'a, B&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.slice.html'>[T]</a>&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];implementors['rustc_lint'] = ["impl&lt;'tcx&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='enum' href='rustc_lint/middle/ty/enum.TypeVariants.html' title='rustc_lint::middle::ty::TypeVariants'>TypeVariants</a>&lt;'tcx&gt;&gt; for <a class='struct' href='rustc_lint/middle/ty/struct.InternedTy.html' title='rustc_lint::middle::ty::InternedTy'>InternedTy</a>&lt;'tcx&gt;","impl&lt;'a, B&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.slice.html'>[T]</a>&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];implementors['rustc_typeck'] = ["impl&lt;'tcx&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='enum' href='rustc_typeck/middle/ty/enum.TypeVariants.html' title='rustc_typeck::middle::ty::TypeVariants'>TypeVariants</a>&lt;'tcx&gt;&gt; for <a class='struct' href='rustc_typeck/middle/ty/struct.InternedTy.html' title='rustc_typeck::middle::ty::InternedTy'>InternedTy</a>&lt;'tcx&gt;","impl&lt;'a, B&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.slice.html'>[T]</a>&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];implementors['rustc_trans'] = ["impl&lt;'tcx&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='enum' href='rustc_trans/middle/ty/enum.TypeVariants.html' title='rustc_trans::middle::ty::TypeVariants'>TypeVariants</a>&lt;'tcx&gt;&gt; for <a class='struct' href='rustc_trans/middle/ty/struct.InternedTy.html' title='rustc_trans::middle::ty::InternedTy'>InternedTy</a>&lt;'tcx&gt;","impl&lt;'a, B&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.slice.html'>[T]</a>&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='syntax/util/interner/struct.RcStr.html' title='syntax::util::interner::RcStr'>RcStr</a>",];implementors['rustc_driver'] = ["impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='syntax/util/interner/struct.RcStr.html' title='syntax::util::interner::RcStr'>RcStr</a>",];implementors['rustdoc'] = ["impl&lt;'tcx&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='enum' href='rustc/middle/ty/enum.TypeVariants.html' title='rustc::middle::ty::TypeVariants'>TypeVariants</a>&lt;'tcx&gt;&gt; for <a class='struct' href='rustc/middle/ty/struct.InternedTy.html' title='rustc::middle::ty::InternedTy'>InternedTy</a>&lt;'tcx&gt;","impl&lt;'a, B&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.slice.html'>[T]</a>&gt; for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a href='std/primitive.str.html'>str</a>&gt; for <a class='struct' href='collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
