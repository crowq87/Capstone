import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
      type: 'rent' 
    },
    {
      id: 2,
      name: 'Honda City 2021',
      price: 750000,
      location: 'Toledo City',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
      type: 'rent' 
    },
    {
      id: 3,
      name: 'Mitsubishi Mirage 2019',
      price: 450000,
      location: 'Pinamungajan',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
      type: 'sale' 
    }
  ]

  return (
    <>
      <Navbar /> 
      <div className="app-wrapper"> 
  
        <Hero />
        

        <Container className="my-5">
          <h2 className="text-center text-dark mb-4">Featured Vehicles</h2>
          <Row>
         
          {vehicles.map(vehicle => (
           <Col key={vehicle.id} md={4} sm={6} xs={12}>
          <Vehicle vehicle={vehicle} />
         </Col>
          ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App