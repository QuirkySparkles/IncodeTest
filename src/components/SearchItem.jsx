import React from "react";
import { Item, Icon } from "semantic-ui-react";


class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }
    
    onClickItem(num, currentIndex) {
        this.props.onSelectItem(num);
        this.props.onHighlight(currentIndex);
    }
    
    render() {
        let result = [];
        const searchItem = {
            lineHeight: 1.75,
        };
        const inactive = {
            background: "none"
        };
        const active = {
            background: "#b5f3ff"
        };
        for(let key in this.props.result) {
            result.push({key: key, value: this.props.result[key]});
        }
        return (
            <Item onClick={() => this.onClickItem(this.props.id, this.props.currentItem)} style={this.props.currentItem === this.props.activeItem ? active : inactive}>
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