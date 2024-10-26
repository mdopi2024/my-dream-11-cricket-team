

const Player = ({adddedPlayer}) => {
  
    return (
        <div >
              <h4 className=" text-[18px] font-bold ml-5 mb-4 md:ml-12">Selectde Players ({adddedPlayer.length}/6)</h4>
            {
                adddedPlayer.map((seletedPlayer,indx)=><div key={indx} className="container mx-auto">
                   
                

                   <div className="flex justify-between items-center mx-5 border rounded-xl p-5 mb-5">

                    <div className="flex items-center gap-5">

                      <div className="w-24 h-24 ">  
                        <img className="w-full h-full object-cover rounded-full" src={seletedPlayer.image} alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{seletedPlayer.name}</p>
                            <p className="text-gray-400 text-[14px]">{seletedPlayer.handedness}</p>
                        </div>
                    </div>
                      
                      <div><button><i class="fa-regular fa-trash-can text-2xl text-red-600"></i></button></div>

                   </div>

                </div>)
            }
        </div>
    );
};

export default Player;