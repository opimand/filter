import React, {Component} from 'react'
import './Articles.css'
import Item from '../Articles/Item/Item'



class Articles extends Component {


    // constructor() {
    //     super()
    //     this.state = {
    //         dataIs: false,
    //         data: []
    //     }
    //
    // }
    //
    // componentWillMount() {
    //     this.getMyData();
    //
    // }
    //
    // getMyData() {
    //     fetch(dataUrl)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({data: responseJson, dataIs: true})
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }


    render() {




        return (

            <div className='articles'>

                <h3 className="articles__title">Статьи</h3>

                <div className="row">

                    <Item data={this.props.data} />

                </div>

            </div>
        )
    }


}

export default Articles