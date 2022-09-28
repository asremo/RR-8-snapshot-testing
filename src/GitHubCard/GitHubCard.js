import React from 'react'
import Card from 'react-bootstrap/Card';

import Woody from './woody.jpg'


function GitHubCard() {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Woody} />
      {/* Pic src; https://unsplash.com/photos/VGR_ReUCqNw */}
      <Card.Body>
        <Card.Title>Woody</Card.Title>
        <Card.Text>
          I am Woody from the Toy Story movies.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;