import CustomerServiceSummary from "./CustomerServiceSummary";

const CustomerServiceList =(props) => {
    return(
        <div className= 'grid grid-cols-2 gap-5 justify-center items-center'>
          {props.CustomerService.map((c) =>(
            <CustomerServiceSummary CustomerService={c} key={props._id}/>
          ))}

            

        </div>
    );
};

export default CustomerServiceList;