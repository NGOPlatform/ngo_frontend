import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIUrls } from '../Globals';
  const ONGsFooData = {
    "ONGs":
    [
    {
        "id":1,
        "name": "FEDERATIA CARITAS A DIACEZEI TIMISOARA",
        "regNumber": "13/C/1993",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"str. Matei Corvin, nr. 2",
        "description":"caritate crestina de ajutorarea tuturor celor dezavantajati de soarta"
    },
    {
        "id":2,
        "name": "FILIALA FUNDATIEI UMANITARE \" PARADISUL COPIILOR\"",
        "regNumber": "175/B/2003",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"STR. LIVIU REBREANU NR. 8",
        "description":"De a sustine activiotatile umanitare a ajutorare si binefacere pentru cazurile sociale majore."

    },
    {
        "id":3,
        "name": "FUNDATIA ACADEMICA CULTURALA TIMISOARA",
        "regNumber": "19/B/2021",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"B-DUL LIVIU REBREANU, NR. 81A",
        "description":"Să stimuleze şi să promoveze valorile culturale locale, naţionale şi universale; să stimuleze şi să sprijine elevii, studenţii şi persoane cu aptitudini deosebite pentru desfăşurarea şi perfecţionarea studiilor; sprijinirea materială a persoanelor defavorizate şi aflate în imposibilitate de a se întreţine cu prioritate persoanele care au activat sau activează încă în domeniul academic-cultural; să cultive sentimentul de întrajutorare reciprocă a membrilor comunităţii a spiritului de caritate şi organizarea de acţiuni de caritate şi învăţătură academică, culturală, spirituală şi creştină."
    },
    {
        "id":4,
        "name": "FUNDATIA CASA COPIILOR FRANCO-ROMANA",
        "regNumber": "3820/B/2001",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"STR.PREYER NR.13",
        "description":"REGENERAREA SI INTRAJUTORAREA SPIRITUALA PE BAZA IDEII EVANGHELICE A CELOR DE NEVOI DEFINITI IN PREZENTUL STATUT CA PERSOANE FIZICE SI JURIDICE INDIFERENT DE CONVINGERI, SEX, VARSTA, APARENTE RELIGIOASE ETC."
    },
    {
        "id":5,
        "name": "FUNDATIA CASA SPERANTEI TIMISOARA",
        "regNumber": "340/B/1995",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"TIMISOARA, HERASTRAU NR.14",
        "description":"-ajutorarea nemijlocita a celor nevoiasi sub forma de donatii, de ajutorare a celor bolnavi."
    },
    {
        "id":6,
        "name": "FUNDATIA CUPOLA CREDINTA, CARITATE, CULTURA",
        "regNumber": "3106/B/1993",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"STR.ZUGRAV NEDELCU, NR.11, AP.5",
        "description":"APARAREA CREDINTEI CRESTINE, AJUTORAREA CELOR IN NEVOIE, SARACI, HANDICAPATI, BOLNAVI, LIPSITI DE INGRIJIRE ETC."
    },
    {
        "id":7,
        "name": "FUNDATIA DE INTRAJUTORARE GLOBUS IULIU",
        "regNumber": "16036/B/2004",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"STR.SPL. N.TITULESCU, NR.11, SC.A, AP.17",
        "description":"REALIZAREA NEVOILOR FIZICE, SPIRITUALE ALE MEMBRILOR SI A CELOR CARE AU NEVOIE DE AJUTOR"
    },
    {
        "id":8,
        "name": "FUNDATIA DE SCLEROZA MULTIPLA TIMIS",
        "regNumber": "13268/B/2010",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"STR.TOLSTOI, NR.13, AP.4",
        "description":"TIMISOARA, CABINETUL DE NEUROLOGIE DIN SPITALUL countyEAN TIMISOARA	-este lupta impotriva sclerozei multiple si a bolilor asociate, ajutorarea bolnavilor, sprijinul cercetarilor stiintifice si aspecialistilor din domeniu."
    },
    {
        "id":9,
        "name": "FUNDATIA ELISABETA",
        "regNumber": "448/B/2000",
        "county":"TIMIS",
        "city":"Timisoara",
        "address":"STR. CALEA MARTIRILOR NR. 40, AP. 6",
        "description":"AJUTORAREA CELOR NEVOIASI CU MEDICAMENTE, ALIMENTE, IMBRACAMINTE SI ALTE BUNURI NECESARE EXISTENTEI."
    }
]
, collectionCount: 9
}

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

  const getONGs = async () =>{
    try {
      // console.log(searchCriteria.needs)
      const url =  APIUrls.listONG;
      const params = {
        size: size,
        skip: searchCriteria.start + 1,
        city: searchCriteria.city,
        county: searchCriteria.county,
        tag: searchCriteria.needs && searchCriteria.needs.length>0 ? searchCriteria.needs.join(",") : ""
      }
      const { data } = await axios.get(url, { params: params });
      const url2 = APIUrls.listONGSize;
      const params2 = {
        city: searchCriteria.city,
        county: searchCriteria.county,
        tag: searchCriteria.needs && searchCriteria.needs.length>0 ? searchCriteria.needs.join(",") : ""
      }
      const { data:data2 } = await axios.get(url2, { params: params2 });
      setData(data);
      // console.log(data2.size);
      setCollectionCount(data2.size);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error)
      console.error('error in ONGs line 120')
    }
  }

  useEffect(() => {
    getONGs();
  }, [searchCriteria.city, searchCriteria.county, searchCriteria.needs]);


 
  return {
    data: data,
    collectionCount: collectionCount,
    searchCriteria,
    setSearchCriteria,
    loading: loading

  };
} 

export {ONGsFooData};