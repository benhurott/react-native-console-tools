let _logger = console.log

export const logger = _logger
export const setLogger = logger => {
    _logger = logger
}
