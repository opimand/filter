import React, {Component} from 'react'
import './Articles.css'
import Item from '../Articles/Item/Item'



class Articles extends Component {




    render() {




        return (

            <div className='articles'>

                <h3 className="articles__title">Статьи</h3>

                <div className="row">

                    <Item data={this.props.data} />

                </div>
                <button className='articles__btn' onClick={this.props.showMore}>Показать все</button>

            </div>
        )
    }


}

export default Articles