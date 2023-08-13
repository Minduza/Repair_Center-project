import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import { routes } from './const.ts';

import { IconType } from 'react-icons';

interface routeType {
  path: string;
  Component: React.ComponentType | React.FC;
  title: string;
  Icon: IconType;
}

const Routes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component, title, Icon, Layout }: routeType) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout title={title} Icon={Icon}>
              <Component />
            </Layout>
          }
        ></Route>
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
