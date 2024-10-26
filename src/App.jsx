
import { useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Header from './Header/Header'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import Player from './Player/Player';
import Players from './AllPlayer/Players';

function App() {

  // clime free credit state
  const [freeCredit, setFreeCredit]=useState(0)
// button state
 const [buttonBalue,setButtonValue]=useState(true)


const [adddedPlayer, setAddedplayer]=useState([])

  const handleFreeCreadit =()=>{
    toast.success('Clime Free Credit Successfull')
    setFreeCredit(freeCredit + 1800000)
  }

  const handleButton = (value)=>{
    setButtonValue(value)
  }

  const handleAddedPlayer =(player)=>{
    const isMatched = adddedPlayer.find(p=>p.id === player.id)
    if(isMatched){
      toast.error(`${player.name} is already exist`)
    }
    else if(freeCredit < player.price){
      toast.error('you have not enough meoney')
    }
    else{
      toast.success(`${player.name} is successfully selected`)
      setAddedplayer([...adddedPlayer,player])
      setFreeCredit(freeCredit-player.price)
    }
  }
  

  return (
    <>
     {/* header conponet here */}
     <Header freeCredit={freeCredit}></Header>
     {/* banner conponet here */}
     <Banner handleFreeCreadit={handleFreeCreadit}></Banner>
     <Button handleButton={handleButton} buttonBalue={buttonBalue} adddedPlayer={adddedPlayer}></Button>
     {
      buttonBalue?<Players handleAddedPlayer={handleAddedPlayer}></Players>:<Player adddedPlayer={adddedPlayer}></Player>
     }
    </>
  )
}

export default App
