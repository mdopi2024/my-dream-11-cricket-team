import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import DisplayPlayer from '../DisplayPlayer/DisplayPlayer';
import { collapseToast } from 'react-toastify';

const Players = ({handleAddedPlayer}) => {

    const [playes, setlPlayers]=useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setlPlayers(data))
    },[])
    return (
        <div className='container mx-auto  grid gap-7 md:grid-cols-3'>
          {
            playes.map((player,indx)=><DisplayPlayer 
            key={indx}
            playes={player}
            handleAddedPlayer={handleAddedPlayer}
            
            
            ></DisplayPlayer>)
          }
        </div>
    );
};

export default Players;