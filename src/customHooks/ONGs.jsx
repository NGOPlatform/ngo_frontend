import { useState, useEffect } from 'react';
import axios from 'axios';


export function useONGs(searchCriteria) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8081/list`
        const { data: response } = await axios.get(url, { params: { size: searchCriteria.numberOfONGs, skip: searchCriteria.start, city: searchCriteria.city, county: searchCriteria.county, description: searchCriteria.description } });
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };
    fetchData();

  }, [searchCriteria]);

  return {
    data,
    setData,
    loading,
  };

  // return [
  //     {
  //         "name": "FEDERATIA CARITAS A DIACEZEI TIMISOARA",
  //         "regNumber": "13/C/1993",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"str. Matei Corvin, nr. 2",
  //         "description":"caritate crestina de ajutorarea tuturor celor dezavantajati de soarta"
  //     },
  //     {
  //         "name": "FILIALA FUNDATIEI UMANITARE \" PARADISUL COPIILOR\"",
  //         "regNumber": "175/B/2003",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"STR. LIVIU REBREANU NR. 8",
  //         "description":"De a sustine activiotatile umanitare a ajutorare si binefacere pentru cazurile sociale majore."

  //     },
  //     {
  //         "name": "FUNDATIA ACADEMICA CULTURALA TIMISOARA",
  //         "regNumber": "19/B/2021",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"B-DUL LIVIU REBREANU, NR. 81A",
  //         "description":"Să stimuleze şi să promoveze valorile culturale locale, naţionale şi universale; să stimuleze şi să sprijine elevii, studenţii şi persoane cu aptitudini deosebite pentru desfăşurarea şi perfecţionarea studiilor; sprijinirea materială a persoanelor defavorizate şi aflate în imposibilitate de a se întreţine cu prioritate persoanele care au activat sau activează încă în domeniul academic-cultural; să cultive sentimentul de întrajutorare reciprocă a membrilor comunităţii a spiritului de caritate şi organizarea de acţiuni de caritate şi învăţătură academică, culturală, spirituală şi creştină."
  //     },
  //     {
  //         "name": "FUNDATIA CASA COPIILOR FRANCO-ROMANA",
  //         "regNumber": "3820/B/2001",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"STR.PREYER NR.13",
  //         "description":"REGENERAREA SI INTRAJUTORAREA SPIRITUALA PE BAZA IDEII EVANGHELICE A CELOR DE NEVOI DEFINITI IN PREZENTUL STATUT CA PERSOANE FIZICE SI JURIDICE INDIFERENT DE CONVINGERI, SEX, VARSTA, APARENTE RELIGIOASE ETC."
  //     },
  //     {
  //         "name": "FUNDATIA CASA SPERANTEI TIMISOARA",
  //         "regNumber": "340/B/1995",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"TIMISOARA, HERASTRAU NR.14",
  //         "description":"-ajutorarea nemijlocita a celor nevoiasi sub forma de donatii, de ajutorare a celor bolnavi."
  //     },
  //     {
  //         "name": "FUNDATIA CUPOLA CREDINTA, CARITATE, CULTURA",
  //         "regNumber": "3106/B/1993",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"STR.ZUGRAV NEDELCU, NR.11, AP.5",
  //         "description":"APARAREA CREDINTEI CRESTINE, AJUTORAREA CELOR IN NEVOIE, SARACI, HANDICAPATI, BOLNAVI, LIPSITI DE INGRIJIRE ETC."

  //     },
  //     {
  //         "name": "FUNDATIA DE INTRAJUTORARE GLOBUS IULIU",
  //         "regNumber": "16036/B/2004",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"STR.SPL. N.TITULESCU, NR.11, SC.A, AP.17",
  //         "description":"REALIZAREA NEVOILOR FIZICE, SPIRITUALE ALE MEMBRILOR SI A CELOR CARE AU NEVOIE DE AJUTOR"
  //     },
  //     {
  //         "name": "FUNDATIA DE SCLEROZA MULTIPLA TIMIS",
  //         "regNumber": "13268/B/2010",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"STR.TOLSTOI, NR.13, AP.4",
  //         "description":"TIMISOARA, CABINETUL DE NEUROLOGIE DIN SPITALUL countyEAN TIMISOARA	-este lupta impotriva sclerozei multiple si a bolilor asociate, ajutorarea bolnavilor, sprijinul cercetarilor stiintifice si aspecialistilor din domeniu."
  //     },
  //     {
  //         "name": "FUNDATIA ELISABETA",
  //         "regNumber": "448/B/2000",
  //         "county":"TIMIS",
  //         "city":"Timisoara",
  //         "address":"STR. CALEA MARTIRILOR NR. 40, AP. 6",
  //         "description":"AJUTORAREA CELOR NEVOIASI CU MEDICAMENTE, ALIMENTE, IMBRACAMINTE SI ALTE BUNURI NECESARE EXISTENTEI."
  //     }
  // ]
} 