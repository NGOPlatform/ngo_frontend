import { useState, useEffect } from 'react';
import axios from 'axios';


export function UseLogin({ email, password }) {


    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const foundUser = {
            "username": "gandolh",
            "email": "cristian.gusatu02@e-uvt.ro",
            "isAdmin": true,
            "subscriptions": "timisoara haine copii, arad bere",
            "favorites": "1,2,3"
        }
        setData(foundUser);
    }, [email, password]);
    return {
        data,
        loading
    };
} 