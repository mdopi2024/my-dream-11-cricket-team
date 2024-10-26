

const DisplayPlayer = ({playes,handleAddedPlayer}) => {
    const {name,type,handedness,price,image,country}=playes
    return (
        <div className="border p-6 rounded-2xl">
            <div className="card card-compact bg-base-100  mx-auto ">
 <figure>
    <img className="w-full h-[250px] object-cover"
      src={image}
      alt="Shoes" />
  </figure>

  <div className="flex items-center gap-4 mt-4">
        <i class="fa-solid fa-user text-xl"></i>
        <p className="font-bold">{name}</p>
        </div>

<div className="mt-3 flex justify-between items-center">
    <div className="flex items-center gap-4 text-gray-500">
    <i class="fa-solid fa-flag"></i>
    <p className="text-sm">{country}</p>
    </div>
    <p className="bg-gray-200 p-2 rounded-2xl">{type}</p>
</div>
<hr className="mt-4 border-1" />
<p className="mt-3">Rating</p>
<div className="flex justify-between items-center mt-2">
    <p>{handedness}</p>
    <p className="text-gray-400">{handedness}</p>
</div>
        
  <div className=" flex justify-between items-center mt-3">
   
    <p> price : $ {price}</p>
      <button onClick={()=>handleAddedPlayer(playes)} className="btn ">Choose Player</button>
    
  </div>
</div>
        </div>
    );
};

export default DisplayPlayer;