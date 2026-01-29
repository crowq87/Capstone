
import { useState, useEffect } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function RegisterInfo() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    email: ''
  })

  useEffect(() => {
    const savedData = sessionStorage.getItem('registerData')
    if (!savedData) {
      navigate('/register')
      return
    }
    const parsed = JSON.parse(savedData)
    setFormData(prev => ({ ...prev, email: parsed.email }))
  }, [navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const previousData = JSON.parse(sessionStorage.getItem('registerData'))
    const completeData = { ...previousData, ...formData }
    sessionStorage.setItem('completeRegisterData', JSON.stringify(completeData))
    navigate('/register/verify')
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-header">
        <button onClick={() => navigate('/register')} className="back-button">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h6>Information</h6>
      </div>

      <Container className="auth-container">
        <Card className="auth-card">
          <Card.Body>
            <div className="info-header">
              <h5>Fill your information below</h5>
              <p>Before you use this at home, please input your information first.</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Ken"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Ishmoel"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <Form.Text className="text-muted">
                  Not have last name
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  disabled
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 auth-button"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default RegisterInfo