import { Container, Button } from 'react-bootstrap'
import '../css/Hero.css'

function Hero() {
  return (
    <div className="hero-section">
      <Container className="text-center">
        <h1 className="hero-title">FIND YOUR PERFECT RIDE</h1>
        <p className="hero-subtitle">
          Buy, sell, or rent vehicles with ease and confidence
        </p>
        <div className="hero-buttons">
          <Button variant="primary" size="lg" className="me-3">
            Browse Cars
          </Button>
          <Button variant="outline-dark" size="lg">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Hero