import React from "react";
import SearchItem from "./SearchItem.jsx";

class SearchList extends React.Component {
    render() {
        let resultList = this.props.resultList;
        return <div>
            {resultList.map( (item, index) => (<SearchItem result={item} key={index} />))}
        </div>;
    }
}

export default SearchList;