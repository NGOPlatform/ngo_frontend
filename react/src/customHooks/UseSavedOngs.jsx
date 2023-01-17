import { ONGsFooData } from "./ONGs";
import { useState, useEffect } from "react";
import { getUserSaves } from "./UserRepository";
const UseSavedOngs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const ONGs = getUserSaves();
        setData(ONGs)
    }, []);
    return {
        data,
        setData,
        loading
    };
}
 
export default UseSavedOngs;