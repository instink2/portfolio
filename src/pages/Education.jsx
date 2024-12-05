import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure bootstrap styles are included

function Education() {
  return (
    <Container className="my-5">
      {/* Title and Subtitle Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000' }}>My Education Journey</h1>
          <p style={{ fontSize: '1.25rem', color: '#000' }}>
            Here's a look at my educational background and the institutions that have helped shape my skills and passion for technology.
          </p>
        </Col>
      </Row>

      {/* Education Cards Section */}
      <Row className="my-4">
        {/* Bula Central School */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipMMjUK5FRN5mH_iRCcbVBN894fyqaUnTYtL6ZSj=s680-w680-h510" />
            <Card.Body>
              <Card.Title>Bula Central School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2009 - 2015</Card.Subtitle>
              <Card.Text>
                I graduated from Bula Central School in 2015. During my time there, I explored my early interests and developed a curiosity for technology.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Bula National High School */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipOUxfVpuezmoxabPOYZJYzd3eXKfy6X7x4ERE8B=s680-w680-h510" />
            <Card.Body>
              <Card.Title>Bula National High School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Junior High: 2015 - 2019 | Senior High: 2019 - 2021</Card.Subtitle>
              <Card.Text>
                During my time in high school, I developed an interest in technology and computer science, setting the foundation for my future studies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Naga College Foundation Inc. */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://www.pacu.org.ph/wordpress/wp-content/uploads/2017/05/Naga-College-Foundation.jpg" />
            <Card.Body>
              <Card.Title>Naga College Foundation Inc.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Pursuing Bachelor of Information Systems (BSIS)</Card.Subtitle>
              <Card.Text>
                I am currently pursuing my Bachelor's degree in Information Systems. I am eager to expand my knowledge and enhance my skills in technology and data management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
