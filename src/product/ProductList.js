import React from 'react'
import ImageList from '../ImageList';

const ProductList = (props) => {
    const images = require.context('../../../strapui/app/public/uploads', true, /\.jpg$/);
    const keys = images.keys()
    const svgsArray = keys.map(key => images(key))
    if(!props.item)
        return null;
  return (    
    <div className="container">
    <div className="colItemLeft">
      <div>{props.item.name}</div>
      <div>{props.item.category}</div>
      <div>{props.item.subCategory}</div>
      <ImageList styles="doorHardwareTile" imagePath={props.item.image[0]} svgsArray={svgsArray} />
    </div>
    </div>
  )
}

export default ProductList