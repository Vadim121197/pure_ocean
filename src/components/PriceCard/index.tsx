import React from 'react';
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import { IconRuby } from '../../assets/icons';
import { darkBlue } from '../../constants';

export const PriceCard: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bgColor={darkBlue}
      borderRadius="5px"
      color="white"
      p="30px 5px"
      fontStyle="normal"
      fontWeight="bold"
      {...props}
    >
      <Text fontSize="24px">Pure</Text>
      <Box m="18px 0 30px 0">
        <IconRuby width="55px" height="55px" />
      </Box>
      <Text fontSize="14px" fontWeight="normal">
        Current price:
      </Text>
      <Text fontSize="18px" m="10px 0">
        0.9850 USDC
      </Text>
      <Text fontSize="24px" mb="10px">
        $2.43
      </Text>
      <Text fontSize="14px">Market Cap: 123456789</Text>
      <Text fontSize="14px" m="5px 0">
        Dynamic price: $123456789
      </Text>
      <Text fontSize="14px">Total Supply: 123456789 </Text>
    </Flex>
  );
};
