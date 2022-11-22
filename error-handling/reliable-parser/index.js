export const parseUser = (text) => {
    try {
        return JSON.parse(text);
    } catch(err) {
        return null
    }
}