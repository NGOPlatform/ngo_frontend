import React from "react";
import {  useRef, useEffect } from "react";


const ONGsMap = ({ center, zoom,map, onMapChanged, children }) => {
  const ref = useRef();
  useEffect(() => {

    const map = new window.google.maps.Map(ref.current, {
      center: center,
      zoom: zoom,
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

    onMapChanged(map);
  },[center]);
        
        return <>
        <div ref={ref} id="map" style={{ height: '100%', width: '100%' }} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // set the map prop on the child component
            // @ts-ignore
            return React.cloneElement(child, { map });
          }
        })}
      </>
}

export default ONGsMap;