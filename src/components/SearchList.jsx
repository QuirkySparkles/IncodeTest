import React from "react";
import SearchItem from "./SearchItem.jsx";
import { Item } from "semantic-ui-react";

class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedItem: -1
        };
        this.highlightItem = this.highlightItem.bind(this);
    }
    
    highlightItem(num) {
        this.setState({
            highlightedItem: num
        });
    }
    render() {
        const resultList = this.props.resultList;
        const searchTip = {
            marginTop: "15px",
            marginLeft: "15%",
            fontSize: "16px",
            color: "#c1c1c1",
            width: "100%"
        };
        return (
            <div>
                {resultList.length === 0 ? <div style={searchTip}>No matches found</div> : 
                <div>
                    <div style={searchTip}>Search results</div>
                    <Item.Group divided>
                        {resultList.map( (item, index) => 
                            (<SearchItem result={item} key={index} onSelectItem={this.props.onSelectItem} onHighlight={this.highlightItem} currentItem={index} activeItem={this.state.highlightedItem} id={item.id} />)
                        )}
                    </Item.Group>
                </div>
                }
            </div>);
    }
}

export default SearchList;