import { loremIpsum } from 'react-lorem-ipsum';
import { useState, useEffect } from 'react';
const MesajGeneric = "A aparut un ong nou";
export function UseInboxData(subsKeyWords){
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //search for keywords in ongs after specified date
        //just parse it
        // haine copii 1-12-2022
        console.log(loremIpsum())
        const fooInboxData = [
            {
            "title": MesajGeneric,
            "shortDesc": loremIpsum()[0].substr(0,120),
            "ongUrl":""
            },
            {
            "title": MesajGeneric,
            "shortDesc": loremIpsum()[0].substr(0,120),
            "ongUrl":""
            },
            {
            "title": MesajGeneric,
            "shortDesc": loremIpsum()[0].substr(0,120),
            "ongUrl":""
            }
        ]

        
        setData(fooInboxData);
    }, []);
    return {
        data,
        loading
    };

}