import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 45.747302907012546,
      lng: 21.231593740319173
    },
    zoom: 14
  };
  return (
    // Important! Always set the container height explicitly
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
  );
}
export default SimpleMap ;