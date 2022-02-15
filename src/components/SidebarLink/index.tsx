import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink as RouteLink, useLocation } from 'react-router-dom';
import { gold } from '../../constants';

export type SidebarLinkProps = {
  text: string;
  to: string;
  logo: React.SVGProps<SVGSVGElement>;
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({ text, to, logo }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link as={RouteLink} to={to} textAlign="start" paddingBottom="40px">
      <Flex alignItems="center">
        <Box w="35px" h="35px">
          {logo}
        </Box>
        <Text
          pl="20px"
          bgGradient={isActive ? 'linear(#CD7312, #FBC850)' : 'linear(#FFFFFF, #FFFFFF)'}
          bgClip="text"
          fontSize="20px"
          textDecoration={isActive ? 'underline' : 'none'}
          textDecorationColor={gold}
          _hover={{ textDecoration: !isActive && 'underline', color: !isActive && 'white' }}
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
};
