import { useState, useEffect } from 'react';
import {APIUrls} from "../Globals"
import axios from 'axios';
  const ONGFooData = {
        "id":1,
        "name": "FEDERATIA CARITAS A DIACEZEI TIMISOARA",
        "regNumber": "13/C/1993",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"str. Matei Corvin, nr. 2",
        "description":"caritate crestina de ajutorarea tuturor celor dezavantajati de soarta"
    }
export function UseGetOng() {

  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log(searchCriteria)
    const fetchData = async () => {
      try {

        const url = APIUrls.getONG
        const { data: response } = await axios.get(url, { params: { id:currentId} });
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };
    console.log(data)
    fetchData();
    // console.log({...ONGsFooData})
    // setData({...ONGFooData});
  }, [currentId]);

 
  return {
    data: data,
    setCurrentId: setCurrentId
  };
} 
