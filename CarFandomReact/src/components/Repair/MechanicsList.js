import Repairlist from './Repairlist';
const MechanicsList = (props) =>{
    return (
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
            {props.Repair.map((p)=> (
                <Repairlist repair={p} key={p.RID}/>
            ))}
     </div>
    );
};
export default MechanicsList;