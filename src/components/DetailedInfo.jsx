import React from "react";
import { Item } from "semantic-ui-react";
import "./DetailedInfo.css";

class DetailedInfo extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <Item.Group>
                <Item className="content-container">
                    <Item.Image src={data.general.avatar} />
                    <Item.Content>
                        <Item.Header>
                            <span className="info-header">{data.general.firstName} {data.general.lastName}</span>
                        </Item.Header>
                        <Item.Meta>{data.job.title} - {data.job.company}</Item.Meta>
                        <Item.Description>
                            <div className="info-section">
                                <div className="info-title">Contacts:</div>
                                <div className="info-item">Email: {data.contact.email}</div>
                                <div className="info-item">Phone: {data.contact.phone}</div>
                            </div>
                            <div className="info-section">
                                <div className="info-title">Address:</div>
                                <div className="info-item">Street: {data.address.street}</div>
                                <div className="info-item">City: {data.address.city}</div>
                                <div className="info-item">Zip code: {data.address.zipCode}</div>
                                <div className="info-item">Country: {data.address.country}</div>
                            </div>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}

export default DetailedInfo;