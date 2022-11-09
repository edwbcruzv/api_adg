import React from 'react'
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa2.css'


import {MarkerIcon} from './react-leaflet-icon.js';



const Mapa2 = () => {


  


  const zoom= 12
  const position = [51.505, -0.09]
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={MarkerIcon}>
        <Popup>
          Una Descripcion
        </Popup>
      </Marker>
      </MapContainer>
  )
}

export default Mapa2