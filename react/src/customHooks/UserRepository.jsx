import { useState, useEffect } from 'react';
import axios from 'axios';


export function getUser(email, password) {
        const foundUser = {
            "username": "gandolh",
            "email": "cristian.gusatu02@e-uvt.ro",
            "isAdmin": true,
            "subscriptions": "timisoara haine copii, arad bere",
            "favorites": "1,2,3"
        }
    return {
        data : foundUser,
        loading : false
    };
} 