import React from 'react';
import './style_home.css';

// Import Containers
import Card from '../../containers/Card/Card.jsx';

// Import Components
const Home = (props) => {
  return (
    <div>
      <p> Home Page (Remove this later)</p>
      <Card
        title='My first Card'
        imgSrc='test_img.png'
        cardType='bannerCard'
      />
    </div>
  );
}

export default Home;
