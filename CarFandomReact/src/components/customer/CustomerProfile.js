import CustomerSummary from "./CustomerProfile";

const CustomerProfile =(props) => {
    return(
        <div className= 'grid grid-cols-2 gap-5 justify-center items-center'>
          {props.CustomerProfile.map((c) =>(
            <CustomerProfile Customer={c} key={props.ID}/>
          ))}

            

        </div>
    );
};

export default CustomerProfile;