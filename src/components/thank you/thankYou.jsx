import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ThankYouPage = () => {
  // Get the window width and height for confetti
  const { width, height } = useWindowSize();

  return (
    <div style={{ backgroundColor: '#202068', minHeight: '100vh', position: 'relative' }}>
      {/* Confetti Effect */}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        colors={['#FF0000', '#FFFFFF', '#000080']} // Red, white, and blue
      />

      {/* Message Content */}
      <Container className="d-flex justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col>
            <h1 style={{ color: 'white', fontSize: '3rem' }}>Thank you for joining us</h1>
            <p style={{ color: '#d3d3d3', fontSize: '1.2rem' }}>your data has been submitted successfully</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThankYouPage;
