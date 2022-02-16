import React, { useState } from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { Header, Sidebar } from '../../containers';
import background from '../../assets/images/background.png';

export type LandingLayoutProps = {
  children: React.ReactNode;
};

type Variant = {
  navigation: 'drawer' | 'sidebar';
  navigationButton: boolean;
};

const smVariant: Variant = { navigation: 'drawer', navigationButton: true };
const mdVariant: Variant = { navigation: 'sidebar', navigationButton: false };

export const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { children } = props;

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const variants = useBreakpointValue({ base: smVariant, md: smVariant, lg: mdVariant });

  const toggleSidebar = () => setSidebarOpen((state) => !state);

  return (
    <Flex direction="column" minH="100vh">
      <Box flex={['0 0 64px', '0 0 64px', '0 0 85px']}>
        <Header showSidebarButton={variants?.navigationButton} onShowSidebar={toggleSidebar} />
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
