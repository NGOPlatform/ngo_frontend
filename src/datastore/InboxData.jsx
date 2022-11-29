import { loremIpsum } from 'react-lorem-ipsum';

const MesajGeneric = "A aparut un ong nou";
export function UseInboxData(){
    return [
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
}