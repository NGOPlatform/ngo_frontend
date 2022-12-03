import React from "react";
import { useState, useRef, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { getCoordinates } from "./Geocode";
const Map = ({ ...options }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center: options.center,
      zoom: options.zoom,
      mapTypeControl: false,
    });
    map.setOptions({
      styles: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
      ]
    });
  });
  return <div ref={ref} id="map" style={{ height: '100%', width: '100%' }} />;
}

const MapWrapper = ({ markerAddresses, city, county }) => {
  const defaultCenter = {
    lat: 45.747302907012546,
    lng: 21.231593740319173
  }
  const [center, setCenter] = useState(defaultCenter);
  const zoom = 14;
  const [isLoading, setIsLoading] = useState(false);
  const cityRef =  useRef(city);
  const countyRef =  useRef(county);

  useEffect(() => {
    cityRef.current = city;
    countyRef.current = county;
    const getCenter = async () => {
      const address = cityRef.current + ' ' + countyRef.current;
      let newCenter = await getCoordinates(address);
      // console.log(address)
      if(newCenter.lat === 0 && newCenter.lng === 0)
        newCenter = defaultCenter;  
      setCenter(newCenter);
      setIsLoading(false);

    }
    if ((city || county) && !isLoading){
      setIsLoading(true);
      setTimeout(()=>{
        getCenter();
        setIsLoading(false);
      },3000)
    }
  }, [city, county])


  // const [Markers, setMarkers] = useState([]);
  // useEffect(() => {
  //   const getMarkers = async () => {
  //     const newAddresses = await Promise.all(markerAddresses.map( (el)=>  getCoordinates(el) ))
  //     setMarkers(newAddresses)
  //   };
  //   // getMarkers();
  // }, [markerAddresses])

  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API} >
      {isLoading? "loading" : <Map center={center} zoom={zoom} suppressMarkers={true}></Map>}
      
    </Wrapper>

  );
}




export default MapWrapper;