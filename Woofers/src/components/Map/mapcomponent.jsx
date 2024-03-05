import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function MapComponent({ latitude, longitude }) {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default MapComponent;