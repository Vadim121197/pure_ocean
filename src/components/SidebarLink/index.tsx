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
    <Link as={RouteLink} to={to} textAlign="start" pb={['16px', '16px', '16px', '25px']}>
      <Flex alignItems="center">
        <Box w={['20px', '20px', '20px', '35px']} h={['20px', '20px', '20px', '35px']}>
          {logo}
        </Box>
        <Text
          pl={['15px', '15px', '20px']}
          bgGradient={isActive ? 'linear(#CD7312, #FBC850)' : 'linear(#FFFFFF, #FFFFFF)'}
          bgClip="text"
          fontSize={['18px', '18px', '20px', '20px']}
          fontWeight="700"
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
