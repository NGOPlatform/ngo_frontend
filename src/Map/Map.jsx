import React from "react";
import {  useRef, useEffect } from "react";


const ONGsMap = ({ ...options }) => {
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

    options.onMapChanged(map);
  },[options.center]);
        
        return <div ref={ref} id="map" style={{ height: '100%', width: '100%' }} >  </div>;
}

export default ONGsMap;