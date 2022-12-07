import React from "react"

const ONGPoint = (options) => {
    // console.log(3213);
    const [marker, setMarker] = React.useState();
    React.useEffect(() => {
        
      if (!marker) {
        setMarker(new window.google.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [ options]);
    React.useEffect(() => {
        
      if (marker) {
           // marker.setOptions(options);
           marker.setPosition(new window.google.maps.LatLng(options.position.lat, options.position.lng));
           marker.setMap(options.map);
      }
    }, [marker, options]);
    return null;
  };
  
  export default ONGPoint;