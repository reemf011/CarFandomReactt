import Card from "../../UI/Card/Card";
import CardActions from "../../UI/Card/CardActions";
import CardBody from "../../UI/Card/CardBody";
import CardHeader from "../../UI/Card/CardHeader";

const CarSummary = (props) => {
    return (
        <Card>
            <CardHeader>
            <img
                className="object-scale-down w-[400px]"
                src={props.car.imgURL}
                alt={props.car.name}
            />
            </CardHeader>
            <CardBody>
            <h3 className="font-bold"> {props.car.name}</h3>
            <h5> {props.car.model} </h5>
            <h5> {props.car.color} </h5>
            <h5> {props.car.price} EGP </h5>
            <h5> {props.car.year} </h5>
            <h5> {props.car.description} </h5>
            </CardBody>
            <CardActions>
            <button className=" bg-white py-3 px-10 font-bold rounded-x1">
                View
            </button>
            </CardActions>
        </Card>
    );
};

export default CarSummary;