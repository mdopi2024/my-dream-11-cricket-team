
import { useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Header from './Header/Header'

function App() {

  // clime free credit state
  const [freeCredit, setFreeCredit]=useState(0)
  const handleFreeCreadit =()=>{
    setFreeCredit(freeCredit + 1800000)
  }


  return (
    <>
     {/* header conponet here */}
     <Header freeCredit={freeCredit}></Header>
     {/* banner conponet here */}
     <Banner handleFreeCreadit={handleFreeCreadit}></Banner>

     
    </>
  )
}

export default App
