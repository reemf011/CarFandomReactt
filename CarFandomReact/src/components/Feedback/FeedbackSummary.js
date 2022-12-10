import Card from "../../UI/Card/Card";
import CardActions from "../../UI/Card/CardActions";
import CardBody from "../../UI/Card/CardBody";
import CardHeader from "../../UI/Card/CardHeader";

const FeedbackSummary = (props) => {
    return (
        <Card>
            <CardHeader>
            <img
                className="object-scale-down w-[400px]"
                src={props.feedback.imgURL}
                alt={props.feedback.name}
            />
            </CardHeader>
            <CardBody>
            <h3 className="font-bold"> {props.feedback.name}</h3>
            <h5> {props.feedback.email} </h5>
            <h5> {props.feedback.description} </h5>
            </CardBody>
            <CardActions>
            <button className=" bg-white py-3 px-10 font-bold rounded-x1">
                View
            </button>
            </CardActions>
        </Card>
    );
};

export default FeedbackSummary;