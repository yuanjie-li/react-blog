import React from 'react';
import './style_home.css';
import { Container, Row, Col } from 'reactstrap';

// Import Containers
import Card from '../../containers/Card/Card.jsx';

// Import Components
const Home = (props) => {
  return (
    <div>
      <p> Home Page (Remove this later)</p>
      {/* Pick a good banner image */}
      {/* TODO: Add text? Custom design? */}
      <Card
        title='Banner Card'
        imgSrc='test_img.png'
        cardType='bannerCard'
      />

      {/* Add two columns: one for contact, one for featured posts */}
        <Row style={{'display':'flex'}}>
          <Col style={{'width':'75%'}}>
            hellllloooooooooooooooooooooooooooooooooooooooooooooooooooooo 1
          </Col>
          <Col style={{'width':'25%'}}>
            hellllloooooooooooooooooooooooooooooooooooooooooooooooooooooo 2
          </Col>
        </Row>

    </div>
  );
}

export default Home;
