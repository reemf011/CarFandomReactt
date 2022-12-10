import { useState } from "react";
import CarList from "../components/Car/CarList";

const CarPages = () => {
    const [car, setCar] = useState([]);

const dummyCar = [
    {
        name: 'Ford',
        model: 'Mustang GT',
        color: 'Red',
        price: '$500,000',
        year: '2017',
        description: 'brand new 2017 Ford Mustang GT Convertible',
        imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcars.usnews.com%2Fcars-trucks%2Fford%2Fmustang%2F2017&psig=AOvVaw3-gGEBItbTKsKyR21wTmlm&ust=1670792003172000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODI4LD37_sCFQAAAAAdAAAAABAL'
    },
    {
        name: 'Mercedes',
        model: 'C200',
        color: 'Grey',
        price: '$2,000,000',
        year: '2022',
        description: 'brand new 2022 Mercedes C200',
        imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuk.motor1.com%2Fnews%2F490062%2F2022-mercedes-c-class-reveal%2F&psig=AOvVaw2gz29H58CTKHj9y6WAzKEJ&ust=1670792275730000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjAnbL47_sCFQAAAAAdAAAAABAE'
    }
];

const onButtonClickHandler = () => {
setCar (dummyCar);
};

    return (
        <div className="flex flex-col items-center justify-center">
            <CarList Car={Car} />
            <button 
            className="bg-blue-900 text-white py-3 px-10 my-10 font-bold rounded-x1"
            onClick={onButtonClickHandler}
            >
                Set car State
            </button>
        </div>
    );
};

export default CarPages;