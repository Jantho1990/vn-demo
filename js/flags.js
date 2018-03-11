// A global container for flags.
const Flags = {
    data: {},
    get [expr]() { return data[expr] },
    set [expr](val) { data[expr] = val }
}