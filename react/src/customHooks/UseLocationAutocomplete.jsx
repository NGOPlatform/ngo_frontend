import { useState,useEffect } from "react";
import axios from "axios";
const UseLocationAutocomplete = () => {
  const [judete, setJudete] = useState([]);
  const localitatiJson = [];
  useEffect(()=>{
    const fetchJudete = async () => {
      try {
        const url = `http://localhost:3000/judete`
        const { data: response } = await axios.get(url);
        return response;
      } catch (error) {
        console.error(error)
      }
    };
    fetchJudete().then((value)=>{setJudete(value)});

  },
  [])


  const [allLocalitati] = useState(Object.values(localitatiJson).flat().filter((value, index, self) =>
  index === self.findIndex((t) => (t.label === value.label))));
  const [currentJudet, setCurrentJudet] = useState('');
  const [localitati, setLocalitati] = useState([]);
  
  useEffect(()=>{
    const localitatiKey = Object.keys(localitatiJson).filter(el => el.includes(currentJudet.toUpperCase()))[0];
    if(localitatiKey == undefined)
      setLocalitati(allLocalitati);
    else setLocalitati( localitatiJson[localitatiKey]);
  },[currentJudet])

    return ( {
      judete, localitati,setCurrentJudet
    } );
}

export default UseLocationAutocomplete;


