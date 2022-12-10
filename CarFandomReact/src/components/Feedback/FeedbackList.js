import FeedbackSummary from "./FeedbackSummary";

const FeedbackList =(props) => {
    return(
        <div className= 'grid grid-cols-2 gap-5 justify-center items-center'>
          {props.feedback.map((c) =>(
            <FeedbackSummary feedback={c} key={props._id}/>
          ))}

            

        </div>
    );
};

export default FeedbackList;