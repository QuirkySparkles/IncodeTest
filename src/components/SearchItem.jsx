import React from "react";

class SearchItem extends React.Component {
    render() {
        let result = [];
        for(let key in this.props.result) {
            result.push({key: key, value: this.props.result[key]});
        }
        return (
            <div>
                <ul>
                    { result.map( (item, index) => (<li key={index}>{item.key}: {item.value}</li>) )}
                </ul>
                <hr/>
            </div>
        );
            
    }
}

export default SearchItem;