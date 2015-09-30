(function() {var implementors = {};
implementors['syntax'] = [];implementors['rustc_borrowck'] = ["impl&lt;'a, 'b, 'c, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/astencode/struct.SideTableEncodingIdVisitor.html' title='rustc::middle::astencode::SideTableEncodingIdVisitor'>SideTableEncodingIdVisitor</a>&lt;'a, 'b, 'c, 'tcx&gt;","impl&lt;'map&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/check_match/struct.RenamingRecorder.html' title='rustc::middle::check_match::RenamingRecorder'>RenamingRecorder</a>&lt;'map&gt;","impl&lt;'a, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/lint/context/struct.LateContext.html' title='rustc::lint::context::LateContext'>LateContext</a>&lt;'a, 'tcx&gt;","impl&lt;'a&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/lint/context/struct.EarlyContext.html' title='rustc::lint::context::EarlyContext'>EarlyContext</a>&lt;'a&gt;",];implementors['rustc_lint'] = ["impl&lt;'a, 'b, 'c, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/astencode/struct.SideTableEncodingIdVisitor.html' title='rustc::middle::astencode::SideTableEncodingIdVisitor'>SideTableEncodingIdVisitor</a>&lt;'a, 'b, 'c, 'tcx&gt;","impl&lt;'map&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/check_match/struct.RenamingRecorder.html' title='rustc::middle::check_match::RenamingRecorder'>RenamingRecorder</a>&lt;'map&gt;","impl&lt;'a, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc_lint/lint/struct.LateContext.html' title='rustc_lint::lint::LateContext'>LateContext</a>&lt;'a, 'tcx&gt;","impl&lt;'a&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc_lint/lint/struct.EarlyContext.html' title='rustc_lint::lint::EarlyContext'>EarlyContext</a>&lt;'a&gt;",];implementors['rustc_typeck'] = ["impl&lt;'a, 'b, 'c, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/astencode/struct.SideTableEncodingIdVisitor.html' title='rustc::middle::astencode::SideTableEncodingIdVisitor'>SideTableEncodingIdVisitor</a>&lt;'a, 'b, 'c, 'tcx&gt;","impl&lt;'map&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/check_match/struct.RenamingRecorder.html' title='rustc::middle::check_match::RenamingRecorder'>RenamingRecorder</a>&lt;'map&gt;","impl&lt;'a, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc_typeck/lint/struct.LateContext.html' title='rustc_typeck::lint::LateContext'>LateContext</a>&lt;'a, 'tcx&gt;","impl&lt;'a&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc_typeck/lint/struct.EarlyContext.html' title='rustc_typeck::lint::EarlyContext'>EarlyContext</a>&lt;'a&gt;",];implementors['rustc_trans'] = ["impl&lt;'a, 'b, 'c, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/astencode/struct.SideTableEncodingIdVisitor.html' title='rustc::middle::astencode::SideTableEncodingIdVisitor'>SideTableEncodingIdVisitor</a>&lt;'a, 'b, 'c, 'tcx&gt;","impl&lt;'map&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/check_match/struct.RenamingRecorder.html' title='rustc::middle::check_match::RenamingRecorder'>RenamingRecorder</a>&lt;'map&gt;","impl&lt;'a, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc_trans/lint/struct.LateContext.html' title='rustc_trans::lint::LateContext'>LateContext</a>&lt;'a, 'tcx&gt;","impl&lt;'a&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc_trans/lint/struct.EarlyContext.html' title='rustc_trans::lint::EarlyContext'>EarlyContext</a>&lt;'a&gt;",];implementors['rustc_driver'] = [];implementors['rustdoc'] = ["impl&lt;'a, 'b, 'c, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/astencode/struct.SideTableEncodingIdVisitor.html' title='rustc::middle::astencode::SideTableEncodingIdVisitor'>SideTableEncodingIdVisitor</a>&lt;'a, 'b, 'c, 'tcx&gt;","impl&lt;'map&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/middle/check_match/struct.RenamingRecorder.html' title='rustc::middle::check_match::RenamingRecorder'>RenamingRecorder</a>&lt;'map&gt;","impl&lt;'a, 'tcx&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/lint/context/struct.LateContext.html' title='rustc::lint::context::LateContext'>LateContext</a>&lt;'a, 'tcx&gt;","impl&lt;'a&gt; <a class='trait' href='syntax/ast_util/trait.IdVisitingOperation.html' title='syntax::ast_util::IdVisitingOperation'>IdVisitingOperation</a> for <a class='struct' href='rustc/lint/context/struct.EarlyContext.html' title='rustc::lint::context::EarlyContext'>EarlyContext</a>&lt;'a&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
