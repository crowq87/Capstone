import { Card, Button } from 'react-bootstrap'

function Vehicle({ vehicle }) {
  return (
    <Card className="vehicle-card">
      <Card.Img 
        variant="top" 
        src={vehicle.image} 
        alt={vehicle.name}
        className="vehicle-card-img"
      />
      <Card.Body className="vehicle-card-body">
        <Card.Title className="vehicle-card-title">
          {vehicle.name}
        </Card.Title>
        <Card.Text className="vehicle-card-text">
          <strong>Price:</strong> ₱{vehicle.price.toLocaleString()}<br/>
          <strong>Location:</strong> {vehicle.location}
        </Card.Text>
        <Button variant="primary" className="mt-auto">View Details</Button>
      </Card.Body>
    </Card>
  )
}

export default Vehicle