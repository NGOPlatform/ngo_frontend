import { useState,useEffect } from "react";
import axios from "axios";
const UseLocationAutocomplete = () => {
  const [judete, setJudete] = useState([]);
  const [currentJudet, setCurrentJudet] = useState('Alba');
  const [localitati, setLocalitati] = useState([]);
  const localitatiJson = [];
  const getJudete = async () => {
    try {
      const url = `http://localhost:3001/judete`
      const { data } = await axios.get(url);
      setJudete(data);
    } catch (error) {
      // console.error(error)
      console.error('error in useLocationAutocomplete line 13')
    }
  };

  const getLocalitati = async () =>{
    try {
      const url = `http://localhost:3001/localitati`
      const { data } = await axios.get(url, {params: {judet: currentJudet, size: 100}});
      setLocalitati(data);
    } catch (error) {
      console.log(error)
      console.error('error in useLocationAutocomplete line 24')
    }
  }
  useEffect(()=>{ getJudete();getLocalitati()}, [])

  useEffect(()=>{
    getLocalitati(currentJudet);
  },[currentJudet])

    return ( {
      judete, localitati, setCurrentJudet
    } );
}

export default UseLocationAutocomplete;


