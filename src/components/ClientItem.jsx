import React from "react";

class ClientItem extends React.Component {
    render() {
        let client = this.props.client;
        return <div>
            <img src={client.general.avatar}></img>
            <p>{client.general.firstName} {client.general.lastName}</p>
            <p>{client.job.title}</p>
            <br />
        </div>;
    }
}

export default ClientItem;