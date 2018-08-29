import React, { Component  } from 'react'
import ImageSlide from './ImageSlide';
const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:1337';
axios.defaults.headers.common = {'Authorization': "bearer " + 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjZmOTk4ODU2YjBjOTA1NTg2OTI0ZWIiLCJpYXQiOjE1MzQwNDEyNjQsImV4cCI6MTUzNjYzMzI2NH0.nPEcbkoJ4wcbwi_CEX4hVKXB0PJnUtt3VuHcBljbF2s'};
const absolutePath = '../../strapui/app/public';

export class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {imageData: null};
    }
    componentDidMount() {        
            let url = 'http://localhost:1337/product';            
            axios.get(url)
            .then((response) => {
                // handle success                
                const imageData = response.data;  
                imageData && this.setState({imageData});         
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });                    
    }


  render() {    
    const images = require.context('../../strapui/app/public/uploads', true, /\.jpg$/);
    const keys = images.keys()
    const svgsArray = keys.map(key => images(key))
    const imageData = this.state.imageData;    
    if(imageData === null)
      return null;
    return (
        <div className="container">
        <div className="colItemLeft">
          <ImageSlide styles="doorHardwareTile" imagePath={imageData[0].image} svgsArray={svgsArray} />
          <ImageSlide styles="cabinetHardwareTile" imagePath={imageData[1].image} svgsArray={svgsArray} />          
        </div>
        <div className="colItemRight">         
          <ImageSlide styles="slidingDoorHardwareTile" imagePath={imageData[2].image} svgsArray={svgsArray} />
        </div>
        <div className="colItemLeft">
        <ImageSlide styles="doorAccessoriesTile" imagePath={imageData[3].image} svgsArray={svgsArray} />
        </div>
        <div className="colItemRight">
        <ImageSlide styles="homeAccessoriesTile" imagePath={imageData[4].image} svgsArray={svgsArray} />
        <ImageSlide styles="windowHardwareTile" imagePath={imageData[5].image} svgsArray={svgsArray} />
        </div>
        <div className="colItemCenter">
        <ImageSlide styles="customHardwareTile" imagePath={imageData[6].image} svgsArray={svgsArray} />          
        </div>
      </div>
    )
  }
}

export default Container
