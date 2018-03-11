// A global container for flags.
const Flags = new Proxy ({data: {}}, {
    get: (target, name) => target.data[name],
    set: (target, name, val) => target.data[name] = val
});