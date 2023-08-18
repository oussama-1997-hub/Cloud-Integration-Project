import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.42216,
  lng: -122.08427,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCyyst9wKIHSHHFxThhEP1abEH-0hsMECU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
