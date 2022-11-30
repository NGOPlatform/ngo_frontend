import Geocode from "react-geocode";



export function getCoordinates(address){
    Geocode.setApiKey(process.env.REACT_APP_MAPS_API);
Geocode.setLanguage("ro");
Geocode.setRegion("ro");

// set location_type filter . Its optional.
// google geocoder returns more than one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();
    return Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          return { lat, lng } ;
        },
        (error) => {
            console.log(error)
            return {lat:0, lng:0 }
        }
      );
}