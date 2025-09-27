//=====================================================================================
// FETCH METHOD
// This function uses the fetch API to make a request to the server.
//=====================================================================================
function fetchMethod(url, callback, method = "GET", data = null, token = null, passCredentials = false) {
    console.log("fetchMethod: ", url, method, data, token);

    const headers = {};

    if (data) {
        headers["Content-Type"] = "application/json";
    }

    if (token) {
        headers["Authorization"] = "Bearer " + token;
    }

    const options = {
        method: method.toUpperCase(),
        headers: headers,
        redirect: "manual",
        credentials: passCredentials ? "include" : "same-origin"
    };

    if (method.toUpperCase() !== "GET" && data !== null) {
        options.body = JSON.stringify(data);
    }

    fetch(url, options)
        .then((response) => {
            if (response.status >= 300 && response.status < 400) {
                callback(response.status, {}, response.headers);
            } else if (response.status === 204) {
                callback(response.status, {});
            } else {
                response.json().then((responseData) => callback(response.status, responseData, response.headers));
            }
        })
        .catch((error) => console.error(`Error from ${method} ${url}:`, error));
}
