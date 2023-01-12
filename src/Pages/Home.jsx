import { Directions } from "@mui/icons-material";
import {
    Button, Grid, Typography, Container, List,
    ListItem, ListItemIcon, ListItemText
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { grid } from "@mui/system";
import { Link } from "react-router-dom";
import image0 from "../wwwroot/assets/undraw_appreciation_ng5k.svg"
import image1 from "../wwwroot/assets/flat web ilustration pack/Currect location-60b6.svg"
import image2 from "../wwwroot/assets/flat web ilustration pack/Appreciation-60b6.svg"
import image3 from "../wwwroot/assets/flat web ilustration pack/Notifications-60b6.svg"
import image4 from "../wwwroot/assets/flat web ilustration pack/Reminders-60b6.svg"
import foxy from "../wwwroot/assets/cute animals/9029-4728.svg"
import image5 from '../wwwroot/assets/undraw_spread_love_re_v3cl.svg'

const PrimarybtnStyle = { borderRadius: 30, backgroundColor: '#6c63ff', padding: 10, color: 'white' };

const Home = () => {
    return (
        <>
            <FirstPanel />
            <SpaceDivider />
            <WhatIs />
            <SpaceDivider />
            <WhyONGFinder />
            <SpaceDivider />
        </>

    );
}


const FirstPanel = () => {
    return (
        <Grid container>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '20px' }}>
                <Typography variant="h4" >
                    Platforma ta pentru a iti ajuta comunitatea, prin intermediul <Typography variant="h4" nowrap>ONG-urilor</Typography>
                </Typography>
                <Link to="/map" style={PrimarybtnStyle}>Vezi harta</Link>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={image0} height="300" />
            </Grid>
        </Grid>
    )
}

const SpaceDivider = () => {
    return (
        <div style={{ height: '100px', width: '100%' }}></div>
    )
}

const WhatIs = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 3fr 4fr', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
                <WhatIsCard image={image1}
                    title={"Vizualizeaza interactiv ONG-urile"}
                    description={"Am luat din lista publica oferita de guvernul Romaniei ONG-urile ce activeaza" +
                        " la noi in tara si le-am expus printr-o harta interactiva pentru a iti fi mai usor sa gasesti " +
                        "ONG-urile ce se afla in apropierea ta"}
                    redirectBtn={<Link to="/map" style={PrimarybtnStyle}>Vezi harta</Link>}
                />
                <WhatIsCard
                    image={image2}
                    title={"Salveaza ONG-urile la favorite"}
                    description={"In cazul in care te documentezi asupra oportunitatilor de ajutor pe care le poti oferi," +
                        " dar nu vrei sa iei o actiune imediata, iti poti salva pentru uz viitor ONG-urilor la lista de favorite"
                        + " urmand ca ulterior sa le gasesti usor in meniul de salvari"}
                    redirectBtn={<Link to="/saved" style={PrimarybtnStyle}>Vezi salvarile tale</Link>} />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
                <WhatIsCard image={image3}
                    title={"Aboneaza-te pentru aparitia unui nou ONG"}
                    description={"Daca nu gasesti un ONG cu criteriile dorite, poti sa te abonezi pentru notificarea aparitiei" +
                        " unui ONG ce satisface criteriile. "}
                    redirectBtn={<Link to="/subs" style={PrimarybtnStyle}>Vezi abonariile tale</Link>} />
                <WhatIsCard
                    image={image4}
                    title={"Fi notificat asupra abonarilor tale"}
                    description={"In cazul in care te-ai abonat pentru aparitia unui ONG ce satisface anumite criterii,"
                        + " atunci vei fi notificat prin email-ul furnizat ca utilizator cat si prin platforma, prin intermediul"
                        + " inbox"}
                    redirectBtn={<Link to="/inbox" style={PrimarybtnStyle}>Vezi cutia de mesaje</Link>} />

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: '3px dashed #a4a0ee', padding: '15px', borderRadius: '15px' }} >
                <Typography gutterBottom variant="h5" component="div">Ce este NGOFinder?</Typography>
                <Typography variant="body1" color="text.secondary">NGOFinder este o platforma ce ajuta oamenii dornici sa faca gesturi caritabile prin oferirea
                    informatiilor necesare despre ONG-urile de pe teritoriul Romaniei. Platforma faciliteaza gasirea geografica
                    a ONG-urilor si sustine informarea cat mai eficienta despre acestea. </Typography>
                <Typography variant="body1" color="text.secondary">
                    Ideea noastra a plecat de la nevoia ONG-urilor de a se afisa public, ne avand suport-ul online al niciunei platforme pentru a realiza
                    acest lucru. Prin implementarea noastra, ne dorim sa sprijinim organizatiile in procesul de solicitare a resurselor, cat si sa incurajam
                    persoanele publice sa se implice in societate. <br />Pana la urma, cu totii avem acasa obiecte de care nu mai avem nevoie, si care ar putea
                    salva vieti ce nu au avut parte de acelasi noroc ca si noi. Acum, este doar la cateva click-uri distanta posibilitatea de a vedea
                    ce centre de recoltare se afla in zona noastra, reducand procesul obositor de a verifica o agentie (sau chiar lista cu sute de mii de
                    ONG-uri oferite de Ministerul Romaniei).
                </Typography>
                <hr />
                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>✨Impreuna putem crea o lume mai buna✨</Typography>
                <img src={foxy} style={{ width: '100%', height: '280px' }} />

            </div>
            <div></div>
            <div></div>
        </div>
    )
}

const WhatIsCard = ({ image, title, description, redirectBtn }) => {
    return (<div style={{
        display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start', justifyContent: 'space-between'
        , padding: '20px', backgroundColor: '#a4a0ee', color: '#303a52', borderRadius: '15px'
    }} >
        <img src={image} style={{ width: '100%', height: '150px', backgroundColor: '#a4a0ee', borderRadius: '20px' }} />
        <Typography gutterBottom variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        {redirectBtn ?? ""}
    </div>)
}


const WhyONGFinder = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div>
                <img src={image5} style={{ width: '100%',height:'100%' }} />

            </div>
            <div>
                <Typography gutterBottom variant="h5" component="div">De ce ai folosi NGOFinder?</Typography>
                <Typography gutterBottom variant="body1" color="text.secondary">Scopul platformei este de a te ajuta sa iti gasesti
                    un ONG in zona ta (sau orice alta zona dorita de pe teritoriul Romaniei) ce solicita anumite nevoi.
                </Typography>
                <Typography gutterBottom variant="h5" component="div">Actiuni posibile prin intermediul platformei:</Typography>
               <div >
               <List sx={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                    <MyListItem text={"Filtrarea ONG-urilor dupa judet, localitatii si nevoilor acestora"}/>
                    <MyListItem text={"Abonarea asupra aparitiei unui ONG nou dupa anumite criterii"}/>
                    <MyListItem text={"Vizualizarea punctelor de recoltare si interactionarea cu harta"}/>
                    <MyListItem text={"Notificarea prin email asupra unei abonari"}/>
                    <MyListItem text={"Salvarea la favorite a ONG-urilor pentru care nu vrei sa iei o decizie imediata"}/>
                    <MyListItem text={"Notificarea prin platforma asupra unei abonari"}/>
                </List>
               </div>
            </div>
        </div>
    )
}

const MyListItem = ({text}) => {
    return (<ListItem>
        <ListItemIcon sx={{ color: 'green' }}>
            <CheckIcon />
        </ListItemIcon >
        <ListItemText
            primary={text}
            secondary={null}
        />
    </ListItem>)
}

export default Home;