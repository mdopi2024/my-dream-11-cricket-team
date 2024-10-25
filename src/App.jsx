
import { useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Header from './Header/Header'
import {  collapseToast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import Player from './Player/Player';
import Players from './AllPlayer/Players';

function App() {

  // clime free credit state
  const [freeCredit, setFreeCredit]=useState(0)
// button state
 const [buttonBalue,setButtonValue]=useState(true)


  const handleFreeCreadit =()=>{
    toast.success('Clime Free Credit Successfull')
    setFreeCredit(freeCredit + 1800000)
  }

  const handleButton = (value)=>{
    setButtonValue(value)
  }

  return (
    <>
     {/* header conponet here */}
     <Header freeCredit={freeCredit}></Header>
     {/* banner conponet here */}
     <Banner handleFreeCreadit={handleFreeCreadit}></Banner>
     <Button handleButton={handleButton} buttonBalue={buttonBalue}></Button>
     {
      buttonBalue?<Players></Players>:<Player></Player>
     }
    </>
  )
}

export default App
