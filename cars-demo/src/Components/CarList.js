import CarSummary from './CarSummary';

const CarList = (props) => {
    return (
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
            {props.car.map((p) => (
                <CarSummary car={p} key={p._id} />
            ))}
            </div>
    );
};

export default CarList;