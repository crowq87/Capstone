import { Card, Button, Badge } from 'react-bootstrap'

function Vehicle({ vehicle }) {
  return (
    <Card style={{ width: '100%', height: '450px', margin: '10px', position: 'relative' }}>
      <div style={{ position: 'relative', height: '200px' }}>
        <Card.Img 
          variant="top" 
          src={vehicle.image} 
          alt={vehicle.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Badge 
          bg={vehicle.type === 'rent' ? 'warning' : 'success'} 
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            padding: '8px 15px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            borderRadius: '20px'
          }}
        >
          {vehicle.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
        </Badge>
      </div>
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title style={{ height: '50px', overflow: 'hidden' }}>
          {vehicle.name}
        </Card.Title>
        <Card.Text style={{ flex: 1 }}>
          <strong>Price:</strong> ₱{vehicle.price.toLocaleString()}<br/>
          <strong>Location:</strong> {vehicle.location}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  )
}

export default Vehicle