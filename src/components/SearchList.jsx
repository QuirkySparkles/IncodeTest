import React from "react";
import SearchItem from "./SearchItem.jsx";
import { Item } from "semantic-ui-react";

class SearchList extends React.Component {
    
    render() {
        const resultList = this.props.resultList;
        const searchTip = {
            marginTop: "15px",
            marginLeft: "15%",
            fontSize: "16px",
            color: "#c1c1c1",
            width: "100%"
        };
        const searchList = {
            marginTop: "5px"
        };
        return (
            <div>
                {resultList.length === 0 ? <div style={searchTip}>No matches found</div> : 
                <div>
                    <div style={searchTip}>Search results</div>
                    <Item.Group divided style={searchList}>
                        {resultList.map( (item, index) => (<SearchItem result={item} key={index} onSelectItem={this.props.onSelectItem} id={item.id}/>))}
                    </Item.Group>
                </div>
                }
            </div>);
    }
}

export default SearchList;