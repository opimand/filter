import React, {Component} from 'react';
import Filter from './components/Filter/Filter'
import Articles from './components/Articles/Articles'
import './App.css';

const dataUrl = 'https://api.myjson.com/bins/q59zd'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {

            selectCategory: null
        }

        this.onSelectCategoryHandler = this.onSelectCategoryHandler.bind(this)
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

    onSelectCategoryHandler = e => {
        let selectCategory = e.target.value

        this.setState({
            selectCategory: selectCategory
        })

    }

    render() {
        console.log(this.state)
        return (
            <div className="App">

                <Filter onSelectCategory={this.onSelectCategoryHandler}/>
                <Articles data={this.state.data}/>
            </div>
        );
    }
}

export default App;
