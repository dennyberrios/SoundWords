export function FuncClear(textRef) {
    if (textRef?.current) {
        textRef.current.value = "";
    }
}