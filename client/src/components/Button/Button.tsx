import { useNavigate } from 'react-router-dom';

import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  path?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  path,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} type={type} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
