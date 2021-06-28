initSidebarItems({"fn":[["invoke_with_current_registers","This function saves the current CPU register values onto the stack (to preserve them) and then invokes the given closure with those registers as the argument."]],"struct":[["StackFrame","A single frame in the stack, which contains unwinding-related information for a single function call’s stack frame."],["StackFrameIter","An iterator over the stack frames on the current task’s call stack, which works in reverse calling order from the current function up the call stack to the very first function on the stack, at which point it will return `None`. "],["UnwindingContext","This is the context/state that is used during unwinding and passed around to the callback functions in the various unwinding stages, such as in `_Unwind_Resume()`. "]],"traitalias":[["FuncWithRegisters",""]]});