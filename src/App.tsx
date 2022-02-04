import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { LandingLayout } from './components';

const theme = extendTheme({
  fonts: {
    heading: 'Arial Rounded MT Bold',
    body: 'Arial Rounded MT Bold',
  },
});

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<div>awda</div>} />
        </Routes>
      </LandingLayout>
    </ChakraProvider>
  );
};
