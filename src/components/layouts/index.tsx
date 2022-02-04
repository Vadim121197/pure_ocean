import React, { useState } from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Header, Sidebar } from '../../containers';

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
    <Flex direction="row" {...props}>
      <Sidebar variant={variants?.navigation} isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Flex direction="column" {...props} w="100%">
        <Header showSidebarButton={variants?.navigationButton} onShowSidebar={toggleSidebar} />
        {children}
      </Flex>
    </Flex>
  );
};
