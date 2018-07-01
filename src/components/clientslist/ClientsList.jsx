import React from "react";
import { Image, List } from "semantic-ui-react";
import "./ClientsList.css";

class ClientsList extends React.Component {
    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }
    
    onClickItem(num) {
        this.props.onSelectItem(num);
    }
    
    render() {
        const clientItem = this.props.clientList.map( (item, index) => {
            return {
                childKey: index,
                image: {
                    size: "tiny",
                    src: item.general.avatar
                },
                header: `${item.general.firstName} ${item.general.lastName}`,
                description: item.job.title,
                onClick: () => this.onClickItem(index),
                className: this.props.activeItem === index ? "active-item" : "inactive"
            };
        });
        return (
            <List items={clientItem} divided celled animated/>
        );
    }
}

export default ClientsList;