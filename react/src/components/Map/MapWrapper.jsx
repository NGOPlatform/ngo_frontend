import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useRef, useEffect } from "react";
import Loading from "../Shared/Loading";
import { getCoordinates } from "./Geocode";
import ONGsMap from "./Map";
import ONGPoint from "./ONGPoint";

const MapWrapper = ({ markerAddresses, city, county }) => {
    const defaultCenter = {
      lat: 45.747302907012546,
      lng: 21.231593740319173
    }

    const outOfView = {
      lat: 0,
      lng: 0
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
  
  
    const [Markers, setMarkers] = useState([]);
    useEffect(() => {
      const getMarkers = async () => {
        Promise.all(markerAddresses.map( (el)=>  getCoordinates(el) )).then((values)=>{
          setMarkers(values);
        // console.log(values);
        })
      };
      getMarkers();
    }, [markerAddresses])
  
    return (
      <Wrapper apiKey={process.env.REACT_APP_MAPS_API} >
        {isLoading? <Loading/> : (<ONGsMap center={center} zoom={zoom} suppressMarkers={true}>
          {Markers.map((el,i)=>
            <ONGPoint key={"OngPoint_" + i} position={el ?? outOfView} />
          )}
        </ONGsMap>)}
      </Wrapper>
  
    );
  }
  
  
  
  
  export default MapWrapper;