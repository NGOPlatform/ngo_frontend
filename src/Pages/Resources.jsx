import { Typography } from "@mui/material"
import { useState, useEffect } from "react";

const Resources = () => {
    return (
        <>
            <ResourceCategory category={"undraw"} r={require.context("../wwwroot/assets", false, /\.(png|jpe?g|svg)$/)} />
            <ResourceCategory category={"corporate ilustration pack"} r={require.context("../wwwroot/assets/corporate ilustration pack", false, /\.(png|jpe?g|svg)$/)} />
            <ResourceCategory category={"cute animals"} r={require.context("../wwwroot/assets/cute animals", false, /\.(png|jpe?g|svg)$/)} />
            <ResourceCategory category={"flat web ilustration pack"} r={require.context("../wwwroot/assets/flat web ilustration pack", false, /\.(png|jpe?g|svg)$/)} />
            <ResourceCategory category={"media icons"} r={require.context("../wwwroot/assets/media icons", false, /\.(png|jpe?g|svg)$/)} />
        </>
    );
}

const ResourceCategory = ({ r, category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const importAll = (r) => {
            let newImages = { ...images };
            newImages = [];
            r.keys().forEach((item, index) => {

                console.log(item)
                newImages.push({ name: item.replace("./", ""), data: r(item) });
            });
            setImages(newImages)
        }
        console.log((category == "undraw" ? "../wwwroot/assets" : `../wwwroot/assets/${category}`));
        importAll(r);
    }, [])

    return (<>
        <Typography variant="h3">{category}</Typography>
        <div style={{display:'flex', gap:'20px',flexWrap:'wrap'}}>
            {images.map((el, i) => (
                <>
                    <div>
                        <img src={el.data} key={"images_" + category + "_" + i} height={125}></img>
                        <p>{el.name}</p>
                    </div>
                
        </>
        ))}
        </div>
    </>
    )
}

export default Resources;