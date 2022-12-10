import { useState } from "react";
import FeedbackList from "../components/feedback/FeedbackList";

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState([]);

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

const onButtonClickHandler = () => {
setCar (dummyFeedback);
};

    return (
        <div className="flex flex-col items-center justify-center">
            <FeedbackList feedback={feedback} />
            <button 
            className="bg-blue-900 text-white py-3 px-10 my-10 font-bold rounded-x1"
            onClick={onButtonClickHandler}
            >
                Set feedback State
            </button>
        </div>
    );
};

export default FeedbackPage;