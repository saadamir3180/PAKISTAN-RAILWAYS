import { faFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PriorityDisplay = () => {
  return (
    <div className="priorityContainer">
    <FontAwesomeIcon icon={faFire} className="icon fireIcon"/>
    <FontAwesomeIcon icon={faFire} className="icon fireIcon"/>
    <FontAwesomeIcon icon={faFire} className="icon fireIcon"/>
    <FontAwesomeIcon icon={faFire} className="icon fireIcon"/>
    <FontAwesomeIcon icon={faFire} className="icon fireIcon"/>
    </div>
  )
}

export default PriorityDisplay