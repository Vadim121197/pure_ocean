import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Header, Sidebar } from '../../containers';
import background from '../../assets/images/background.png';
import { useBreakpointValueHook } from '../../hooks';

export type LandingLayoutProps = {
  children: React.ReactNode;
};

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  const variants = useBreakpointValueHook();

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => setSidebarOpen((state) => !state);

  return (
    <Flex direction="column" minH="100vh">
      <Box flex={['0 0 64px', '0 0 64px', '0 0 64px', '0 0 85px']}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
      </Box>
      <Flex direction="row" flex="1">
        <Sidebar variant={variants?.navigation} isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <Box
          w="100%"
          minHeight="91vh"
          bgImage={background}
          bgRepeat="no-repeat"
          bgSize="cover"
          flex="1"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
