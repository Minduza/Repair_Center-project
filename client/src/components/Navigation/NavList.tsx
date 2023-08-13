import { routes } from '../../router/const';
import NavItem from './NavItem';
import './Navigation.scss';

type NavListType = {
  onClick: React.MouseEventHandler;
};
const NavList = ({ onClick }: NavListType) => {
  return (
    <div className="navContainer ">
      {routes.map(({ path, title, Icon }) => (
        <NavItem
          key={title}
          path={path}
          title={title}
          Icon={Icon}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default NavList;
