import React from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const Map = ({ map, setMap, center, zoom}) => {
  const ref = React.useRef(null);
React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {
        center: center,
        zoom: zoom,
        mapTypeControl: false,
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
      }));
  }
}, [ref,center,zoom, map]);
  

  useDeepCompareEffect(() => {
    if (map) {
      console.log(1)
      map.setOptions(center,zoom);
    }
  }, [map, center,zoom]);

  return <div ref={ref} id="map" style={{ height: '100%', width: '100%' }} />;
}

export default Map


