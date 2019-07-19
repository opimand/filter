import React, {Component} from 'react';
import Filter from './components/Filter/Filter'
import Articles from './components/Articles/Articles'
import './App.css';

const dataUrl = 'https://api.myjson.com/bins/q59zd'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articlesData: null,
            dataIs: null
        }
    }

    componentWillMount() {
        this.getMyData();

    }

    getMyData() {
        fetch(dataUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson, dataIs: true})
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <div className="App">

                <Filter  />
                <Articles data={this.state.data}/>
            </div>
        );
    }
}

export default App;
