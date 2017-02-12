(function() {var implementors = {};
implementors["rustc_borrowck"] = ["impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_borrowck/struct.ElaborateDrops.html' title='struct rustc_borrowck::ElaborateDrops'>ElaborateDrops</a>","impl&lt;'l, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify_branches/struct.SimplifyBranches.html' title='struct rustc_mir::transform::simplify_branches::SimplifyBranches'>SimplifyBranches</a>&lt;'l&gt;","impl&lt;'l, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify/struct.SimplifyCfg.html' title='struct rustc_mir::transform::simplify::SimplifyCfg'>SimplifyCfg</a>&lt;'l&gt;","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify/struct.SimplifyLocals.html' title='struct rustc_mir::transform::simplify::SimplifyLocals'>SimplifyLocals</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/erase_regions/struct.EraseRegions.html' title='struct rustc_mir::transform::erase_regions::EraseRegions'>EraseRegions</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/no_landing_pads/struct.NoLandingPads.html' title='struct rustc_mir::transform::no_landing_pads::NoLandingPads'>NoLandingPads</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/type_check/struct.TypeckMir.html' title='struct rustc_mir::transform::type_check::TypeckMir'>TypeckMir</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/add_call_guards/struct.AddCallGuards.html' title='struct rustc_mir::transform::add_call_guards::AddCallGuards'>AddCallGuards</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/qualify_consts/struct.QualifyAndPromoteConstants.html' title='struct rustc_mir::transform::qualify_consts::QualifyAndPromoteConstants'>QualifyAndPromoteConstants</a>","impl&lt;'b, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/dump_mir/struct.Marker.html' title='struct rustc_mir::transform::dump_mir::Marker'>Marker</a>&lt;'b&gt;","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/deaggregator/struct.Deaggregator.html' title='struct rustc_mir::transform::deaggregator::Deaggregator'>Deaggregator</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/instcombine/struct.InstCombine.html' title='struct rustc_mir::transform::instcombine::InstCombine'>InstCombine</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/copy_prop/struct.CopyPropagation.html' title='struct rustc_mir::transform::copy_prop::CopyPropagation'>CopyPropagation</a>",];
implementors["rustc_mir"] = ["impl&lt;'l, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify_branches/struct.SimplifyBranches.html' title='struct rustc_mir::transform::simplify_branches::SimplifyBranches'>SimplifyBranches</a>&lt;'l&gt;","impl&lt;'l, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify/struct.SimplifyCfg.html' title='struct rustc_mir::transform::simplify::SimplifyCfg'>SimplifyCfg</a>&lt;'l&gt;","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify/struct.SimplifyLocals.html' title='struct rustc_mir::transform::simplify::SimplifyLocals'>SimplifyLocals</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/erase_regions/struct.EraseRegions.html' title='struct rustc_mir::transform::erase_regions::EraseRegions'>EraseRegions</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/no_landing_pads/struct.NoLandingPads.html' title='struct rustc_mir::transform::no_landing_pads::NoLandingPads'>NoLandingPads</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/type_check/struct.TypeckMir.html' title='struct rustc_mir::transform::type_check::TypeckMir'>TypeckMir</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/add_call_guards/struct.AddCallGuards.html' title='struct rustc_mir::transform::add_call_guards::AddCallGuards'>AddCallGuards</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/qualify_consts/struct.QualifyAndPromoteConstants.html' title='struct rustc_mir::transform::qualify_consts::QualifyAndPromoteConstants'>QualifyAndPromoteConstants</a>","impl&lt;'b, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/dump_mir/struct.Marker.html' title='struct rustc_mir::transform::dump_mir::Marker'>Marker</a>&lt;'b&gt;","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/deaggregator/struct.Deaggregator.html' title='struct rustc_mir::transform::deaggregator::Deaggregator'>Deaggregator</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/instcombine/struct.InstCombine.html' title='struct rustc_mir::transform::instcombine::InstCombine'>InstCombine</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/copy_prop/struct.CopyPropagation.html' title='struct rustc_mir::transform::copy_prop::CopyPropagation'>CopyPropagation</a>",];
implementors["rustdoc"] = ["impl&lt;'l, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify_branches/struct.SimplifyBranches.html' title='struct rustc_mir::transform::simplify_branches::SimplifyBranches'>SimplifyBranches</a>&lt;'l&gt;","impl&lt;'l, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify/struct.SimplifyCfg.html' title='struct rustc_mir::transform::simplify::SimplifyCfg'>SimplifyCfg</a>&lt;'l&gt;","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/simplify/struct.SimplifyLocals.html' title='struct rustc_mir::transform::simplify::SimplifyLocals'>SimplifyLocals</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/erase_regions/struct.EraseRegions.html' title='struct rustc_mir::transform::erase_regions::EraseRegions'>EraseRegions</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/no_landing_pads/struct.NoLandingPads.html' title='struct rustc_mir::transform::no_landing_pads::NoLandingPads'>NoLandingPads</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/type_check/struct.TypeckMir.html' title='struct rustc_mir::transform::type_check::TypeckMir'>TypeckMir</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/add_call_guards/struct.AddCallGuards.html' title='struct rustc_mir::transform::add_call_guards::AddCallGuards'>AddCallGuards</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/qualify_consts/struct.QualifyAndPromoteConstants.html' title='struct rustc_mir::transform::qualify_consts::QualifyAndPromoteConstants'>QualifyAndPromoteConstants</a>","impl&lt;'b, 'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/dump_mir/struct.Marker.html' title='struct rustc_mir::transform::dump_mir::Marker'>Marker</a>&lt;'b&gt;","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/deaggregator/struct.Deaggregator.html' title='struct rustc_mir::transform::deaggregator::Deaggregator'>Deaggregator</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/instcombine/struct.InstCombine.html' title='struct rustc_mir::transform::instcombine::InstCombine'>InstCombine</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_mir/transform/copy_prop/struct.CopyPropagation.html' title='struct rustc_mir::transform::copy_prop::CopyPropagation'>CopyPropagation</a>","impl&lt;'tcx&gt; <a class='trait' href='rustc/mir/transform/trait.MirPass.html' title='trait rustc::mir::transform::MirPass'>MirPass</a>&lt;'tcx&gt; for <a class='struct' href='rustc_borrowck/borrowck/mir/elaborate_drops/struct.ElaborateDrops.html' title='struct rustc_borrowck::borrowck::mir::elaborate_drops::ElaborateDrops'>ElaborateDrops</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
