(function() {var implementors = {};
implementors["rustc_mir"] = ["impl&lt;'l&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/simplify_branches/struct.SimplifyBranches.html' title='rustc_mir::transform::simplify_branches::SimplifyBranches'>SimplifyBranches</a>&lt;'l&gt;","impl&lt;'l&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/simplify_cfg/struct.SimplifyCfg.html' title='rustc_mir::transform::simplify_cfg::SimplifyCfg'>SimplifyCfg</a>&lt;'l&gt;","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/erase_regions/struct.EraseRegions.html' title='rustc_mir::transform::erase_regions::EraseRegions'>EraseRegions</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/no_landing_pads/struct.NoLandingPads.html' title='rustc_mir::transform::no_landing_pads::NoLandingPads'>NoLandingPads</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/type_check/struct.TypeckMir.html' title='rustc_mir::transform::type_check::TypeckMir'>TypeckMir</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/add_call_guards/struct.AddCallGuards.html' title='rustc_mir::transform::add_call_guards::AddCallGuards'>AddCallGuards</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/qualify_consts/struct.QualifyAndPromoteConstants.html' title='rustc_mir::transform::qualify_consts::QualifyAndPromoteConstants'>QualifyAndPromoteConstants</a>","impl&lt;'b&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/dump_mir/struct.Marker.html' title='rustc_mir::transform::dump_mir::Marker'>Marker</a>&lt;'b&gt;","impl&lt;'b&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/dump_mir/struct.DumpMir.html' title='rustc_mir::transform::dump_mir::DumpMir'>DumpMir</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/deaggregator/struct.Deaggregator.html' title='rustc_mir::transform::deaggregator::Deaggregator'>Deaggregator</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/instcombine/struct.InstCombine.html' title='rustc_mir::transform::instcombine::InstCombine'>InstCombine</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/copy_prop/struct.CopyPropagation.html' title='rustc_mir::transform::copy_prop::CopyPropagation'>CopyPropagation</a>",];implementors["rustc_borrowck"] = ["impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_borrowck/struct.ElaborateDrops.html' title='rustc_borrowck::ElaborateDrops'>ElaborateDrops</a>","impl&lt;'l&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/simplify_branches/struct.SimplifyBranches.html' title='rustc_mir::transform::simplify_branches::SimplifyBranches'>SimplifyBranches</a>&lt;'l&gt;","impl&lt;'l&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/simplify_cfg/struct.SimplifyCfg.html' title='rustc_mir::transform::simplify_cfg::SimplifyCfg'>SimplifyCfg</a>&lt;'l&gt;","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/erase_regions/struct.EraseRegions.html' title='rustc_mir::transform::erase_regions::EraseRegions'>EraseRegions</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/no_landing_pads/struct.NoLandingPads.html' title='rustc_mir::transform::no_landing_pads::NoLandingPads'>NoLandingPads</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/type_check/struct.TypeckMir.html' title='rustc_mir::transform::type_check::TypeckMir'>TypeckMir</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/add_call_guards/struct.AddCallGuards.html' title='rustc_mir::transform::add_call_guards::AddCallGuards'>AddCallGuards</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/qualify_consts/struct.QualifyAndPromoteConstants.html' title='rustc_mir::transform::qualify_consts::QualifyAndPromoteConstants'>QualifyAndPromoteConstants</a>","impl&lt;'b&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/dump_mir/struct.Marker.html' title='rustc_mir::transform::dump_mir::Marker'>Marker</a>&lt;'b&gt;","impl&lt;'b&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/dump_mir/struct.DumpMir.html' title='rustc_mir::transform::dump_mir::DumpMir'>DumpMir</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/deaggregator/struct.Deaggregator.html' title='rustc_mir::transform::deaggregator::Deaggregator'>Deaggregator</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/instcombine/struct.InstCombine.html' title='rustc_mir::transform::instcombine::InstCombine'>InstCombine</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/copy_prop/struct.CopyPropagation.html' title='rustc_mir::transform::copy_prop::CopyPropagation'>CopyPropagation</a>",];implementors["rustdoc"] = ["impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_borrowck/borrowck/mir/elaborate_drops/struct.ElaborateDrops.html' title='rustc_borrowck::borrowck::mir::elaborate_drops::ElaborateDrops'>ElaborateDrops</a>","impl&lt;'l&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/simplify_branches/struct.SimplifyBranches.html' title='rustc_mir::transform::simplify_branches::SimplifyBranches'>SimplifyBranches</a>&lt;'l&gt;","impl&lt;'l&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/simplify_cfg/struct.SimplifyCfg.html' title='rustc_mir::transform::simplify_cfg::SimplifyCfg'>SimplifyCfg</a>&lt;'l&gt;","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/erase_regions/struct.EraseRegions.html' title='rustc_mir::transform::erase_regions::EraseRegions'>EraseRegions</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/no_landing_pads/struct.NoLandingPads.html' title='rustc_mir::transform::no_landing_pads::NoLandingPads'>NoLandingPads</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/type_check/struct.TypeckMir.html' title='rustc_mir::transform::type_check::TypeckMir'>TypeckMir</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/add_call_guards/struct.AddCallGuards.html' title='rustc_mir::transform::add_call_guards::AddCallGuards'>AddCallGuards</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/qualify_consts/struct.QualifyAndPromoteConstants.html' title='rustc_mir::transform::qualify_consts::QualifyAndPromoteConstants'>QualifyAndPromoteConstants</a>","impl&lt;'b&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/dump_mir/struct.Marker.html' title='rustc_mir::transform::dump_mir::Marker'>Marker</a>&lt;'b&gt;","impl&lt;'b&gt; <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/dump_mir/struct.DumpMir.html' title='rustc_mir::transform::dump_mir::DumpMir'>DumpMir</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/deaggregator/struct.Deaggregator.html' title='rustc_mir::transform::deaggregator::Deaggregator'>Deaggregator</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/instcombine/struct.InstCombine.html' title='rustc_mir::transform::instcombine::InstCombine'>InstCombine</a>","impl <a class='trait' href='rustc/mir/transform/trait.Pass.html' title='rustc::mir::transform::Pass'>Pass</a> for <a class='struct' href='rustc_mir/transform/copy_prop/struct.CopyPropagation.html' title='rustc_mir::transform::copy_prop::CopyPropagation'>CopyPropagation</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
