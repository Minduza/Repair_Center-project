import '../styles/containers.scss';
import Header from '../components/Header/Header';

const MainLayout = ({ title, Icon, children }) => {
  return (
    <div className="layout">
      <Header title={title} Icon={Icon} />

      <div className="bodyContainer">{children}</div>
    </div>
  );
};

export default MainLayout;
