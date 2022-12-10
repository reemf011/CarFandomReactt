import {useState} from 'react';
import Repairlist from '../repairs/Repairlist'
const Repairpage=()=> {
    const [repair, setrepair]=useState();
    return <div>
        <Repairlist repair={repair}/>
    </div>
};
export default Repairpage;