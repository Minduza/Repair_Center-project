import './Header.scss';
import '../../styles/containers.scss';
import { IconType } from 'react-icons';
import Navigation from '../Navigation/Navigation';

type headerType = {
  title: string;
  Icon: IconType;
};

const Header = ({ title, Icon }: headerType) => {
  return (
    <div className="header">
      <div>
        <Navigation />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div className="circleIcon">
        <Icon />
      </div>
    </div>
  );
};

export default Header;
