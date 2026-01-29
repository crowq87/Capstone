
import { useState, useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../supabase/auth'
import './Auth.css'

function RegisterVerify() {
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', ''])
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const savedData = sessionStorage.getItem('completeRegisterData')
    if (!savedData) {
      navigate('/register')
      return
    }
    const parsed = JSON.parse(savedData)
    setPhone(parsed.countryCode + parsed.phone)
  }, [navigate])

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const verificationCode = code.join('')
    
    if (verificationCode.length !== 4) {
      setError('Please enter the 4-digit code')
      return
    }

    setLoading(true)
    setError('')

    try {

      
      const savedData = JSON.parse(sessionStorage.getItem('completeRegisterData'))
      
      await registerUser(savedData.email, savedData.password, {
        name: `${savedData.firstName} ${savedData.lastName}`,
        phone: savedData.countryCode + savedData.phone,
        location: 'Pinamungajan' 
      })


      sessionStorage.removeItem('registerData')
      sessionStorage.removeItem('completeRegisterData')


      navigate('/')
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = () => {
    alert('Verification code resent!')
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-header">
        <button onClick={() => navigate('/register/info')} className="back-button">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h6>Authentication</h6>
      </div>

      <Container className="auth-container">
        <Card className="auth-card">
          <Card.Body>
            <div className="verify-header">
              <h5>Input Verification Code</h5>
              <p>We have sent code to your phone number</p>
              <p className="phone-number">{phone}</p>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="verification-code-inputs">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="code-input"
                  />
                ))}
              </div>

              <div className="resend-section">
                <p>
                  Didn't receive code? <button type="button" onClick={handleResend} className="resend-link">Resend</button>
                </p>
              </div>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 auth-button"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Submit'}
              </Button>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default RegisterVerify