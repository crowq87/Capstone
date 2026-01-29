
import { useNavigate } from 'react-router-dom'
import './FeaturedCar.css'

function FeaturedCar({ vehicle }) {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/vehicle/${vehicle.id}`)
  }

  return (
    <div className="featured-car-card">
      <div className="car-image-container">
        <img 
          src={vehicle.image_url || vehicle.image || 'https://via.placeholder.com/400x200?text=No+Image'} 
          alt={vehicle.name || 'Vehicle'}
          className="car-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200?text=No+Image'
          }}
        />
        <span className={`car-badge ${vehicle.type === 'rent' ? 'badge-rent' : 'badge-sale'}`}>
          {vehicle.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
        </span>
      </div>

      <div className="car-info">
        <div className="car-name-price">
          <div className="car-name">
            <h3>
              {vehicle.name || 
               (vehicle.make && vehicle.model ? `${vehicle.make} ${vehicle.model}` : null) || 
               vehicle.make || 
               vehicle.model || 
               'Car'}
            </h3>
            <p className="car-type">{vehicle.category || vehicle.model || 'Car'}</p>
          </div>
          <div className="car-price">
            <span className="price-amount">₱{typeof vehicle.price === 'number' ? vehicle.price.toLocaleString() : vehicle.price || '0'}</span>
            <span className="price-period">{vehicle.type === 'rent' ? 'per day' : vehicle.price_period || ''}</span>
          </div>
        </div>

        <div className="car-features">
          <div className="feature-item">
            <i className="bi bi-gear-fill"></i>
            <span>{vehicle.transmission || 'Automatic'}</span>
          </div>
          <div className="feature-item">
            <i className="bi bi-fuel-pump-fill"></i>
            <span>{vehicle.fuel || 'P8 SG'}</span>
          </div>
          <div className="feature-item">
            <i className="bi bi-fan"></i>
            <span>{vehicle.ac !== false && vehicle.air_conditioner !== false ? 'Air Conditioner' : 'No AC'}</span>
          </div>
        </div>


        <button className="view-details-btn" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default FeaturedCar