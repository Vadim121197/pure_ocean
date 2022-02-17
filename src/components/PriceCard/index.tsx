import React from 'react';
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import { darkBlue } from '../../constants';

type PriceCardProps = {
  data: {
    header: string;
    icon: React.SVGProps<SVGSVGElement>;
    currentPrice: string;
    marketCap: string;
    currentPriceDollar: string;
    dynamicPrice: string;
    totalSupply: string;
  };
};

export const PriceCard: React.FC<PriceCardProps & FlexProps> = (props) => {
  const { data } = props;
  return (
    <Flex
      flexDirection="column"
      bgColor={darkBlue}
      borderRadius="5px"
      color="white"
      p={['15px 9px 15px 12px', null, '30px 5px']}
      fontStyle="normal"
      fontWeight="bold"
      {...props}
    >
      <Flex flexDirection={['row', null, 'column']} m={['0 -5px', null, '0px']} w="100%">
        <Flex
          flexDirection={['row-reverse', null, 'column']}
          alignItems="center"
          justifyContent="center"
          bgColor={['rgba(255, 255, 255, 0.1)', null, 'transparent']}
          flex={['1 1 auto', null, null]}
          m={['0 5px', null, '0px']}
        >
          <Text fontSize={['16px', null, '24px']}>{data.header}</Text>
          <Box m={['0px', null, '18px 0 30px 0']}>{data.icon}</Box>
        </Flex>
        <Flex
          flexDirection={['column', null, 'column']}
          alignItems="center"
          bgColor={['rgba(255, 255, 255, 0.1)', null, 'transparent']}
          flex={['1 1 auto', null, null]}
          m={['0 5px', null, '0px']}
        >
          <Text fontSize="14px" fontWeight="normal">
            Current price:
          </Text>
          <Text fontSize={['16px', null, '18px']} m={['5px 0 0 0', null, '10px 0']}>
            {data.currentPrice} USDC
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          flex={['1 1 auto', null, null]}
          bgColor={['rgba(255, 255, 255, 0.1)', null, 'transparent']}
          m={['0 0 0  5px', null, '0px']}
        >
          <Text fontSize={['16px', null, '14px']}>${data.currentPriceDollar}</Text>
        </Flex>
      </Flex>
      <Text fontSize="14px" textAlign="center" mt={['15px', null, '10px']}>
        Market Cap: {data.marketCap}
      </Text>
      <Text fontSize="14px" m="5px 0" textAlign="center">
        Dynamic price: ${data.dynamicPrice}
      </Text>
      <Text fontSize="14px" textAlign="center">
        Total Supply: {data.totalSupply}
      </Text>
    </Flex>
  );
};
