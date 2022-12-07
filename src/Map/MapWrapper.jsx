import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useRef, useEffect } from "react";
import { getCoordinates } from "./Geocode";
import ONGsMap from "./Map";
import ONGPoint from "./ONGPoint";

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
    const [map,setMap] = useState(null);
    const handleMapChanged = (newMap)=>{
      setMap(newMap);
    }



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
        {isLoading? "loading" : (<ONGsMap center={center} zoom={zoom} suppressMarkers={true} map={map} onMapChanged={handleMapChanged}>
          <ONGPoint position={defaultCenter} map={map} />
        </ONGsMap>)}
        
      </Wrapper>
  
    );
  }
  
  
  
  
  export default MapWrapper;