import React from 'react';
import './style_card.css';

// Import Components
import Title from '../../components/Title/Title.jsx';
import Thumbnail from '../../components/Thumbnail/Thumbnail.jsx';

const Card = (props) => {
  return (
    <div className='card'>
      {/* Title */}
      <Title>
        {props.title}
      </Title>

      {/* Thumbnail (Optional) */}
      {( () => {
        if (props.hasOwnProperty('imgSrc')) {
          return (
            <div>
              <Thumbnail imgSrc={props.imgSrc}/>
              <p>Image Above</p>
            </div>
          );
        } else {
          return (<div>No Image</div>);
        }
      }) ()}

      {/* Description (Optional) */}

      {/* Link / More info */}

    </div>
  );
}

export default Card;
