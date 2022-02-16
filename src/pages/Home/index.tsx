import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { blueHover, bluePressed, darkBlue, goldDisabled, lightBlue, white } from '../../constants';
import { Button, PriceCard } from '../../components';
import { IconBasket, IconRuby, IconShip } from '../../assets/icons';

const prices = [
  {
    header: 'Pure',
    icon: <IconRuby width="55px" height="55px" />,
    currentPrice: '0.9850',
    marketCap: '123456789',
    dynamicPrice: '123456789',
    totalSupply: '123456789',
  },
  {
    header: 'Pure',
    icon: <IconShip width="55px" height="55px" />,
    currentPrice: '0.9850',
    marketCap: '123456789',
    dynamicPrice: '123456789',
    totalSupply: '123456789',
  },
  {
    header: 'Pure',
    icon: <IconBasket width="55px" height="55px" />,
    currentPrice: '0.9850',
    marketCap: '123456789',
    dynamicPrice: '123456789',
    totalSupply: '123456789',
  },
];

export const Home: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="100%"
      justifyContent="space-between"
      px="50px"
      pt="50px"
      pb="70px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        bgColor={darkBlue}
        w="100%"
        py="20px"
        borderRadius="12px"
      >
        <Text fontSize="24px" fontWeight="700" color="white" mb="15px">
          0000.00 Pounds of plastic from the oceans
        </Text>
        <Text fontSize="18px" fontWeight="400" color="white">
          Stack PShare and earn rewards in the first algorithmic stablecoin that save the Oceans
        </Text>
      </Flex>
      <Flex w="100%" flexWrap="wrap" justifyContent="space-between" my="50px">
        <PriceCard w="calc(1/3*100% - (1 - 1/3)*20px)" minW="300px" m="0 0 20px" />
        <PriceCard w="calc(1/3*100% - (1 - 1/3)*20px)" minW="300px" m="0 0 20px" />
        <PriceCard w="calc(1/3*100% - (1 - 1/3)*20px)" minW="300px" m="0 0 20px" />
      </Flex>
      <Text
        fontSize="18px"
        fontWeight="700"
        color="white"
        py="18px"
        bgColor={darkBlue}
        w="100%"
        textAlign="center"
        borderRadius="6px"
        mb="25px"
      >
        Dynamic number: $123.456.78
      </Text>
      <Flex w="100%" alignItems="center" justifyContent="center">
        <Box mr="15px">
          <Button
            text="Get $PShare"
            px="20px"
            colors={{
              main: lightBlue,
              hover: blueHover,
              active: bluePressed,
              disabled: goldDisabled,
            }}
          />
        </Box>
        <Box>
          <Button
            text="Stack $PShare"
            px="20px"
            border="1px solid #08AAD9"
            colors={{
              main: white,
              hover: white,
              active: white,
              disabled: white,
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
