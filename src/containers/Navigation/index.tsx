import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IconLogo } from '../../assets/icons';
import { mainBackground } from '../../constants';

const MenuItem = ({ children, isLast, to = '/', ...rest }: any) => {
  return (
    <Text {...rest}>
      <Link to={to}>{children}</Link>
    </Text>
  );
};

export const Navigation: React.FC = (props) => {
  return (
    <Flex
      justifyContent="flex-start"
      direction="column"
      bg={mainBackground}
      height="100vh"
      w="458px"
      {...props}
    >
      <Box h="83px" w="300px" padding="46px 0 46px 20px">
        <IconLogo />
      </Box>
      <MenuItem to="/" isLast={false}>
        Home
      </MenuItem>
      <MenuItem to="/how" isLast={false}>
        How It works{' '}
      </MenuItem>
      <MenuItem to="/faetures" isLast={false}>
        Features{' '}
      </MenuItem>
      <MenuItem to="/pricing" isLast={false}>
        Pricing{' '}
      </MenuItem>
    </Flex>
  );
};
