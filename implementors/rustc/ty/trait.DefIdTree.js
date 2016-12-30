(function() {var implementors = {};
implementors["rustc"] = [];
implementors["rustc_borrowck"] = [];
implementors["rustc_lint"] = [];
implementors["rustc_metadata"] = [];
implementors["rustc_mir"] = [];
implementors["rustc_resolve"] = ["impl&lt;'a, 'b: 'a&gt; <a class='trait' href='rustc/ty/trait.DefIdTree.html' title='rustc::ty::DefIdTree'>DefIdTree</a> for &amp;'a ImportResolver&lt;'a, 'b&gt;","impl&lt;'a, 'b: 'a&gt; <a class='trait' href='rustc/ty/trait.DefIdTree.html' title='rustc::ty::DefIdTree'>DefIdTree</a> for &amp;'a <a class='struct' href='rustc_resolve/struct.Resolver.html' title='rustc_resolve::Resolver'>Resolver</a>&lt;'b&gt;",];
implementors["rustc_trans"] = [];
implementors["rustc_typeck"] = [];
implementors["rustdoc"] = ["impl&lt;'a, 'b&gt; <a class='trait' href='rustc/ty/trait.DefIdTree.html' title='rustc::ty::DefIdTree'>DefIdTree</a> for &amp;'a ImportResolver&lt;'a, 'b&gt; <span class='where'>where 'b: 'a</span>","impl&lt;'a, 'b&gt; <a class='trait' href='rustc/ty/trait.DefIdTree.html' title='rustc::ty::DefIdTree'>DefIdTree</a> for &amp;'a <a class='struct' href='rustc_resolve/struct.Resolver.html' title='rustc_resolve::Resolver'>Resolver</a>&lt;'b&gt; <span class='where'>where 'b: 'a</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
