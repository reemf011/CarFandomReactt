import {useEffect, useState} from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import CustomerProfile from './components/customer/CustomerProfile';
import CustomerSummary from './components/customer/CustomerSummary';

const CustomerPage =()=>{
    const [customer, setCustomer]= useState([]);
    const[isLoading, setIsLoading]= useState(true);
    useEffect(() => {
        const fetchAbortController= new AbortController();
        const fetchSignal= fetchAbortController.signal();
        const fetchcustomer = async () => {
            try {
                const response= await fetch ('http://localhost:3000/Customer',{
                    signal:fetchSignal
                });
                const data= await response.json();

                if(!response.ok){
                    throw Error(data.error);
                }
                setCustomer(data.Customer);
                setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchcustomer();
        return () => {
            fetchAbortController.abort();
        }
    },[]);
    if(isLoading){
        return <p> Please wait while loading your data</p>;
    }
return (
    <div className = "flex flex-col items-center justify-center">
        <CustomerPage Customer ={Customer}/>
        </div>
);
} 