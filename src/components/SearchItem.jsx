import React from "react";
import { Item, List, Icon } from "semantic-ui-react";


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
        const searchItem = {
            lineHeight: 1.75,
        };
        for(let key in this.props.result) {
            result.push({key: key, value: this.props.result[key]});
        }
        return (
            <Item onClick={() => this.onClickItem(this.props.id)}>
                <Item.Content>
                    <Item.Description>
                        { result.map( (item, index) => <p key={index} style={searchItem}><Icon name="caret right" /> {item.key}: {item.value}  </p>)}
                    </Item.Description>
                </Item.Content>
            </Item>
        );
            
    }
}

export default SearchItem;