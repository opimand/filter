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

                        <input type="text" id='search' onChange={this.props.onSearchType}/>
                        <i className="fas fa-search"></i>
                    </div>

                    <hr/>

                    <div className="selects">
                        <span className="selects__label">Фильтровать статьи по: </span>



                            <select name="levelChoose" id="levelChoose" className="level" defaultValue={'any'} onChange={this.props.onSelectLevel}>

                            <option value='any' key={'any'} disabled>Любой уровень</option>
                                {this.state.dataIs ?
                                    this.state.data.levels.map((level, id) => {
                                        return <option key={level + id} value={level}>{level}</option>
                                    })
                                    : null
                            }


                        </select>

                        <select name="categoryChoose" id="categoryChoose" className="category" onChange={this.props.onSelectCategory} defaultValue={'any'}>

                            <option value="any" disabled>Все категории</option>

                            {this.state.dataIs ?
                                this.state.data.categories.map((category, id) => {
                                    return <option key={category + id} value={category}>{category}</option>
                                })
                                : null
                            }
                        </select>


                        <select name="languageChoose" id="languageChoose" className="language" onChange={this.props.onSelectLanguage} defaultValue={'any'}>
                            <option value="any" disabled>Все языки</option>
                            {this.state.dataIs ?
                                this.state.data.languages.map((language, id) => {
                                    return <option key={language + id} value={language}>{language}</option>
                                })
                                : null
                            }
                        </select>


                        <select name="videoChoose" id="videoChoose" className="video" onChange={this.props.videoIs}
                                defaultValue={'any'}>
                            <option value="any" disabled>Видео</option>
                            {this.state.dataIs ?
                                this.state.data.videos.map((video) => {
                                    return <option key={video}

                                                   value={video}> {video ? 'Есть видео' : 'Нет видео'} </option>
                                })
                                : null
                            }


                        </select>




                    </div>
                </div>
            </div>

        )


    }


}

export default Filter