import React from 'react';
import './style_card.css';

// Import Components
import Title from '../../components/Title/Title.jsx';
import Thumbnail from '../../components/Thumbnail/Thumbnail.jsx';

const Card = (props) => {

  // Check for special card, otherwise default
  var cardType;
  var imgType;
  if (!props.hasOwnProperty('cardType')) {
    cardType = 'card';
    imgType = 'thumbnail';
  }
  else {
    // Accepted card formats
    switch (props.cardType) {
      case 'bannerCard':
        cardType = 'bannerCard';
        imgType = 'bannerThumb';
        break;
      case 'thumbCard':
        cardType = 'thumbCard';
        imgType = 'thumbnail';
        break;
      case 'rightThumbCard':
        cardType = 'thumbCard';
        imgType = 'rightThumb';
        break;
      case 'leftThumbCard':
        cardType = 'thumbCard';
        imgType = 'leftThumb';
        break;
      default:
        cardType = 'card';
        imgType = 'thumbnail';
    }
  }

  return (
    <div className={cardType}>
      {/* Title */}
      <Title className='title'>
        {props.title}
      </Title>

      {/* Thumbnail (Optional) */}
      {( () => {
        if (props.hasOwnProperty('imgSrc')) {
          return (
            <div>
              <Thumbnail
                imgSrc={props.imgSrc}
                imgType={imgType}
              />
            </div>
          );
        }
        else {
          return (<div>No Image</div>);
        }
      }) ()}

      {/* Description (Optional) */}

      {/* Link / More info */}

    </div>
  );
}

export default Card;
