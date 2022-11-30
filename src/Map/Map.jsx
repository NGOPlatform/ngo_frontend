import React from "react";
import GoogleMapReact from 'google-map-react';
import { getCoordinates } from "./Geocode";
import { useEffect } from "react";
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AnyReactComponent = ({  }) => 

  <div style={
    {
      height: '30px',
      width: '30px',
      borderRadius: '100%',
      backgroundColor: '#775ada',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold'
    }}><LocationOnIcon sx={{color:'white'}} /></div>;



const Map = ({ markerAddresses }) => {

  const [Markers, setMarkers] = useState([]);
  useEffect(() => {
    const getMarkers = async () => {
      const newAddresses = await Promise.all(markerAddresses.map( (el)=>  getCoordinates(el) ))
      setMarkers(newAddresses)
    };
    getMarkers();
  }, [markerAddresses])

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
      {Markers.map((el) => {
        return (<AnyReactComponent
          key={el.lat + ' ' + el.lng }
          lat={el.lat}
          lng={el.lng}
        />
        );
      })}
    </GoogleMapReact>
  );
}
export default Map;