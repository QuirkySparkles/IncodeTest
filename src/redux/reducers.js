const initialState = {
    isFetching: false,
    isFailed: false,
    clientList: [],
    filteredList: []
};

function searcher(array, parameter) {
    let result = [];
    array.forEach((currentUser, index) => {
        let currentResult = {};
        for (let point in currentUser) {
            for (let item in currentUser[point]) {
                let currentItem = currentUser[point][item].toLowerCase();
                if(item === "avatar") continue;
                if(currentItem.indexOf(parameter.toLowerCase()) !== -1 
                   || item.toLowerCase().indexOf(parameter.toLowerCase()) !== -1) {
                    let key = item.replace(/[A-Z]/g, function(letter) {
                        return " " + letter.toLowerCase();
                    });
                    key = key[0].toUpperCase() + key.slice(1);
                    currentResult[key] = currentUser[point][item];
                }
            }
        }
        if(Object.keys(currentResult).length !== 0) {
            Object.defineProperty(currentResult, "id", {
                value: index,
                enumerable: false
            });
            result.push(currentResult);
        }
    });
    return result;
}

export default function mainReducer( state = initialState, action) {
    switch (action.type) {
        case "SET_SEARCH":
            return Object.assign({}, state, { filteredList: searcher(state.clientList, action.parameter)
        });
        case "REQUEST_POST":
            return Object.assign( {}, state, { isFetching: true, isFailed: false } );
        case "POST_SUCCESS":
            return Object.assign( {}, state, { isFetching: false, clientList: action.data } );
        case "POST_FAILURE":
            return Object.assign( {}, state, { isFetching: false, isFailed: true });
        default:
            return state;
    }
}