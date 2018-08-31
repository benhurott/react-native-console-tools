let host = {}

export const configure = options => {
    if (!options.enabled) return

    configureForReactNative()

    global.RNCT = host
}

function configureForReactNative() {
    const asyncStorage = require('./react-native/asyncStorage')
    const registrators = [asyncStorage]

    registrators.forEach(registrator => registrator(host))
}
