import { ONGsFooData } from "./ONGs";
import { useState, useEffect } from "react";
const UseSavedOngs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setData(ONGsFooData);
    }, []);
    return {
        data,
        loading
    };
}
 
export default UseSavedOngs;