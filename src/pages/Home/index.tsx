import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { blueHover, bluePressed, darkBlue, goldDisabled, lightBlue, white } from '../../constants';
import { Button, PriceCard } from '../../components';
import { IconBasket, IconRuby, IconShip } from '../../assets/icons';
import { useBreakpointValueHook } from '../../hooks';

export const Home: React.FC = () => {
  const variants = useBreakpointValueHook();
  const isMobile = variants?.isMobile;

  const prices = [
    {
      header: 'Pure',
      icon: <IconRuby width={isMobile ? '35px' : '55px'} height={isMobile ? '35px' : '55px'} />,
      currentPrice: '0.9850',
      currentPriceDollar: '3.43',
      marketCap: '123456789',
      dynamicPrice: '123456789',
      totalSupply: '123456789',
    },
    {
      header: 'PShare',
      icon: <IconShip width={isMobile ? '35px' : '55px'} height={isMobile ? '35px' : '55px'} />,
      currentPrice: '0.9850',
      currentPriceDollar: '3.43',
      marketCap: '123456789',
      dynamicPrice: '123456789',
      totalSupply: '123456789',
    },
    {
      header: 'PBond',
      icon: <IconBasket width={isMobile ? '35px' : '55px'} height={isMobile ? '35px' : '55px'} />,
      currentPrice: '0.9850',
      currentPriceDollar: '3.43',
      marketCap: '123456789',
      dynamicPrice: '123456789',
      totalSupply: '123456789',
    },
  ];
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="100%"
      p={['15px 10px 30px', null, '50px 50px 70px']}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgColor={darkBlue}
        w="100%"
        py={['15px', null, '20px']}
        borderRadius="3px"
      >
        <Text fontSize={['16px', null, '24px']} fontWeight="700" color="white" mb="15px">
          0000.00 Pounds of plastic from the oceans
        </Text>
        <Text
          fontSize={['14px', null, '18px']}
          fontWeight="400"
          color="white"
          px="24px"
          textAlign="center"
        >
          Stack PShare and earn rewards in the first algorithmic stablecoin that save the Oceans
        </Text>
      </Flex>
      <Flex w="100%" flexWrap="wrap" justifyContent="space-between" my={['15px', null, '50px']}>
        {prices.map((i) => (
          <PriceCard
            data={i}
            w={['100%', null, 'calc(1/3*100% - (1 - 1/3)*20px)']}
            minW="300px"
            m={['0 0 3px', null, '0 0 20px']}
          />
        ))}
        {/* <PriceCard
          w={['100%', null, 'calc(1/3*100% - (1 - 1/3)*20px)']}
          minW="300px"
          m={['0 0 3px', null, '0 0 20px']}
        />
        <PriceCard
          w={['100%', null, 'calc(1/3*100% - (1 - 1/3)*20px)']}
          minW="300px"
          m={['0 0 3px', null, '0 0 20px']}
        />
        <PriceCard
          w={['100%', null, 'calc(1/3*100% - (1 - 1/3)*20px)']}
          minW="300px"
          m={['0 0 3px', null, '0 0 20px']}
        /> */}
      </Flex>
      <Text
        fontSize={['16px', null, '18px']}
        fontWeight="700"
        color="white"
        py={['15px', null, '18px']}
        bgColor={darkBlue}
        w="100%"
        textAlign="center"
        borderRadius="3px"
        mb={['15px', null, '25px']}
      >
        Dynamic number: $123.456.78
      </Text>
      <Flex
        flexDirection={['column', null, 'row']}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box mr={['0px', null, '15px']} mb={['8px', null, '0px']} w={['100%', 'auto', 'auto']}>
          <Button
            text="Get $PShare"
            colors={{
              main: lightBlue,
              hover: blueHover,
              active: bluePressed,
              disabled: goldDisabled,
            }}
          />
        </Box>
        <Box w={['100%', 'auto', 'auto']}>
          <Button
            text="Stack $PShare"
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
