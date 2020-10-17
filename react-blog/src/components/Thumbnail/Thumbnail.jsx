import React from 'react';
import './style_thumbnail.css';

const Thumbnail = (props) => {

  // Load the image
  const images = require.context('../../../public/images', true);
  let imgSrc = images('./' + `${props.imgSrc}`);

  // Check for type of thumbnail, default otherwise
  var imgType;
  if (!props.hasOwnProperty('imgType')) {
    imgType = 'thumbnail';
  }
  else {
    imgType = props.imgType;
  }

  return (
    <img
      className={imgType}
      src={imgSrc}
    />
  );
}

export default Thumbnail;
