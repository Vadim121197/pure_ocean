import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Header, Navigation } from '../../containers';

export type LandingLayoutProps = {
  children: React.ReactNode;
};

export const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { children } = props;
  return (
    <Flex direction="row" {...props}>
      <Navigation />
      <Flex direction="column" {...props} w="100%">
        <Header />
        {children}
      </Flex>
    </Flex>
  );
};
