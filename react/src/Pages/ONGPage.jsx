import { useParams } from "react-router";
import {Container, Typography} from "@mui/material"
import { useEffect } from "react";
import {UseGetOng} from "../customHooks/UseGetOng"
import { Box, grid } from "@mui/system";
const ONGPage = ({}) => {
    const {
        data: ONG,
        setCurrentId
      } = UseGetOng();

    const params = useParams();
    useEffect(()=>{
        setCurrentId(params.ongId);
    },params)

    return ( 
    <>
    <Container maxWidth="md" sx={{ marginTop: '40px', marginBottom:'40px', paddingTop: '40px', backgroundColor: '#ffffff59', minHeight:'calc(100vh - 48px - 120px)'}}>
        <Box sx={{display:'grid', gridTemplateColumns:'max-content 1fr', width:'100%', gap:'5px 20px'}}>
        <Typography>nume</Typography>
        <Typography>{ ONG.name}</Typography>
        <Typography>numar de inregistrare</Typography>
        <Typography>{ ONG.regNumber}</Typography>
        <Typography>judet</Typography>
        <Typography>{ ONG.county}</Typography>
        <Typography>localitate</Typography>
        <Typography>{ ONG.city}</Typography>
        <Typography>adresa completa</Typography>
        <Typography>{ ONG.address}</Typography>
        <Typography>descriere</Typography>
        <Typography>{ ONG.description}</Typography>
        </Box>
        
    </Container>
    </>
    );
}
 
export default ONGPage;