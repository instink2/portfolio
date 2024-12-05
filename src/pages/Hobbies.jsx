import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap'; // Import React Bootstrap components
import '../about.css'; // Assuming your custom styles are in this file

function Hobbies() {
  return (
    <Container className="my-5">
      {/* Title Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000' }}>My Hobbies</h1>
          <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
            Here are some of my favorite activities that I enjoy during my free time:
          </p>
        </Col>
      </Row>

      {/* Hobbies Cards Section */}
      <Row className="my-4">
        {/* Singing Hobby Card */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src='https://images.unsplash.com/photo-1503499746616-a6d202989535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpbmdpbmd8ZW58MHx8MHx8fDA%3D' />
            <Card.Body>
              <Card.Title>Singing</Card.Title>
              <Card.Text>
                I enjoy singing as a form of self-expression and relaxation. Music has always been a big part of my life, and I love belting out tunes in my spare time.
              </Card.Text>
              <Badge bg="info">Hobby</Badge>
            </Card.Body>
          </Card>
        </Col>

        {/* Playing Football Hobby Card */}
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src='https://images.unsplash.com/photo-1603291697926-7e5822ed1ac5?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card.Body>
              <Card.Title>Playing Football</Card.Title>
              <Card.Text>
                Football is one of my favorite sports. I enjoy playing with friends and staying active through sports. It's a great way to bond and stay fit.
              </Card.Text>
              <Badge bg="success">Sport</Badge>
            </Card.Body>
          </Card>
        </Col>

        {/* Driving Hobby Card */}
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src='https://images.unsplash.com/photo-1501300140941-6c556d26c1b9?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card.Body>
              <Card.Title>Driving</Card.Title>
              <Card.Text>
                I find driving relaxing and enjoyable. It gives me the freedom to explore new places and take in the beautiful scenery.
              </Card.Text>
              <Badge bg="warning">Leisure</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hobbies;
