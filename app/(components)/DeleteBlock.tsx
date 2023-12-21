"use client";
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const DeleteBlock = ({ id }: { id: string }) => {
  
  const deleteTicket = async () => {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
          method: "DELETE",
      })
      if(res.ok){
        console.log("Ticket deleted")
      }
  }

  return (
    <div className="deleteContainer">
      <FontAwesomeIcon icon={faX} className="icon deleteIcon" onClick={deleteTicket}/>
    </div>
  )
}

export default DeleteBlock