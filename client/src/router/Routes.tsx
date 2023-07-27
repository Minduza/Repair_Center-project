import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import { routes } from './const.ts';

interface routeType {
  path: string;
  Component: React.ComponentType;
}

const Routes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }: routeType) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
