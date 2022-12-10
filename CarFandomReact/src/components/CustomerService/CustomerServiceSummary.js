import Card from "../../UI/Card/Card";
import CardActions from "../../UI/Card/CardActions";
import CardBody from "../../UI/Card/CardBody";
import CardHeader from "../../UI/Card/CardHeader";

const CustomerServiceSummary = (props) => {
     {/* A div to represent the Card header*/}
    
    return (
        <div className="flex flex-col items-cenetr gap-8 rounded-x1 bg-slate-200 w-[500px] aspect-square overflow-hidden"> 
        <div className= "flex items-cenetr justify-center bg-white w-full">
         <img 
           className="object-scale-down w-[400px]"
           src={props.CustomerService.imgURL}
           alt={props.CustomerService.name}
           />
        </div>
         {/* A div to represent the Card body*/}
         <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-bold">{props.CustomerService.custServiceName}</h3>
            <h5>{props.CustomerService.custServicePhoneNum} Phone Number</h5>
         </div>
         <div className="flex gap-4">
            <button className="bg-white py-3 px-10 font-bold rounded-x1">
                View
            </button>
            </div>  
        </div>
    );
};
export default CustomerServiceSummary;
