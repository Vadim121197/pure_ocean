import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { darkBlue, lightBlue } from '../../constants';

export const Home: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="100%"
      justifyContent="space-between"
      px="50px"
      pt="50px"
      pb="100px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        bgColor={darkBlue}
        w="100%"
        py="20px"
        borderRadius="5px"
      >
        <Text fontSize="24px" fontWeight="700" color="white" mb="15px">
          0000.00 Pounds of plastic from the oceans
        </Text>
        <Text fontSize="18px" fontWeight="400" color="white">
          Stack PShare and earn rewards in the first algorithmic stablecoin that save the Oceans
        </Text>
      </Flex>
      <Flex alignItems="center" bgColor={darkBlue} w="100%" h="328px" py="20px" borderRadius="5px">
        asd
      </Flex>
      <Text
        fontSize="18px"
        fontWeight="700"
        color="white"
        py="18px"
        bgColor={darkBlue}
        w="100%"
        textAlign="center"
        borderRadius="5px"
      >
        Dynamic number: $123.456.789
      </Text>
      <Flex w="100%">
        <Button
          w="50%"
          fontSize="18px"
          fontWeight="700"
          bg={lightBlue}
          color={darkBlue}
          borderRadius="5px"
          mr="25px"
        >
          Get $PShare ️
        </Button>
        <Button
          w="50%"
          fontSize="18px"
          fontWeight="700"
          bg={lightBlue}
          color={darkBlue}
          borderRadius="5px"
        >
          Stack $PShare ️️
        </Button>
      </Flex>
      {/* <BoxWithText text="Total Value Locked : $929,191,416" />
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
        </Button> */}
      {/* </Flex> */}
    </Flex>
  );
};
