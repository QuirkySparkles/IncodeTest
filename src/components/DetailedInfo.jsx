import React from "react";
import { Item } from "semantic-ui-react";

class DetailedInfo extends React.Component {
    constructor(props) {
        super(props);
        this.beautify = this.beautify.bind(this);
    }
    beautify(clientData) {
        let result = [];
        for(let key in clientData) {
            let normKey = key.replace(/[A-Z]/g, function(letter) {
                return " " + letter.toLowerCase();
            });
            normKey = key[0].toUpperCase() + normKey.slice(1);
            result.push({key: normKey, value: clientData[key]});
        }
        return result;
    }
    render() {
        const data = this.props.data;
        return (
            <Item.Group>
                <Item>
                    <Item.Image src={data.general.avatar} />
                    <Item.Content>
                        <Item.Header>{data.general.firstName} {data.general.lastName}</Item.Header>
                        <Item.Meta>{data.job.title} - {data.job.company}</Item.Meta>
                        <Item.Description>
                            <p>Contacts:</p>
                            <p>{ this.beautify(data.contact).map( (item, index) => <li key={index}>{item.key}: {item.value} </li>)}</p>
                            <p>Address:</p>
                            <p>{ this.beautify(data.address).map( (item, index) => <li key={index}>{item.key}: {item.value} </li>)}</p>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}

export default DetailedInfo;