import axios from "axios";
import { APIUrls } from "../Globals";
export async function getNouOngs(){
    try {
            
        const url =  APIUrls.listONGNOU; 
        const params = {
            size:10
        }
        const { data } = await axios.get(url, { params: params });
        return data;
      } catch (error) {
        console.log(error)
        console.error('error in userrepository line 29')
      }
      return [];
}
 