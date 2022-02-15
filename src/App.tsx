import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { LandingLayout } from './components';
import { routes } from './constants';
import { Home } from './pages';
import { theme } from './theme/theme';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <LandingLayout>
        <Routes>
          <Route path={routes.MAIN} element={<Home />} />
          <Route path={routes.SHARE} element={<div>Get $PShare</div>} />
          <Route path={routes.REWARD} element={<div>Get Reward</div>} />
          <Route path={routes.BOND} element={<div>Get $PBond</div>} />
          <Route path={routes.HISTORY} element={<div>History</div>} />
          <Route path={routes.DOCS} element={<div>docs</div>} />
        </Routes>
      </LandingLayout>
    </ChakraProvider>
  );
};
