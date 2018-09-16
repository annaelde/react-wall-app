const baseURL = 'http://localhost:8000/'
const headers = new Headers({
    Authorization: 'Token 19a89994fb95a9f2811c0c3edf5c2890d38019b1'
})

const request = {
    get: async (url, payload = {}) => {
        let request =  new Request(`${baseURL}${url}`, {
            method: 'GET',
            headers
        })
        return fetch(request)
    },
    post: async (url, payload = {}) =>
        fetch(
            new Request(`${baseURL}${url}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(payload)
            })
        ),
    delete: async (url, payload = {}) =>
        fetch(
            new Request(`${baseURL}${url}`, {
                method: 'DELETE',
                headers,
                body: JSON.stringify(payload)
            })
        )
}

function setToken(token) {
    // headers.set('Authorization', `Token ${token}`)
}

function removeToken() {
    // headers.delete('Authorization')
}

export { request, setToken, removeToken }