import React from "react";
import ClientsList from "./ClientsList.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchList from "./SearchList.jsx"
import { connect } from "react-redux";
import { getPosts, setSearchParameter } from "../actions.js";
import { Grid, Container } from "semantic-ui-react";

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
        const { clientList, filteredList } = this.props;
        return (
            <Container>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width={4}>
                        <div>
                            <SearchBar onSearchStateChange={this.onSearchStateChange}
                                        searchParameter={this.state.searchParameter}/>
                            {this.state.searchParameter.length > 0 ? <SearchList resultList={filteredList} /> : <ClientsList clientList={clientList} />}
                        </div>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            Template
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>    
        );
    }
}

function mapStateToProps(state) {
    const clientList = state.clientList;
    const filteredList = state.filteredList;
    return {
        clientList,
        filteredList
    };
}

export default connect(mapStateToProps)(App);