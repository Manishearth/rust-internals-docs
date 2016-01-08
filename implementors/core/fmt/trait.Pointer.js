(function() {var implementors = {};
implementors['std'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='std/boxed/struct.Box.html' title='std::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='std/sync/struct.Arc.html' title='std::sync::Arc'>Arc</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='std/rc/struct.Rc.html' title='std::rc::Rc'>Rc</a>&lt;T&gt;",];implementors['alloc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;",];implementors['rustc_unicode'] = [];implementors['core'] = [];implementors['syntax'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;T&gt;",];implementors['rustc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_borrowck'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_lint'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_metadata'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_typeck'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_trans'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;T&gt;",];implementors['rustdoc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['alloc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;",];implementors['rustc_unicode'] = [];implementors['core'] = [];implementors['syntax'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;T&gt;",];implementors['rustc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_borrowck'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_lint'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_metadata'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_typeck'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_trans'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;T&gt;",];implementors['rustdoc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['alloc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;",];implementors['rustc_unicode'] = [];implementors['core'] = [];implementors['syntax'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;T&gt;",];implementors['rustc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_borrowck'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_lint'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_metadata'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_typeck'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];implementors['rustc_trans'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='syntax/ptr/struct.P.html' title='syntax::ptr::P'>P</a>&lt;T&gt;",];implementors['rustdoc'] = ["impl&lt;T&gt; <a class='trait' href='core/fmt/trait.Pointer.html' title='core::fmt::Pointer'>Pointer</a> for <a class='struct' href='alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
