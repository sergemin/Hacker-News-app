function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}
function parseJSON(response) {
    return response.json();
}

function fetchJSON(url) {
    return fetch(url)
            .then(checkStatus)
            .then(parseJSON)
}
export default fetchJSON;