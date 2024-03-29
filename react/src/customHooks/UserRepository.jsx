import { useState, useEffect } from 'react';
import { APIUrls } from '../Globals';
import axios from 'axios';


export async function getUser(username, password, onLoggedIn) {
          try {
            
            const url =  APIUrls.getUser;
            const params = {
                username: username,
                password: password,
            }
            const { data } = await axios.get(url, { params: params });
            // console.log(123);
            const foundUser = data[0];
            if(foundUser){
              if(foundUser.favorites == null || foundUser.favorites == "null")
                foundUser.favorites = [];
              else{
                const completedFavorites = [];
                for(let fav of foundUser.favorites.split(",")){
                  console.log(fav);
                  const url = APIUrls.getONG;
                  const { data: data } = await axios.get(url, { params: { id:fav} });
                  completedFavorites.push(data);
               }
               foundUser.favorites = completedFavorites;
              }
              if(foundUser.subscriptions == null || foundUser.subscriptions == "null")
                foundUser.subscriptions = [];
              
              
             
              onLoggedIn(foundUser);
            }
            // console.log(foundUser);
            return foundUser;
          } catch (error) {
            console.log(error)
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
    // console.log(index, ONG.id,userData.favorites)
    if(index !=-1)
      userData.favorites = userData.favorites.filter(el => el.id != ONG.id);
    else userData.favorites.push(ONG);
    localStorage.setItem('userData', JSON.stringify(userData));
    
    const url = APIUrls.updateUserFav +`?favorites=${userData.favorites.map(el=>el.id).join(',')}&username=${userData.username}&password=${userData.password}`
    axios.put(url);

    return userData.favorites;
}

export function getUserSaves(){
  const userData = localStorage.getItem('userData');
  return userData ?  JSON.parse(userData).favorites : [];
}


export async function registerUser(username,email,password){
  const {data} = await axios.put( APIUrls.addUser + `?username=${username}&password=${password}&email=${email}`);
  return data;
}
