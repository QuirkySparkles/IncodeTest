import React from "react";
import { Item } from "semantic-ui-react";

class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }
    
    onClickItem(num) {
        this.props.onSelectItem(num);
    }
    
    render() {
        let result = [];
        for(let key in this.props.result) {
            result.push({key: key, value: this.props.result[key]});
        }
        return (
            <Item onClick={() => this.onClickItem(this.props.id)}>
                <Item.Content>
                    <Item.Description>
                        { result.map( (item, index) => <li key={index} >{item.key}: {item.value}  </li>)}
                    </Item.Description>
                </Item.Content>
            </Item>
        );
            
    }
}

export default SearchItem;