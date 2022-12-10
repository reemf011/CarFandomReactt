import {useState} from 'react';
import CarList from '../Components/Cars/CarList';

const CarPages = () => {

    const [car, setCar] = useState([]);

    const dummyCar = [
        {
            model: 'Mustang',
            year: '2017',
            name: 'Ford',
            Description: 'New 2017 Ford Mustang',
            price: '$500,000',
            imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autotrader.ca%2Fresearch%2Fford%2Fmustang%2F2017%2F&psig=AOvVaw20YIp1owuqZu75ARGHtlcr&ust=1670414125591000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCWhNb35PsCFQAAAAAdAAAAABAE'
        },
        {
            model: 'Ferrari',
            year: '1999',
            name: 'F40',
            Description: '1999 Ferrari F40',
            price: '$10,000,000',
            imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ferrari.com%2Fen-BS%2Fhistory%2Fgarage%2F1987%2Ff40&psig=AOvVaw0_gX2gCFXadvTDunnaoh3w&ust=1670417000067000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCL0LCC5fsCFQAAAAAdAAAAABAJ'
        }
    ];

    const onButtonClickHandler = () => {
        setCar(dummyCar);
    };
    return (
    <div className="flex flex-col items-center justify-center">
        <CarList car={car} />
        <button
            className="bg-blue-900 text-white py-3 px-10 my-10 font-bold rounded-xl"
            onClick={onButtonClickHandler}
            >
                Set car State
        </button>
    </div>
    );
};

export default CarPages;