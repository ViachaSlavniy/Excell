export const capitalize = (string) => {
    if (typeof string !== 'string') {
        return ''
    }
    return string[0].toUpperCase() + string.substr(1)
}
