import React from "react";
import SearchItem from "./SearchItem.jsx";
import { Item } from "semantic-ui-react";

class SearchList extends React.Component {
    
    render() {
        const resultList = this.props.resultList;
        return <Item.Group divided>
            {resultList.map( (item, index) => (<SearchItem result={item} key={index} onSelectItem={this.props.onSelectItem} id={item.id}/>))}
        </Item.Group>;
    }
}

export default SearchList;