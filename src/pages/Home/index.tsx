import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { BoxWithText } from '../../components';
import { burgerBackground } from '../../constants';

export const Home: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      height="90vh"
      p="30px"
    >
      <BoxWithText text="0000.00 Pounds of plastic from the oceans" />
      <BoxWithText text="Total Value Locked : $929,191,416" />
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Button
          fontSize={['15px', null, '35px']}
          bg={burgerBackground}
          color="white"
          w="45%"
          p="50px 0"
        >
          Get $PShare
        </Button>
        <Button
          fontSize={['15px', null, '35px']}
          bg={burgerBackground}
          color="white"
          w="45%"
          p="50px 0"
        >
          Stack $PShare
        </Button>
      </Flex>
    </Flex>
  );
};
