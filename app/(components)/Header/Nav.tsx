import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
const Nav = () => {
  // const [active, setActive] = useState(false);
  return (
  <nav>
    
    <ul>
      <li>
        <Link href={'/'}>
        <FontAwesomeIcon icon={faHome} className={'icon'}/>
        </Link>
      </li>
      <li>
        <Link href={'/TicketPage/new'}>
        <FontAwesomeIcon icon={faTicket} className={'icon'}/>
        </Link>
      </li>
    </ul> 
    {/* <div>
      email@gmail.com
    </div> */}
  </nav>);
};

export default Nav;