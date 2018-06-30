import React from "react";
import ClientItem from "./ClientItem.jsx";

class ClientsList extends React.Component {
    render() {
        let clientList = this.props.clientList;
        return <div>
            {clientList.map((item, index) => (
                <ClientItem key={index} client={item} /> //define function onClick here
            ))}
        </div>;
    }
}

export default ClientsList;