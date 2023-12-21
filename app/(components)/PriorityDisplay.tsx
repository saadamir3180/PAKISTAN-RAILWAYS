import { faFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PriorityDisplay = ({priority}: {priority: number}) => {

  const fireIcons = Array.from({ length: 5 }).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faFire} className={`icon ${index < priority ? 'fireIcon' : ''}`} />
  ));

  return (
    <div className="priorityContainer">
      {fireIcons}
    </div>
  )
}

export default PriorityDisplay