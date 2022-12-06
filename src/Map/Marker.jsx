export default Marker = (options) => {
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
    }, [marker]);
    React.useEffect(() => {
      
      if (marker) {
        // marker.setOptions(options);
        marker.setPosition(new window.google.maps.LatLng(options.position.lat, options.position.lng));
        marker.setMap(options.map);
      }
    }, [marker, options]);
    return null;
  };