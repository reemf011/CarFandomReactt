import Card from '../../UI/Card/Card';
import CardActions from '../../UI/Card/CardActions';
import CardBody from '../../UI/CardBody';
import CardHeader from '../../UI/CardHeader';
const repailist = (props) =>{
return (
    <div className="flex flex-col items-center gap-8 rounded-xl bg-slate-200 w-[500px] aspect-square overflow-fidden">
        
            <div className="flex items-center justify-center bg-white w-full">
                </div>
                {
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="font-bold">{props.Repair.MName}</h3>
                        <h4>{props.Repair.RLocation}</h4>
                        <h5>{props.Repair.RDescription}</h5>
                        </div>
                }
    </div>
);
};