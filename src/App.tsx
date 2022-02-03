import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { LandingLayout } from './components';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<div>awda</div>} />
        </Routes>
      </LandingLayout>
    </ChakraProvider>
  );
};
