import React, {Component} from 'react'

import './Filter.css'



class Filter extends Component {
    constructor() {
        super()
        this.state = {
            dataIs: false,
            data: []
        }


    }

    componentWillMount() {
        this.getMyData();

    }

    getMyData() {
        fetch('https://api.myjson.com/bins/agwup')
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
            <div className='Filter__bg'>
                <div className='Filter__wrap'>
                    <div className="search">

                        <label htmlFor="search">
                            Поиск по ключевым словам:
                        </label>

                        <input type="text" id='search'/>
                        <i className="fas fa-search"></i>
                    </div>

                    <hr/>

                    <div className="selects">
                        <span className="selects__label">Фильтровать статьи по: </span>


                        <select name="categoryChoose" id="categoryChoose" className="category" onChange={this.props.onSelectCategoryHandler}>


                            <option defaultValue='any'>Любой уровень</option>

                            {this.state.dataIs ?
                                this.state.data.categories.map((category, id) => {
                                    return <option key={category + id} value={category}>{category}</option>
                                })
                                : 'Data loading'
                            }


                        </select>


                        <select name="levelChoose" id="levelChoose" className="level" defaultValue={'any'}>
                            <option value="any">Все категории</option>

                            {this.state.dataIs ?
                                this.state.data.levels.map((level, id) => {
                                    return <option key={level + id} value={level}>{level}</option>
                                })
                                : 'Data loading'
                            }
                        </select>


                        <select name="languageChoose" id="languageChoose" className="language">
                            <option value="any">Все языки</option>
                            {this.state.dataIs ?
                                this.state.data.languages.map((language, id) => {
                                    return <option key={language + id} value={language}>{language}</option>
                                })
                                : 'Data loading'
                            }
                        </select>


                        <select name="videoChoose" id="videoChoose" className="video">
                            {this.state.dataIs ?
                                this.state.data.videos.map((video) => {
                                    return <option key={video + Math.random()}
                                                   value={video}> {video ? 'Есть видео' : 'Нет видео'} </option>
                                })
                                : 'Data loading'
                            }


                        </select>
                    </div>
                </div>
            </div>

        )


    }


}

export default Filter