import React from "react";
import ClientsList from "./ClientsList.jsx";
import SearchBar from "./SearchBar.jsx";
import { connect } from "react-redux";
import { getPosts, setSearchParameter } from "../actions.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParameter: ""
        };
        this.onSearchStateChange = this.onSearchStateChange.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(getPosts())
            .then( () => this.props.dispatch(setSearchParameter(this.state.searchParameter)) );
    }
    
    onSearchStateChange(searchParameter) {
        this.setState({
            searchParameter: searchParameter
        });
        this.props.dispatch(setSearchParameter(searchParameter));
    }
    
    render() {
        const { clientList } = this.props;
        return (
            <div>
                <SearchBar onSearchStateChange={this.onSearchStateChange}
                            searchParameter={this.state.searchParameter}/>
                <ClientsList clientList={clientList} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const clientList = state.clientList;
    return {
        clientList
    };
}

export default connect(mapStateToProps)(App);