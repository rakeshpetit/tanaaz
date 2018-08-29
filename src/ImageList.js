import React from 'react';

const ImageList = props => {
  if (
    props.imagePath === undefined ||
    props.imagePath === null ||
    props.imagePath.length === 0
  )
    return null;
  const path = props.svgsArray.find(
    str => str.indexOf(props.imagePath.hash) > 1
  );
  console.log(path);
  
  return (
    <div style={{ height: 100, width: 100 }}>
      {<img src={path} alt={props.imagePath.hash} />}
    </div>
  );
};

export default ImageList;
