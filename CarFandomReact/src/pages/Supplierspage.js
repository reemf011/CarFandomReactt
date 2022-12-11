import {useState} from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import SuppliersList from '../suppliers/SuppliersList'
const Supplierspage=()=> {
    const [suppliers, setsuppliers]=useState([]);
    const[isLoading, setIsLoading]= useState(true);
    useEffect (() =>{
        const fetchAbortController= new AbortController();
        const fetchSignal= fetchAbortController.signal();
        const fetchsuppliers = async () =>{
        try{
            const response = await fetch ('http://localhost:3000/suppliers',{
                signal:fetchSignal
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setsuppliers(data.suppliers);
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
        <SuppliersList suppliers={suppliers}/>
    </div>
};
export default Supplierspage;