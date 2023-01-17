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
            if(foundUser){
              if(foundUser.favorites == "notempty")
                foundUser.favorites = [];
              if(foundUser.subscriptions == "notempty")
                foundUser.subscriptions = [];
              onLoggedIn(foundUser);
            }
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

export function toggleSaveONG(ONG){
    const userData = getCurrentUser();
    // console.log(userData.favorites.includes(idONG), userData.favorites.indexOf(idONG))
    const index = userData.favorites.findIndex( el => el.id == ONG.id);
    console.log(index, ONG.id,userData.favorites)
    if(index !=-1)
      userData.favorites = userData.favorites.filter(el => el.id != ONG.id);
    else userData.favorites.push(ONG);
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData.favorites;
}

export function getUserSaves(){
  const userData = localStorage.getItem('userData');
  return userData ?  JSON.parse(userData).favorites : [];
}

