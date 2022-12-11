import {useState} from 'react';
import Repairlist from '../repairs/Repairlist'
const Repairpage=()=> {
    const [repair, setrepair]=useState([]);
    const[isLoading, setIsLoading]= useState(true);
    useEffect (() =>{
        const fetchAbortController= new AbortController();
        const fetchSignal= fetchAbortController.signal();
        const fetchrepair = async () =>{
        try{
            const response = await fetch ('http://localhost:5000/Repair',{
                signal:fetchSignal
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setrepair(data.repair);
            setIsLoading(false);
        }catch(err){
            console.log(err.message);
        }
    };
    fetchrepair();
    return () => {
        fetchAbortController.abort();
    }
},[])
if(isLoading){
    return <p> Please wait while loading your data</p>;
}
    return <div className="flex flex-col items-center justify-center">
        <Repairlist repair={repair}/>
    </div>
};
export default Repairpage;