(function() {var implementors = {};
implementors["alloc"] = ["impl&lt;'a, A, R&gt; <a class='trait' href='core/ops/trait.FnOnce.html' title='trait core::ops::FnOnce'>FnOnce</a>&lt;A&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='struct alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='alloc/boxed/trait.FnBox.html' title='trait alloc::boxed::FnBox'>FnBox</a>&lt;A, Output=R&gt; + 'a&gt;","impl&lt;'a, A, R&gt; <a class='trait' href='core/ops/trait.FnOnce.html' title='trait core::ops::FnOnce'>FnOnce</a>&lt;A&gt; for <a class='struct' href='alloc/boxed/struct.Box.html' title='struct alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='alloc/boxed/trait.FnBox.html' title='trait alloc::boxed::FnBox'>FnBox</a>&lt;A, Output=R&gt; + <a class='trait' href='core/marker/trait.Send.html' title='trait core::marker::Send'>Send</a> + 'a&gt;",];
implementors["collections"] = ["impl&lt;'a, A, R&gt; <a class='trait' href='core/ops/trait.FnOnce.html' title='trait core::ops::FnOnce'>FnOnce</a>&lt;A&gt; for <a class='struct' href='collections/boxed/struct.Box.html' title='struct collections::boxed::Box'>Box</a>&lt;<a class='trait' href='collections/boxed/trait.FnBox.html' title='trait collections::boxed::FnBox'>FnBox</a>&lt;A, Output=R&gt; + 'a&gt;","impl&lt;'a, A, R&gt; <a class='trait' href='core/ops/trait.FnOnce.html' title='trait core::ops::FnOnce'>FnOnce</a>&lt;A&gt; for <a class='struct' href='collections/boxed/struct.Box.html' title='struct collections::boxed::Box'>Box</a>&lt;<a class='trait' href='collections/boxed/trait.FnBox.html' title='trait collections::boxed::FnBox'>FnBox</a>&lt;A, Output=R&gt; + 'a + <a class='trait' href='core/marker/trait.Send.html' title='trait core::marker::Send'>Send</a>&gt;",];
implementors["core"] = [];
implementors["std_unicode"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
