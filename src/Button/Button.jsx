

const Button = ({handleButton,buttonBalue,adddedPlayer}) => {
    return (
        <div className="flex container mx-auto justify-between items-center mb-10 px-5">
            <h2 className="text-xl font-bold">Available Players</h2>
            <div className="flex gap-3 items-center">
                <button onClick={()=>handleButton(true)} className={`font-bold ${buttonBalue?'bg-[#E7FE29] btn':'btn'}`}>Available</button>
                <button onClick={()=>handleButton(false)} className={`font-bold ${buttonBalue?'btn':'bg-[#E7FE29] btn'}`}>Selected ({adddedPlayer.length})</button>
            </div>
        </div>
    );
};

export default Button;