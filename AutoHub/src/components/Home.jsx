import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllVehicles } from '../supabase/services'
import { getCurrentUser, logoutUser } from '../supabase/auth'
import FeaturedCar from './FeaturedCar'
import Navbar from './Navbar'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    checkAuthAndLoadVehicles()
  }, [])

  const checkAuthAndLoadVehicles = async () => {
    try {
      const user = await getCurrentUser()
      if (!user) {
        navigate('/login', { replace: true })
        return
      }

      const data = await getAllVehicles()
      setVehicles(data || [])
    } catch (err) {
      console.error('Error loading vehicles:', err)
      setError('Failed to load vehicles. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await logoutUser()
      navigate('/login', { replace: true })
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="home-container">
          <div className="loading-spinner">
            <i className="bi bi-arrow-repeat" style={{ fontSize: '2rem', color: '#2d3e50' }}></i>
            <p>Loading cars...</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-header">
          <div className="home-header-top">
            <div>
              <h1 className="home-title">FEATURED CARS</h1>
              <p className="home-subtitle">Handpicked selections from your area.</p>
            </div>
            <button
              type="button"
              className="home-sign-out"
              onClick={handleSignOut}
              aria-label="Sign out"
            >
              <i className="bi bi-box-arrow-right" aria-hidden="true" />
              <span>Sign out</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="alert alert-warning" role="alert">
            {error}
          </div>
        )}

        {vehicles.length === 0 ? (
          <div className="empty-state">
            <i className="bi bi-car-front" style={{ fontSize: '3rem', color: '#bdc3c7', marginBottom: '1rem' }}></i>
            <p>No cars available at the moment.</p>
            <p className="text-muted">Check back later for new listings.</p>
          </div>
        ) : (
          <div className="cars-list">
            {vehicles.map((vehicle) => (
              <FeaturedCar key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Home
