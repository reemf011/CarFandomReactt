const Card = (props) => {
    return (
        <div className="flex flox-col items-center gap-8 rounded-xl bg-slate-200 w-[500px] aspect-square overflow-hidden">
            {props.children}
            </div>
    );
};

export default Card;