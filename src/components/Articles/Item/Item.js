import React from 'react'
import './Item.css'
import img1 from '../../../image3.jpg'
import img2 from '../../../maxresdefault.jpg'
import video from '../../../you.jpg'

const imgArray = [img1, img2]
const Item = props => {
   const itemsArray = props.data
    if (itemsArray){
    return(





        <>
            {itemsArray.map(item => (
                <div className='articles__col' key={Math.random()}>
                    <img src={item.isVideo? video: imgArray[Math.floor(Math.random() * 2)] }



                         alt='img' className="col__img"/>
                    <div className="title">{item.category}</div>
                    <div className="category">{item.level}</div>
                    <div className="descr">{item.text}</div>

                </div>
            ))}
        </>


)
    } else {
        return <h1>Loading data</h1>
    }
}


export default Item