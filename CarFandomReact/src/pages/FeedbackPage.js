import { useEffect, useState } from "react";
import FeedbackList from "../components/feedback/FeedbackList";

const FeedbackPage = () => {
    

    const [customer, setCustomer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect (() => {

        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;


        const fetchFeecback = async () => {
            try {

                const reponse = await fetch ('http://localhost:3000/customer', {
                    signal: fetchSignal
                });

                const data = await response.json ();

                if (!response.ok) {
                    throw Error(data.error);
                }
        
                setCustomer (data.customer);

                setIsLoading(false);

            } catch (err) {
                console.log(err.message);
            }
            };
            fetchFeecback();

            return () => {
                fetchAbortController.abort();
            };
        }, []);

        if (isLoading) {
            return <p> loading list of existing customers </p>
        }

        return (
            <div>
                <FeedbackList customer={customer}/>
            </div>
        );
/*
        const dummyFeedback = [
            {
                name: 'Ahmed',
                email: 'Ahmed@gmail.com',
                description: '',
            },
            {
                name: 'Hazem',
                email: 'Hazem@gmail.com',
                description: '',
            }
        ];


const onButtonClickHandler = async() => {
    try {
        const response = await fetch ('http://localhost:5000/feedback');

        const data = await response.json();

        if (!response.ok) {
            throw Error(data.error);
        }

        setFeedback (data.feedback);
    } catch (err) {
        console.log(err.message);
    }
}
*/
};

export default FeedbackPage;