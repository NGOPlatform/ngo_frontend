import axios from "axios";
import { useEffect, useState} from "react";
import { APIUrls } from "../Globals";
export function UseGetNouOngs() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () =>{
    const url = APIUrls.listONGNOU;
    const params = {
      size: 10
    }
    axios
      .get(url, { params: params })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  }

  useEffect(()=>{
    fetchData();
  },[])
  return [data,error,loading]
} 