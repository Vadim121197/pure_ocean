import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { LandingLayout } from './components';
import { routes } from './constants';
import { theme } from './theme/theme';

const Home = React.lazy(() => import('./pages/Home'));
const GetPShare = React.lazy(() => import('./pages/GetPShare'));
const GetReward = React.lazy(() => import('./pages/GetReward'));

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <LandingLayout>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path={routes.MAIN} element={<Home />} />
            <Route path={routes.SHARE} element={<GetPShare />} />
            <Route path={routes.REWARD} element={<GetReward />} />
            <Route path={routes.BOND} element={<div>Get $PBond</div>} />
            <Route path={routes.HISTORY} element={<div>History</div>} />
            <Route path={routes.DOCS} element={<div>docs</div>} />
          </Routes>
        </Suspense>
      </LandingLayout>
    </ChakraProvider>
  );
};
