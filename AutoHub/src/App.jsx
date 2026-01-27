import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from'react-router-dom';
import Navbar from './Navbar';
import Vehicle from './components/Vehicle'
import { Container, Row, Col } from 'react-bootstrap'
import VehicleCard from './components/Vehicle'
import './App.css'
import './css/Vehicle.css'

function App() {

  const vehicles = [
    {
      id: 1,
      name: 'Toyota Vios 2020',
      price: 650000,
      location: 'Pinamungajan',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400'
    },
    {
      id: 2,
      name: 'Honda City 2021',
      price: 750000,
      location: 'Toledo City',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400'
    },
    {
      id: 3,
      name: 'Mitsubishi Mirage 2019',
      price: 450000,
      location: 'Pinamungajan',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400'
    }
  ]

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">AutoHub - Available Vehicles</h1>
      <Row>
        {vehicles.map(vehicle => (
          <Col key={vehicle.id} md={4} sm={6} xs={12}>
            <VehicleCard vehicle={vehicle} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App