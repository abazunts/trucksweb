

const toLocalDate = (date) => {
    return date.toLocaleDateString("enSA", {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
}

export const toPrettyDate = (date) => {
    if (date) {
        return toLocalDate(new Date(Date.parse(date)))
    }
    return null
}