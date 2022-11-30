import React from "react";
import GoogleMapReact from 'google-map-react';
import { getCoordinates } from "./Geocode";
import { useEffect } from "react";
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Await } from "react-router";
const AnyReactComponent = ({ text }) => 

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
      console.log(markerAddresses)
      const tempaddrs = [ "str. Matei Corvin, nr. 2", "STR. LIVIU REBREANU NR. 8", "B-DUL LIVIU REBREANU, NR. 81A", "STR.PREYER NR.13", "TIMISOARA, HERASTRAU NR.14", "STR.ZUGRAV NEDELCU, NR.11, AP.5", "STR.SPL. N.TITULESCU, NR.11, SC.A, AP.17", "STR.TOLSTOI, NR.13, AP.4", "STR. CALEA MARTIRILOR NR. 40, AP. 6" ];
      // const newAddresses =[];
      // for(let i=0;i<=tempaddrs.length;i++){
      //   const address =await getCoordinates(tempaddrs[i]);
      //   newAddresses.push(address)
      // }

      const newAddresses = await Promise.all(tempaddrs.map( (el)=>  getCoordinates(el) ))
      setMarkers(newAddresses)
    };
    getMarkers();

  }, [])

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
        console.log(el);

        return (<AnyReactComponent
          key={el.lat + ' ' + el.lng }
          lat={el.lat}
          lng={el.lng}
          text="My Marker"
        />
        );
      })}
    </GoogleMapReact>
  );
}
export default Map;