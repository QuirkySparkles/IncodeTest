import React from "react";
import { Input } from "semantic-ui-react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchStateChange = this.handleSearchStateChange.bind(this);
    }
    
    handleSearchStateChange(e) {
        this.props.onSearchStateChange(e.target.value);
    }
    
    render() {
        return (
            <div>
                <Input icon="search"
                        placeholder="Search" 
                        value={this.props.searchParameter}
                        onChange={this.handleSearchStateChange}/>
            </div>
        );
    }
}

export default SearchBar;