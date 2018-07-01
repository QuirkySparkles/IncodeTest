import React from "react";
import ClientsList from "./components/clientslist/ClientsList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchList from "./components/SearchList.jsx";
import DetailedInfo from "./components/detailedinfo/DetailedInfo.jsx";
import { connect } from "react-redux";
import { getPosts, setSearchParameter } from "./redux/actions.js";
import { Grid, Container, Loader } from "semantic-ui-react";
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
        const { clientList, filteredList, isLoading, isFailed } = this.props;
        let message;
        if(isFailed) message = "Failed to load data :(";
        else if(!isFailed && clientList.length === 0) 
            message = "No data returned";
        else message = "Select item for additional info!";
        return (
            <Container>
                <Grid centered columns={2} relaxed>
                    <Grid.Row>
                        <Grid.Column width={6} className="side-bar">
                        <div>
                            <SearchBar onSearchStateChange={this.onSearchStateChange}
                                        searchParameter={this.state.searchParameter}/>
                            <Loader active={isLoading}/>
                            {this.state.searchParameter.length > 0 ? 
                                <SearchList resultList={filteredList} onSelectItem={this.onSelectItem} /> : 
                                <ClientsList clientList={clientList} onSelectItem={this.onSelectItem} activeItem={this.state.selectedItem} />
                            }
                        </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div className="client-info-site">
                                { 
                                    this.state.selectedItem === -1 ? 
                                        <div className="tip">{message}</div> :
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
    const isLoading = state.isFetching;
    const isFailed = state.isFailed;
    return {
        clientList,
        filteredList,
        isLoading,
        isFailed
    };
}

export default connect(mapStateToProps)(App);