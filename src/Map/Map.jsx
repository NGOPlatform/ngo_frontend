import React from "react";
import { useState, useRef, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
const defaultProps = {
  center: {
    lat: 45.747302907012546,
    lng: 21.231593740319173
  },
  zoom: 14
};

const Map = ({ ...options }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center: options.center,
      zoom: options.zoom,
      mapTypeControl: false,
    });
    map.setOptions({ styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }], 
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ] });
  });
  return <div ref={ref} id="map" style={{height:'100%', width:'100%'}}/>;
}

const SampleMap = ({ markerAddresses }) => {

  // const [Markers, setMarkers] = useState([]);
  // useEffect(() => {
  //   const getMarkers = async () => {
  //     const newAddresses = await Promise.all(markerAddresses.map( (el)=>  getCoordinates(el) ))
  //     setMarkers(newAddresses)
  //   };
  //   // getMarkers();
  // }, [markerAddresses])

  return (
<></>
    // <Wrapper apiKey={process.env.REACT_APP_MAPS_API} >
    //   <Map center={defaultProps.center} zoom={defaultProps.zoom} suppressMarkers={true}>
    //   </Map>
    // </Wrapper>
    
  );
}




export default SampleMap;