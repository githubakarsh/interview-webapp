
import { useHistory } from 'react-router-dom';


const TopNavigation = () => {
  const history = useHistory();
const onClickNavItems = (path) => {
        history.push(path);
      }
    return <header>
    <nav>
      <li onClick={() => onClickNavItems('/records')}>
        Employee Records     
      </li>
    </nav>
  </header>
}

export default TopNavigation;