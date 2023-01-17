import { useState, useEffect } from 'react';
import axios from 'axios';


export async function getUser(username, password, onLoggedIn) {

        // const foundUser = {
        //     "username": "gandolh",
        //     "email": "cristian.gusatu02@e-uvt.ro",
        //     "isAdmin": true,
        //     "subscriptions": "timisoara haine copii, arad bere",
        //     "favorites": "1,2,3"
        // }
          try {
            
            const url = `http://localhost:8081/ongAPI/getUser`
            const params = {
                username: username,
                password: password,
            }
            const { data } = await axios.get(url, { params: params });
            // console.log(123);
            const foundUser = JSON.parse(data.replace(/\s+/g, '').replace(",}]","}]"))[0];
            if(foundUser)
                onLoggedIn(foundUser);
            // console.log(foundUser);
            return foundUser;
          } catch (error) {
            // console.log(error)
            console.error('error in userrepository line 29')
          }
            return null;
        }
      
export  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('userData'));

}

