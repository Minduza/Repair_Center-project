import { Link } from 'react-router-dom';
import './Navigation.scss';

import { IconType } from 'react-icons';

type NavItemType = {
  path: string;
  title: string;
  Icon: IconType;
  onClick: React.MouseEventHandler;
};

const NavItem = ({ path, title, Icon, onClick }: NavItemType) => {
  return (
    <Link to={path} className="navItem" onClick={onClick}>
      <div className="iconCircle">
        <Icon />
      </div>

      <span className="title">{title}</span>
    </Link>
  );
};

export default NavItem;
