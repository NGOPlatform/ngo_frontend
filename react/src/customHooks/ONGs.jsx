import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIUrls } from '../Globals';
export function useONGs() {
  const size = 100;
  const [data, setData] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    numberOfONGs: 3,
    city: '',
    county: 'Alba',
    needs: '',
    start: 0
});

  const [collectionCount, setCollectionCount] = useState(100)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getONGs = async () =>{
      // console.log(searchCriteria.needs)
      const url =  APIUrls.listONG;
      const params = {
        size: size,
        skip: searchCriteria.start + 1,
        city: searchCriteria.city,
        county: searchCriteria.county,
        tag: searchCriteria.needs && searchCriteria.needs.length>0 ? searchCriteria.needs.join(",") : ""
      }
      axios.get(url, { params: params })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

      const url2 = APIUrls.listONGSize;
      const params2 = {
        city: searchCriteria.city,
        county: searchCriteria.county,
        tag: searchCriteria.needs && searchCriteria.needs.length>0 ? searchCriteria.needs.join(",") : ""
      }
      axios.get(url2, { params: params2 })
      .then((res) => {
        setCollectionCount(res.data.size);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getONGs();
  }, [searchCriteria.city, searchCriteria.county, searchCriteria.needs]);


 
  return {
    data: data,
    collectionCount: collectionCount,
    searchCriteria,
    setSearchCriteria,
    loading: loading,
    error: error

  };
} 
