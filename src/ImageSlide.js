import React from 'react'

const ImageSlide = (props) => {   
    if(props.imagePath === undefined || props.imagePath===null || props.imagePath.length === 0)
        return null;
  return (
    <div className={props.styles}>
          {  props.imagePath.map((image) => {               
              const path = props.svgsArray.find((str) => str.indexOf(image.hash) > 1);              
              return (<img key={image.id} src={path} alt={props.styles}/>);
            }) 
          }
    </div>
  )
}

export default ImageSlide
