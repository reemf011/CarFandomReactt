import Card from "../../UI/Card/Card";
import CardActions from "../../UI/Card/CardActions";
import CardBody from "../../UI/Card/CardBody";
import CardHeader from "../../UI/Card/CardHeader";

const CustomerSummary = (props) => {
     {/* A div to represent the Card header*/}
    
    return (
        <div className="flex flex-col items-cenetr gap-8 rounded-x1 bg-slate-200 w-[500px] aspect-square overflow-hidden"> 
        <div className= "flex items-cenetr justify-center bg-white w-full">
         <img 
           className="object-scale-down w-[400px]"
           src={props.Customer.imgURL}
           alt={props.CustomerService.Name}
           />
        </div>
         {/* A div to represent the Card body*/}
         <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-bold">{props.Customer.Name}</h3>
            <h5>{props.Customer.phonenumber} Phone Number</h5>
            <h5>{props.Customer.Email} Email</h5>
         </div>
         <div className="flex gap-4">
            <button className="bg-white py-3 px-10 font-bold rounded-x1">
                View
            </button>
            </div>  
        </div>
    );
};
export default CustomerSummary;
