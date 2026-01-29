// src/components/auth/Register.jsx
import { useState } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    countryCode: '+63'
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('registerData', JSON.stringify(formData))
    navigate('/register/info')
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-header">
        <i className="bi bi-car-front-fill"></i>
        <h4>AutoHub</h4>
      </div>

      <Container className="auth-container">
        <Card className="auth-card">
          <Card.Body>
            <div className="auth-logo">
              <i className="bi bi-car-front-fill"></i>
              <h5>AutoHub</h5>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              {/* Username/Email Field */}
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <div className="input-with-icon">
                  <i className="bi bi-person-fill"></i>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="test@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="input-with-icon">
                  <i className="bi bi-lock-fill"></i>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                  />
                </div>
              </Form.Group>

              {/* Phone Number Field */}
              <Form.Group className="mb-4">
                <Form.Label>Phone number</Form.Label>
                <div className="phone-input-group">
                  <Form.Select 
                    name="countryCode" 
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="country-code"
                  >
                    <option value="+63">+63</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </Form.Select>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 auth-button"
              >
                Create account
              </Button>
            </Form>

            <div className="auth-footer">
              <p>
                Already have an Account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Register