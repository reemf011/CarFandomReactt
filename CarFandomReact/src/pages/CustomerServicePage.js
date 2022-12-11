import {useEffect, useState} from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import CustomerServiceList from './components/CustomerService/CustomerServiceList';
import CustomerServiceSummary from './components/CustomerService/CustomerServiceSummary';

const CustomerServicePage =()=>{
    const [CustomerService, setCustomerService]= useState([]);
    const[isLoading, setIsLoading]= useState(true);
    useEffect(() => {
        const fetchAbortController= new AbortController();
        const fetchSignal= fetchAbortController.signal();
        const fetchcustomerservice = async () => {
            try {
                const response= await fetch ('http://localhost:5000/CustomerService',{
                    signal:fetchSignal
                });
                const data= await response.json();

                if(!response.ok){
                    throw Error(data.error);
                }
                setCustomerService(data.Customer);
                setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchcustomerservice();
        return () => {
            fetchAbortController.abort();
        }
    },[]);
    if(isLoading){
        return <p> Please wait while loading your data</p>;
    }
return (
    <div className = "flex flex-col items-center justify-center">
        <CustomerServicePage CustomerService ={Customer}/>
        </div>
);
} 