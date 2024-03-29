
const parseData = ()=>{
    const judete = judeteJson;
    const locations = localitatiJson;
    const getJudet = (name) => {
      if (name == "SATU-MARE")
        name = "Satu Mare";
      for (let i = 0; i < judete.length; i++)
        if (judete[i].name.localeCompare(name, undefined, {
            sensitivity: 'base'
          }) === 0)
          return judete[i];
    }
    
    // console.log(el);
    for (let [key, value] of Object.entries(locations)) {
      //   console.log(key)
      let el = getJudet(key);
      let sumLat = value.reduce((acc, loc) => acc + parseInt(loc.lat), 0);
      let sumLong = value.reduce((acc, loc) => acc + parseInt(loc.long), 0);
      el.lat = sumLat / value.length;
      el.long = sumLong / value.length; 
    }
    judete = judete.map(el=> {return { ...el, label: el.name}});
    return judete;
    
    
    
  }

exports.parseData = parseData;