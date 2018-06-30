import React from "react";
import { Image, Item } from "semantic-ui-react";

class ClientsList extends React.Component {
    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }
    
    onClickItem(num) {
        this.props.onSelectItem(num);
    }
    
    render() {
        const clientList = this.props.clientList;
        return (
            <Item.Group divided>
            {clientList.map((item, index) => (
                    <Item key={index} onClick={() => this.onClickItem(index)} >
                        <Item.Image size="tiny" src={item.general.avatar} />
                        <Item.Content>
                            <Item.Header as="p">{item.general.firstName} {item.general.lastName}
                            </Item.Header>
                            <Item.Meta>
                                {item.job.title}
                            </Item.Meta>
                        </Item.Content>
                    </Item> //define function onClick here
            ))}
            </Item.Group>
            );
    }
}

export default ClientsList;