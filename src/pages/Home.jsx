import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../home.css';  // Assuming you have a Home.css file for custom styles

function Home() {
  return (
    <div className="home-container">
      <h1 className='text-center' style={{fontSize: '50px'}}>My Website</h1>
      <p className='text-center' style={{ fontSize: '20px' }}>
        Discover my personal info, interests, contact info, and passions
      </p>
      
      {/* Card Section */}
      <Row className="mt-5">
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1540162875225-3f6b56d69fe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MTE0MjU3NTl8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Discover more about myself
              </Card.Text>
              {/* Link to About page */}
              <Link to="/about">
                <Button variant="danger">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <Card.Text>
                Feel free to reach out if you want to collaborate or chat about tech.
              </Card.Text>
              {/* Link to Contact page */}
              <Link to="/contact">
                <Button variant="danger">Get in Touch</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1495175448924-1d9a30c90a42?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>My Hobbies</Card.Title>
              <Card.Text>
                Discover about my personal interests
              </Card.Text>
              {/* Link to Hobbies page */}
              <Link to="/hobbies">
                <Button variant="danger">Explore My Personal Interest</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
