

const Modal = ({closeModal}) => {
  
  return (
   <div className="modalBackground">
    <div className="modalcontainer">
    <button onClick={()=>closeModal(false)}>X</button>
      <div className="title">are you sure you want to continue</div>
      <div className="body">the next page is awesome move forward</div>
      <div className="footer">
        <button onClick={()=>closeModal(false)}>Cancel</button> 
        <button>Continue</button>
      </div>
    </div>
   </div>
  )
}

export default Modal

  
 
 
 
 
 
