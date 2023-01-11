import { Typography } from "@mui/material"
import { useState, useEffect } from "react";

const Resources = () => {
   const partialDataImages ={
    "undraw":{
    "rootPath":"../wwwroot/assets",
    "images":["undraw_appreciate_it_re_yc8h.svg"]
    },
    "corporate ilustration pack":{
        "rootPath":"../wwwroot/assets",
        "images":[]
        },
    "cute animals":{
        "rootPath":"../wwwroot/assets",
        "images":[]
        },
    "flat web ilustration pack":{
        "rootPath":"../wwwroot/assets",
        "images":[]
        },
    "media icons":{
        "rootPath":"../wwwroot/assets",
        "images":[]
        },
   }

   const [images, setImages] = useState(partialDataImages);
   function importAll(r) {
       let images = [];
        r.keys().forEach((item, index) => { 
           console.log(item);
           images.undraw.images.push((item + "").replace("./",""));
           // images[item.replace('./', '')] = r(item);
        });
        setImages(images)
      }
   
   useEffect(()=>{
       importAll(require.context('../wwwroot/assets', false, /\.(png|jpe?g|svg)$/));
   },[])
    
    return (  
        <>
        <Typography>undraw</Typography>
        {images.undraw.images.map(el => <img src={el} key={el}></img>)}

        <Typography>corporate ilustration pack</Typography>
        <Typography>cute animals</Typography>
        <Typography>flat web ilustration pack</Typography>
        <Typography>media icons</Typography>
        </>
    );
}
 
export default Resources;