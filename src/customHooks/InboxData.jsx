import { loremIpsum } from 'react-lorem-ipsum';
import { useState, useEffect } from 'react';
const MesajGeneric = "A aparut un ong nou";
export function UseInboxData({subsKeyWords}){
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //search for keywords in ongs after specified date
        //just parse it
        // haine copii 1-12-2022

        const fooInboxData = [
            {
            "ongName": "Haine micuti",
            "title": MesajGeneric,
            "shortDesc": loremIpsum(),
            "message": ""
            },
            {
            "ongName": "",
            "title": MesajGeneric,
            "shortDesc": loremIpsum(),
            "message": ""
            },
            {
            "ongName": "",
            "title": MesajGeneric,
            "shortDesc": loremIpsum(),
            "message": ""
            }
        ]

        
        setData(fooInboxData);
    }, []);
    return {
        data,
        loading
    };

}