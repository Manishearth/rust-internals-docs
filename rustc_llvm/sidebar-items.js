initSidebarItems({"constant":[["False",""],["True",""]],"enum":[["ArchiveChild_opaque",""],["ArchiveIterator_opaque",""],["ArchiveKind",""],["Archive_opaque",""],["AsmDialect",""],["AtomicBinOp",""],["AtomicOrdering",""],["AttributeSet",""],["BasicBlock_opaque",""],["Builder_opaque",""],["CallConv",""],["CodeGenModel",""],["CodeGenOptLevel",""],["Context_opaque",""],["DLLStorageClassTypes",""],["DebugLoc_opaque",""],["DiagnosticInfo_opaque",""],["DiagnosticKind",""],["DiagnosticSeverity",""],["ExecutionEngine_opaque",""],["FileType",""],["IntPredicate",""],["Linkage",""],["MemoryBuffer_opaque",""],["MetadataType",""],["Metadata_opaque",""],["Module_opaque",""],["ObjectFile_opaque",""],["OtherAttribute",""],["PassManagerBuilder_opaque",""],["PassManager_opaque",""],["Pass_opaque",""],["RealPredicate",""],["RelocMode",""],["RustArchiveMember_opaque",""],["RustString_opaque",""],["SMDiagnostic_opaque",""],["SectionIterator_opaque",""],["SpecialAttribute",""],["SupportedPassKind","Represents the different LLVM passes Rust supports"],["SynchronizationScope",""],["TargetData_opaque",""],["TargetMachine_opaque",""],["Twine_opaque",""],["TypeKind",""],["Type_opaque",""],["Use_opaque",""],["Value_opaque",""],["Visibility",""]],"fn":[["ConstFCmp",""],["ConstICmp",""],["LLVMABIAlignmentOfType","Returns the minimum alignment of a type."],["LLVMABISizeOfType","Distance between successive elements in an array of T. Includes ABI padding."],["LLVMAddAggressiveDCEPass",""],["LLVMAddAlias",""],["LLVMAddArgumentPromotionPass",""],["LLVMAddAttribute",""],["LLVMAddBasicAliasAnalysisPass",""],["LLVMAddCFGSimplificationPass",""],["LLVMAddCallSiteAttribute",""],["LLVMAddCase",""],["LLVMAddClause",""],["LLVMAddConstantMergePass",""],["LLVMAddConstantPropagationPass",""],["LLVMAddCorrelatedValuePropagationPass",""],["LLVMAddDeadArgEliminationPass",""],["LLVMAddDeadStoreEliminationPass",""],["LLVMAddDereferenceableAttr",""],["LLVMAddDereferenceableCallSiteAttr",""],["LLVMAddDestination",""],["LLVMAddEarlyCSEPass",""],["LLVMAddFunction",""],["LLVMAddFunctionAttrString",""],["LLVMAddFunctionAttrStringValue",""],["LLVMAddFunctionAttribute",""],["LLVMAddFunctionAttrsPass",""],["LLVMAddFunctionInliningPass",""],["LLVMAddGVNPass",""],["LLVMAddGlobal",""],["LLVMAddGlobalDCEPass",""],["LLVMAddGlobalInAddressSpace",""],["LLVMAddGlobalOptimizerPass",""],["LLVMAddIPSCCPPass",""],["LLVMAddIncoming",""],["LLVMAddIndVarSimplifyPass",""],["LLVMAddInstrAttribute",""],["LLVMAddInstructionCombiningPass",""],["LLVMAddJumpThreadingPass",""],["LLVMAddLICMPass",""],["LLVMAddLoopDeletionPass",""],["LLVMAddLoopIdiomPass",""],["LLVMAddLoopRotatePass",""],["LLVMAddLoopUnrollPass",""],["LLVMAddLoopUnswitchPass",""],["LLVMAddMemCpyOptPass",""],["LLVMAddNamedMetadataOperand",""],["LLVMAddPruneEHPass",""],["LLVMAddReassociatePass",""],["LLVMAddSCCPPass",""],["LLVMAddScalarReplAggregatesPass",""],["LLVMAddScalarReplAggregatesPassSSA",""],["LLVMAddSimplifyLibCallsPass",""],["LLVMAddStripDeadPrototypesPass",""],["LLVMAddTailCallEliminationPass",""],["LLVMAddTargetData","Adds the target data to the given pass manager. The pass manager references the target data only weakly."],["LLVMAddTypeBasedAliasAnalysisPass",""],["LLVMAddVerifierPass","Adds a verification pass."],["LLVMAlignOf",""],["LLVMAppendBasicBlockInContext",""],["LLVMBasicBlockAsValue",""],["LLVMBlockAddress",""],["LLVMBuildAShr",""],["LLVMBuildAdd",""],["LLVMBuildAggregateRet",""],["LLVMBuildAlloca",""],["LLVMBuildAnd",""],["LLVMBuildAtomicCmpXchg",""],["LLVMBuildAtomicFence",""],["LLVMBuildAtomicLoad",""],["LLVMBuildAtomicRMW",""],["LLVMBuildAtomicStore",""],["LLVMBuildBinOp",""],["LLVMBuildBitCast",""],["LLVMBuildBr",""],["LLVMBuildCall",""],["LLVMBuildCast",""],["LLVMBuildCondBr",""],["LLVMBuildExactSDiv",""],["LLVMBuildExecutionEngine",""],["LLVMBuildExtractElement",""],["LLVMBuildExtractValue",""],["LLVMBuildFAdd",""],["LLVMBuildFCmp",""],["LLVMBuildFDiv",""],["LLVMBuildFMul",""],["LLVMBuildFNeg",""],["LLVMBuildFPCast",""],["LLVMBuildFPExt",""],["LLVMBuildFPToSI",""],["LLVMBuildFPToUI",""],["LLVMBuildFPTrunc",""],["LLVMBuildFRem",""],["LLVMBuildFSub",""],["LLVMBuildFree",""],["LLVMBuildGEP",""],["LLVMBuildGlobalString",""],["LLVMBuildGlobalStringPtr",""],["LLVMBuildICmp",""],["LLVMBuildInBoundsGEP",""],["LLVMBuildIndirectBr",""],["LLVMBuildInsertElement",""],["LLVMBuildInsertValue",""],["LLVMBuildIntCast",""],["LLVMBuildIntToPtr",""],["LLVMBuildInvoke",""],["LLVMBuildIsNotNull",""],["LLVMBuildIsNull",""],["LLVMBuildLShr",""],["LLVMBuildLoad",""],["LLVMBuildMul",""],["LLVMBuildNSWAdd",""],["LLVMBuildNSWMul",""],["LLVMBuildNSWNeg",""],["LLVMBuildNSWSub",""],["LLVMBuildNUWAdd",""],["LLVMBuildNUWMul",""],["LLVMBuildNUWNeg",""],["LLVMBuildNUWSub",""],["LLVMBuildNeg",""],["LLVMBuildNot",""],["LLVMBuildOr",""],["LLVMBuildPhi",""],["LLVMBuildPointerCast",""],["LLVMBuildPtrDiff",""],["LLVMBuildPtrToInt",""],["LLVMBuildResume",""],["LLVMBuildRet",""],["LLVMBuildRetVoid",""],["LLVMBuildSDiv",""],["LLVMBuildSExt",""],["LLVMBuildSExtOrBitCast",""],["LLVMBuildSIToFP",""],["LLVMBuildSRem",""],["LLVMBuildSelect",""],["LLVMBuildShl",""],["LLVMBuildShuffleVector",""],["LLVMBuildStore",""],["LLVMBuildStructGEP",""],["LLVMBuildSub",""],["LLVMBuildSwitch",""],["LLVMBuildTrunc",""],["LLVMBuildTruncOrBitCast",""],["LLVMBuildUDiv",""],["LLVMBuildUIToFP",""],["LLVMBuildURem",""],["LLVMBuildUnreachable",""],["LLVMBuildVAArg",""],["LLVMBuildXor",""],["LLVMBuildZExt",""],["LLVMBuildZExtOrBitCast",""],["LLVMCallFrameAlignmentOfType","Returns the minimum alignment of a type when part of a call frame."],["LLVMClearInsertionPosition",""],["LLVMCloneModule",""],["LLVMConstAShr",""],["LLVMConstAdd",""],["LLVMConstAllOnes",""],["LLVMConstAnd",""],["LLVMConstArray",""],["LLVMConstBitCast",""],["LLVMConstExactSDiv",""],["LLVMConstExtractElement",""],["LLVMConstExtractValue",""],["LLVMConstFAdd",""],["LLVMConstFCmp",""],["LLVMConstFDiv",""],["LLVMConstFMul",""],["LLVMConstFNeg",""],["LLVMConstFPCast",""],["LLVMConstFPExt",""],["LLVMConstFPToSI",""],["LLVMConstFPToUI",""],["LLVMConstFPTrunc",""],["LLVMConstFRem",""],["LLVMConstFSub",""],["LLVMConstGEP",""],["LLVMConstICmp",""],["LLVMConstInBoundsGEP",""],["LLVMConstInlineAsm",""],["LLVMConstInsertElement",""],["LLVMConstInsertValue",""],["LLVMConstInt",""],["LLVMConstIntCast",""],["LLVMConstIntGetSExtValue",""],["LLVMConstIntGetZExtValue",""],["LLVMConstIntOfString",""],["LLVMConstIntOfStringAndSize",""],["LLVMConstIntToPtr",""],["LLVMConstLShr",""],["LLVMConstMul",""],["LLVMConstNSWAdd",""],["LLVMConstNSWMul",""],["LLVMConstNSWNeg",""],["LLVMConstNSWSub",""],["LLVMConstNUWAdd",""],["LLVMConstNUWMul",""],["LLVMConstNUWNeg",""],["LLVMConstNUWSub",""],["LLVMConstNamedStruct",""],["LLVMConstNeg",""],["LLVMConstNot",""],["LLVMConstNull",""],["LLVMConstOr",""],["LLVMConstPointerCast",""],["LLVMConstPointerNull",""],["LLVMConstPtrToInt",""],["LLVMConstReal",""],["LLVMConstRealOfString",""],["LLVMConstRealOfStringAndSize",""],["LLVMConstSDiv",""],["LLVMConstSExt",""],["LLVMConstSExtOrBitCast",""],["LLVMConstSIToFP",""],["LLVMConstSRem",""],["LLVMConstSelect",""],["LLVMConstShl",""],["LLVMConstShuffleVector",""],["LLVMConstStringInContext",""],["LLVMConstStructInContext",""],["LLVMConstSub",""],["LLVMConstTrunc",""],["LLVMConstTruncOrBitCast",""],["LLVMConstUDiv",""],["LLVMConstUIToFP",""],["LLVMConstURem",""],["LLVMConstVector",""],["LLVMConstXor",""],["LLVMConstZExt",""],["LLVMConstZExtOrBitCast",""],["LLVMContextCreate",""],["LLVMContextDispose",""],["LLVMContextSetDiagnosticHandler",""],["LLVMCountBasicBlocks",""],["LLVMCountIncoming",""],["LLVMCountParamTypes",""],["LLVMCountParams",""],["LLVMCountStructElementTypes",""],["LLVMCreateBuilderInContext",""],["LLVMCreateFunctionPassManagerForModule","Creates a function-by-function pass manager"],["LLVMCreateMemoryBufferWithMemoryRange","Borrows the contents of the memory buffer (doesn't copy it)"],["LLVMCreateMemoryBufferWithMemoryRangeCopy",""],["LLVMCreateObjectFile","Opens an object file."],["LLVMCreatePassManager","Creates a pass manager."],["LLVMCreateTargetData","Creates target data from a target layout string."],["LLVMDIBuilderCreate",""],["LLVMDIBuilderCreateArrayType",""],["LLVMDIBuilderCreateBasicType",""],["LLVMDIBuilderCreateCompileUnit",""],["LLVMDIBuilderCreateDebugLocation",""],["LLVMDIBuilderCreateEnumerationType",""],["LLVMDIBuilderCreateEnumerator",""],["LLVMDIBuilderCreateFile",""],["LLVMDIBuilderCreateFunction",""],["LLVMDIBuilderCreateLexicalBlock",""],["LLVMDIBuilderCreateMemberType",""],["LLVMDIBuilderCreateNameSpace",""],["LLVMDIBuilderCreateOpDeref",""],["LLVMDIBuilderCreateOpPlus",""],["LLVMDIBuilderCreatePointerType",""],["LLVMDIBuilderCreateStaticVariable",""],["LLVMDIBuilderCreateStructType",""],["LLVMDIBuilderCreateSubroutineType",""],["LLVMDIBuilderCreateTemplateTypeParameter",""],["LLVMDIBuilderCreateUnionType",""],["LLVMDIBuilderCreateVariable",""],["LLVMDIBuilderCreateVectorType",""],["LLVMDIBuilderDispose",""],["LLVMDIBuilderFinalize",""],["LLVMDIBuilderGetOrCreateArray",""],["LLVMDIBuilderGetOrCreateSubrange",""],["LLVMDIBuilderInsertDeclareAtEnd",""],["LLVMDIBuilderInsertDeclareBefore",""],["LLVMDICompositeTypeSetTypeArray",""],["LLVMDeleteBasicBlock",""],["LLVMDeleteFunction",""],["LLVMDeleteGlobal",""],["LLVMDisposeBuilder",""],["LLVMDisposeExecutionEngine",""],["LLVMDisposeMemoryBuffer","Destroys a memory buffer."],["LLVMDisposeModule",""],["LLVMDisposeObjectFile","Closes an object file."],["LLVMDisposePassManager","Disposes a pass manager."],["LLVMDisposeSectionIterator","Destroys a section iterator."],["LLVMDisposeTargetData","Disposes target data."],["LLVMDoubleTypeInContext",""],["LLVMDumpModule","See Module::dump."],["LLVMDumpValue",""],["LLVMExecutionEngineAddModule",""],["LLVMExecutionEngineFinalizeObject",""],["LLVMExecutionEngineRemoveModule",""],["LLVMFP128TypeInContext",""],["LLVMFinalizeFunctionPassManager","Finalizes all the function passes scheduled in the manager"],["LLVMFloatTypeInContext",""],["LLVMFunctionType",""],["LLVMGetAlignment",""],["LLVMGetArrayLength",""],["LLVMGetAttribute",""],["LLVMGetBasicBlockParent",""],["LLVMGetBasicBlocks",""],["LLVMGetCurrentDebugLocation",""],["LLVMGetDataLayout","Data layout. See Module::getDataLayout."],["LLVMGetDiagInfoKind",""],["LLVMGetDiagInfoSeverity",""],["LLVMGetElementType",""],["LLVMGetEntryBasicBlock",""],["LLVMGetFirstBasicBlock",""],["LLVMGetFirstFunction",""],["LLVMGetFirstGlobal",""],["LLVMGetFirstInstruction",""],["LLVMGetFirstParam",""],["LLVMGetFirstUse",""],["LLVMGetFunctionAttr",""],["LLVMGetFunctionCallConv",""],["LLVMGetGC",""],["LLVMGetGlobalParent",""],["LLVMGetIncomingBlock",""],["LLVMGetIncomingValue",""],["LLVMGetInitializer",""],["LLVMGetInsertBlock",""],["LLVMGetInstructionCallConv",""],["LLVMGetInstructionParent",""],["LLVMGetIntTypeWidth",""],["LLVMGetIntrinsicID",""],["LLVMGetLastBasicBlock",""],["LLVMGetLastFunction",""],["LLVMGetLastGlobal",""],["LLVMGetLastInstruction",""],["LLVMGetLastParam",""],["LLVMGetLinkage",""],["LLVMGetMDKindIDInContext",""],["LLVMGetMetadata",""],["LLVMGetModuleContext",""],["LLVMGetNamedFunction",""],["LLVMGetNamedGlobal",""],["LLVMGetNamedValue",""],["LLVMGetNextBasicBlock",""],["LLVMGetNextFunction",""],["LLVMGetNextGlobal",""],["LLVMGetNextInstruction",""],["LLVMGetNextParam",""],["LLVMGetNextUse",""],["LLVMGetNumOperands",""],["LLVMGetOperand",""],["LLVMGetOrInsertFunction",""],["LLVMGetOrInsertGlobal",""],["LLVMGetParam",""],["LLVMGetParamParent",""],["LLVMGetParamTypes",""],["LLVMGetParams",""],["LLVMGetPointerAddressSpace",""],["LLVMGetPointerToGlobal",""],["LLVMGetPreviousBasicBlock",""],["LLVMGetPreviousFunction",""],["LLVMGetPreviousGlobal",""],["LLVMGetPreviousInstruction",""],["LLVMGetPreviousParam",""],["LLVMGetReturnType",""],["LLVMGetSection",""],["LLVMGetSectionContents","Returns the current section contents as a string buffer."],["LLVMGetSectionSize","Returns the current section size."],["LLVMGetSections","Enumerates the sections in an object file."],["LLVMGetStructElementTypes",""],["LLVMGetTarget","Target triple. See Module::getTargetTriple."],["LLVMGetTypeContext","See llvm::LLVMType::getContext."],["LLVMGetTypeKind","See llvm::LLVMTypeKind::getTypeID."],["LLVMGetUndef",""],["LLVMGetUsedValue",""],["LLVMGetUser",""],["LLVMGetValueName",""],["LLVMGetVectorSize",""],["LLVMGetVisibility",""],["LLVMGetVolatile",""],["LLVMHasMetadata",""],["LLVMInitializeFunctionPassManager","Initializes all the function passes scheduled in the manager"],["LLVMInitializePasses",""],["LLVMInlineAsm","Prepares inline assembly."],["LLVMInsertBasicBlockInContext",""],["LLVMInsertIntoBuilder",""],["LLVMInsertIntoBuilderWithName",""],["LLVMInstructionEraseFromParent",""],["LLVMInt16TypeInContext",""],["LLVMInt1TypeInContext",""],["LLVMInt32TypeInContext",""],["LLVMInt64TypeInContext",""],["LLVMInt8TypeInContext",""],["LLVMIntTypeInContext",""],["LLVMIsAAllocaInst",""],["LLVMIsAArgument",""],["LLVMIsAConstantInt",""],["LLVMIsAGlobalVariable",""],["LLVMIsAStoreInst",""],["LLVMIsATerminatorInst",""],["LLVMIsConstant",""],["LLVMIsDeclaration",""],["LLVMIsFunctionVarArg",""],["LLVMIsGlobalConstant",""],["LLVMIsMultithreaded",""],["LLVMIsNull",""],["LLVMIsPackedStruct",""],["LLVMIsSectionIteratorAtEnd","Returns true if the section iterator is at the end of the section list:"],["LLVMIsTailCall",""],["LLVMIsThreadLocal",""],["LLVMIsUndef",""],["LLVMLabelTypeInContext",""],["LLVMMDNodeInContext",""],["LLVMMDStringInContext",""],["LLVMMetadataTypeInContext",""],["LLVMModuleCreateWithNameInContext",""],["LLVMMoveBasicBlockAfter",""],["LLVMMoveBasicBlockBefore",""],["LLVMMoveToNextSection","Moves the section iterator to point to the next section."],["LLVMOffsetOfElement","Computes the byte offset of the indexed struct element for a target."],["LLVMPPCFP128TypeInContext",""],["LLVMPassManagerBuilderCreate",""],["LLVMPassManagerBuilderDispose",""],["LLVMPassManagerBuilderPopulateFunctionPassManager",""],["LLVMPassManagerBuilderPopulateLTOPassManager",""],["LLVMPassManagerBuilderPopulateModulePassManager",""],["LLVMPassManagerBuilderSetDisableSimplifyLibCalls",""],["LLVMPassManagerBuilderSetDisableUnitAtATime",""],["LLVMPassManagerBuilderSetDisableUnrollLoops",""],["LLVMPassManagerBuilderSetOptLevel",""],["LLVMPassManagerBuilderSetSizeLevel",""],["LLVMPassManagerBuilderUseInlinerWithThreshold",""],["LLVMPointerType",""],["LLVMPositionBuilder",""],["LLVMPositionBuilderAtEnd",""],["LLVMPositionBuilderBefore",""],["LLVMPreferredAlignmentOfType","Returns the preferred alignment of a type."],["LLVMRemoveAttribute",""],["LLVMRemoveFunctionAttr",""],["LLVMRemoveFunctionAttrString",""],["LLVMRemoveInstrAttribute",""],["LLVMReplaceAllUsesWith",""],["LLVMRunFunctionPassManager","Runs the function passes on the provided function."],["LLVMRunPassManager","Runs a pass manager on a module."],["LLVMRustAddAlwaysInlinePass",""],["LLVMRustAddAnalysisPasses",""],["LLVMRustAddBuilderLibraryInfo",""],["LLVMRustAddLibraryInfo",""],["LLVMRustAddModuleFlag",""],["LLVMRustAddPass",""],["LLVMRustArchiveChildData",""],["LLVMRustArchiveChildFree",""],["LLVMRustArchiveChildName",""],["LLVMRustArchiveIteratorFree",""],["LLVMRustArchiveIteratorNew",""],["LLVMRustArchiveIteratorNext",""],["LLVMRustArchiveMemberFree",""],["LLVMRustArchiveMemberNew",""],["LLVMRustArrayType",""],["LLVMRustBuildLandingPad",""],["LLVMRustConfigurePassManagerBuilder",""],["LLVMRustCreateMemoryBufferWithContentsOfFile","Reads the given file and returns it as a memory buffer. Use LLVMDisposeMemoryBuffer() to get rid of it."],["LLVMRustCreateTargetMachine",""],["LLVMRustDebugMetadataVersion",""],["LLVMRustDestroyArchive",""],["LLVMRustDisposeTargetMachine",""],["LLVMRustFindAndCreatePass",""],["LLVMRustGetLastError","Returns a string describing the last error caused by an LLVMRust* call."],["LLVMRustGetModuleDataLayout",""],["LLVMRustGetSectionName",""],["LLVMRustLinkInExternalBitcode",""],["LLVMRustLoadDynamicLibrary",""],["LLVMRustMarkAllFunctionsNounwind",""],["LLVMRustOpenArchive",""],["LLVMRustPassKind",""],["LLVMRustPrintModule",""],["LLVMRustPrintPassTimings","Print the pass timings since static dtors aren't picking them up."],["LLVMRustPrintPasses",""],["LLVMRustRunFunctionPassManager",""],["LLVMRustRunRestrictionPass",""],["LLVMRustSetDLLStorageClass",""],["LLVMRustSetDataLayoutFromTargetMachine",""],["LLVMRustSetLLVMOptions",""],["LLVMRustSetNormalizedTarget",""],["LLVMRustWriteArchive",""],["LLVMRustWriteOutputFile",""],["LLVMSetAlignment",""],["LLVMSetCleanup",""],["LLVMSetCurrentDebugLocation",""],["LLVMSetDataLayout",""],["LLVMSetDebug","Enables LLVM debug output."],["LLVMSetFunctionCallConv",""],["LLVMSetGC",""],["LLVMSetGlobalConstant",""],["LLVMSetInitializer",""],["LLVMSetInlineAsmDiagnosticHandler",""],["LLVMSetInstDebugLocation",""],["LLVMSetInstrParamAlignment",""],["LLVMSetInstructionCallConv",""],["LLVMSetLinkage",""],["LLVMSetMetadata",""],["LLVMSetModuleInlineAsm","See Module::setModuleInlineAsm."],["LLVMSetOperand",""],["LLVMSetParamAlignment",""],["LLVMSetSection",""],["LLVMSetTailCall",""],["LLVMSetTarget",""],["LLVMSetThreadLocal",""],["LLVMSetUnnamedAddr",""],["LLVMSetValueName",""],["LLVMSetVisibility",""],["LLVMSetVolatile",""],["LLVMSizeOf",""],["LLVMSizeOfTypeInBits","Number of bytes clobbered when doing a Store to *T."],["LLVMStartMultithreaded",""],["LLVMStoreSizeOfType","Number of bytes clobbered when doing a Store to *T."],["LLVMStructCreateNamed",""],["LLVMStructSetBody",""],["LLVMStructTypeInContext",""],["LLVMTypeOf",""],["LLVMUnpackInlineAsmDiagnostic",""],["LLVMUnpackOptimizationDiagnostic",""],["LLVMValueAsBasicBlock",""],["LLVMValueIsBasicBlock",""],["LLVMVectorType",""],["LLVMVersionMajor",""],["LLVMVersionMinor",""],["LLVMVoidTypeInContext",""],["LLVMWriteBitcodeToFile","Writes a module to the specified path. Returns 0 on success."],["LLVMWriteDebugLocToString",""],["LLVMWriteDiagnosticInfoToString",""],["LLVMWriteSMDiagnosticToString",""],["LLVMWriteTwineToString",""],["LLVMWriteTypeToString",""],["LLVMWriteValueToString",""],["LLVMX86FP80TypeInContext",""],["SetDLLStorageClass",""],["SetFunctionAttribute",""],["SetFunctionCallConv",""],["SetInstructionCallConv",""],["SetLinkage",""],["SetUnnamedAddr",""],["build_string",""],["debug_loc_to_string",""],["get_param","Safe wrapper around `LLVMGetParam`, because segfaults are no fun."],["get_params",""],["initialize_available_targets",""],["mk_section_iter",""],["mk_target_data",""],["rust_llvm_string_write_impl","Appending to a Rust string -- used by raw_rust_string_ostream."],["set_thread_local",""],["twine_to_string",""]],"mod":[["archive_ro","A wrapper around LLVM's archive (.a) code"],["debuginfo",""],["diagnostic","LLVM diagnostic reports."]],"struct":[["AttrBuilder",""],["Attribute",""],["ObjectFile",""],["SectionIter",""],["TargetData",""]],"trait":[["AttrHelper",""]],"type":[["ArchiveChildRef",""],["ArchiveIteratorRef",""],["ArchiveRef",""],["BasicBlockRef",""],["Bool",""],["BuilderRef",""],["ContextRef",""],["DebugLocRef",""],["DiagnosticHandler",""],["DiagnosticInfoRef",""],["ExecutionEngineRef",""],["InlineAsmDiagHandler",""],["MemoryBufferRef",""],["MetadataRef",""],["ModuleRef",""],["ObjectFileRef",""],["Opcode",""],["PassManagerBuilderRef",""],["PassManagerRef",""],["PassRef",""],["RustArchiveMemberRef",""],["RustStringRef",""],["SMDiagnosticRef",""],["SectionIteratorRef",""],["TargetDataRef",""],["TargetMachineRef",""],["TwineRef",""],["TypeRef",""],["UseRef",""],["ValueRef",""]]});