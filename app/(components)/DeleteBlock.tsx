import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DeleteBlock = () => {
  return (
    <div className="deleteContainer">
    <FontAwesomeIcon icon={faX} className="icon deleteIcon"/>
    </div>
  )
}

export default DeleteBlock