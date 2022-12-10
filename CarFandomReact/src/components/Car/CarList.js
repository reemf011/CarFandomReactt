import CarSummary from "./CarSummary";

const CarList =(props) => {
    return(
        <div className= 'grid grid-cols-2 gap-5 justify-center items-center'>
          {props.car.map((c) =>(
            <CarSummary car={c} key={props._id}/>
          ))}

            

        </div>
    );
};

export default CarList;