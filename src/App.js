import React, {Component} from 'react';
import Filter from './components/Filter/Filter'
import Articles from './components/Articles/Articles'
import './App.css';

const dataUrl = 'https://api.myjson.com/bins/q59zd'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {

            filteredArray: null

        }

        this.onSelectCategoryHandler = this.onSelectCategoryHandler.bind(this)
        this.onSearchTypeHandler = this.onSearchTypeHandler.bind(this)
        this.onSelectLanguageHandler = this.onSelectLanguageHandler.bind(this)
        this.videoIsHandler = this.videoIsHandler.bind(this)
        this.onSelectLevelHandler = this.onSelectLevelHandler.bind(this)
    }

    componentWillMount() {
        this.getMyData();

    }

    getMyData() {
        fetch(dataUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }


    onSelectCategoryHandler = event => {

        const filterWord = event.target.value
        let data = this.state.data


        if (this.state.filteredArray === null) {
            const result = data.filter(item => item.category.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        } else {
            data = this.state.filteredArray

            const result = data.filter(item => item.category.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        }


    }


    onSearchTypeHandler = event => {


        const filterWord = event.target.value
        let data = this.state.data


        if (this.state.filteredArray === null) {
            const result = data.filter(item => item.text.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        } else {
            data = this.state.filteredArray

            const result = data.filter(item => item.text.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        }
    }


    onSelectLanguageHandler = event => {

        const filterWord = event.target.value
        let data = this.state.data

        if (this.state.filteredArray === null) {
            const result = data.filter(item => item.language.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        } else {
            data = this.state.filteredArray

            const result = data.filter(item => item.language.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        }


    }

    onSelectLevelHandler = event => {

        const filterWord = event.target.value
        let data = this.state.data


        if (this.state.filteredArray === null) {
            const result = data.filter(item => item.level.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        } else {
            data = this.state.filteredArray

            const result = data.filter(item => item.level.includes(filterWord));

            this.setState({
                filteredArray: result
            })
        }

    }

    videoIsHandler = event => {

        const str2bool = value => {
            if (value && typeof value === 'string') {
                if (value.toLowerCase() === 'true') return true
                if (value.toLowerCase() === 'false') return false
            }
            return value
        }
        const filterWord = str2bool(event.target.value)


        let data = this.state.data

        if (this.state.filteredArray === null) {
            const result = data.filter(item => item.isVideo === filterWord);

            this.setState({
                filteredArray: result
            })
        } else {
            data = this.state.filteredArray

            const result = data.filter(item => item.isVideo === filterWord);

            this.setState({
                filteredArray: result
            })
        }
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.filteredArray)
        return (
            <div className="App">

                <Filter
                    onSearchType={this.onSearchTypeHandler}
                    onSelectCategory={this.onSelectCategoryHandler}
                    onSelectLanguage={this.onSelectLanguageHandler}
                    videoIs={this.videoIsHandler}
                    onSelectLevel={this.onSelectLevelHandler}

                />
                <Articles data={this.state.filteredArray}/>
            </div>
        );
    }
}

export default App;
