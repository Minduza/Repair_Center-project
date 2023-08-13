import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import NavList from '../../components/Navigation/NavList';

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="navIcon"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? <FaTimes /> : <FaAlignJustify className="burger" />}
      </div>

      {active && (
        <div className="navContainerOuter">
          <NavList
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;
