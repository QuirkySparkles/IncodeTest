const initialState = {
    isFetching: false,
    clientList: [],
    filteredList: []
};

export default function mainReducer( state = initialState, action) {
    switch (action.type) {
        case "SET_SEARCH":
            return Object.assign({}, state, { filteredList: state.clientList.filter(currentUser => {
                for (let point in currentUser) {
                    for (let item in currentUser[point]) {
                        let currentItem = currentUser[point][item].toLowerCase();
                        if(item === "avatar") continue;
                        if(currentItem.indexOf(action.parameter.toLowerCase()) !== -1)
                            return true;
                    }
                }
                return false;
            })
        });
        case "REQUEST_POST":
            return Object.assign( {}, state, { isFetching: true } );
        case "POST_SUCCESS":
            return Object.assign( {}, state, { isFetching: false, clientList: action.data } );
        default:
            return state;
    }
}