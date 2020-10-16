import React from 'react';
import './style_thumbnail.css';

const Thumbnail = (props) => {

  const images = require.context('../../../public/images', true);
  let imgSrc = images('./' + `${props.imgSrc}`);

  return (
    <img src={imgSrc} />
  );
}

export default Thumbnail;
