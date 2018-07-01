function xhRequest(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if(this.status == 200) {
                resolve(this);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network error"));
        };
        xhr.send();
    });
}

export function setSearchParameter(parameter) {
    return {
        type: "SET_SEARCH",
        parameter
    };
}

function postRequest() {
    return {
        type: "REQUEST_POST"
    };
}

function postSuccess(data) {
    return {
        type: "POST_SUCCESS",
        data 
    };
}

function postFailure() {
    return {
        type: "POST_FAILURE"
    };
}

export function getPosts() {
    return function(dispatch) {
        dispatch(postRequest());
        return xhRequest("http://localhost:8080/clients/clients.json")
            .then( response => JSON.parse(response.responseText) )
            .then( response => dispatch(postSuccess(response)) )
            .catch( error => { 
                dispatch(postFailure());
                console.log(error);
            })
    };
}