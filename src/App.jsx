import { useState } from 'react';
import Modal from './Compomemts/Modal';
import './App.css'

function App() {
  const[openModal, setOpenmodal] =useState(false)

  return (
   <div className="App">
    <h1>hey, click on button open the modal</h1>
    <button className="openModalBtn" onClick={()=>{setOpenmodal(true)}}>open</button>
    {openModal&&<Modal closeModal={setOpenmodal}/>}
 
   </div>
  )
}

export default App
