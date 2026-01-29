
import { useState } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../supabase/auth'
import './Auth.css'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await loginUser(formData.email, formData.password)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Failed to log in')
    } finally {
      setLoading(false)
    }
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
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <div className="input-with-icon">
                  <i className="bi bi-person-fill"></i>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="input-with-icon">
                  <i className="bi bi-lock-fill"></i>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Insert your password here"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 auth-button"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
            </Form>

            <div className="auth-footer">
              <p>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Login