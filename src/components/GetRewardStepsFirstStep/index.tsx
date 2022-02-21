import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Button, Input } from '..';
import { blueButton, darkBlue } from '../../constants';

export const GetRewardStepsFirstStep: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      w={['100%', '50%']}
      borderRadius="3px"
      fontWeight="400"
      fontStyle="normal"
      color="white"
      border="3px solid"
      borderColor="transparent"
      background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(#CD7312, #FBC850) border-box`}
    >
      <Flex
        flexDirection="column"
        pb="15px"
        pt="20px"
        borderBottom="3px solid"
        borderColor="transparent"
        background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
        px={['12px', null, '20px']}
      >
        <Text fontSize={['16px', '24px']} fontWeight="700">
          PShare stacked
        </Text>
        <Flex pt="0px" pb="10px" fontWeight="400" alignItems="center">
          <Text fontSize={['14px', '18px']}>18.00875</Text>
          <Text pl={['5px', '9px']} fontSize="14px">
            ~ 175.45 USD
          </Text>
        </Flex>
        <Input placeholder="Enter number" />
      </Flex>

      <Flex flexDirection="column" alignItems="center" p={['20px 12px', '20px']}>
        <Text fontSize={['14px', '18px']} fontWeight="400">
          Your $Pure Earned
        </Text>
        <Text my={['10px', '15px']} fontSize={['16px', '24px']} fontWeight="700">
          19523 PURE
        </Text>
        <Text pb={['20px', '24px']} fontSize={['14px', '18px']} fontWeight="400">
          = $23287,23
        </Text>
        <Button text="Stack LP" colors={blueButton} />
      </Flex>
    </Flex>
  );
};
