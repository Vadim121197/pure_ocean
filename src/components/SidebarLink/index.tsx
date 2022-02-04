import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

export type SidebarLinkProps = {
  text: string;
  to: string;
  logo: React.SVGProps<SVGSVGElement>;
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({ text, to, logo }) => {
  return (
    <Link as={RouteLink} to={to} textAlign="start" padding="10px 0">
      <Flex alignItems="center">
        <Box w="25px" marginEnd="5px">
          {logo}
        </Box>
        <Text color="white" fontSize="20px">
          {text}
        </Text>
      </Flex>
    </Link>
  );
};
