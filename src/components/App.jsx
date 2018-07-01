import React from "react";
import ClientsList from "./ClientsList.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchList from "./SearchList.jsx";
import DetailedInfo from "./DetailedInfo.jsx";
import { connect } from "react-redux";
import { getPosts, setSearchParameter } from "../actions.js";
import { Grid, Container } from "semantic-ui-react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParameter: "",
            selectedItem: -1
        };
        this.onSearchStateChange = this.onSearchStateChange.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
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
    
    onSelectItem(selectedItem) {
        this.setState({
            selectedItem: selectedItem
        });
    }
    
    render() {
        const { clientList, filteredList } = this.props;
        return (
            <Container>
                <Grid centered columns={2} relaxed>
                    <Grid.Row>
                        <Grid.Column width={5} className="side-bar">
                        <div>
                            <SearchBar onSearchStateChange={this.onSearchStateChange}
                                        searchParameter={this.state.searchParameter}/>
                            {this.state.searchParameter.length > 0 ? 
                                <SearchList resultList={filteredList} onSelectItem={this.onSelectItem} /> : 
                                <ClientsList clientList={clientList} onSelectItem={this.onSelectItem} activeItem={this.state.selectedItem} />
                            }
                        </div>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <div className="client-info-site">
                                { 
                                    this.state.selectedItem === -1 ? 
                                        <div className="tip">Select item for additional info!</div> :
                                        <DetailedInfo data={clientList[this.state.selectedItem]} />
                                }
                            </div>
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