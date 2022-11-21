import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 2
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={0}
          lng={0}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap ;