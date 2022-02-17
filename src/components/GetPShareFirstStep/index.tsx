import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Button } from '..';
import { blueButton, darkBlue, greyColor, whiteButton } from '../../constants';

type GetPShareFirstStepPropsType = {
  buttonText: string;
};

export const GetPShareFirstStep: React.FC<GetPShareFirstStepPropsType> = ({ buttonText }) => {
  return (
    <Flex w="100%" flexDirection="column" fontWeight="700">
      <Flex
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-between"
        py={['15px', null, '20px']}
      >
        <Text fontSize={['16px', null, '18px']}>ARP:</Text>
        <Flex flexDirection="column" alignItems="flex-end">
          <Text fontSize={['16px', null, '24px']}>Pure + USDC</Text>
          <Text mt={['10px']} fontSize={['16px', null, '24px']}>
            3126%
          </Text>
        </Flex>
      </Flex>
      <Flex
        ml={['-12px', null, '-20px']}
        w={['calc(100% + 24px)', null, 'calc(100% + 40px)']}
        flexDirection="column"
        alignItems="center"
        borderTop="3px solid"
        borderBottom="3px solid"
        borderColor="transparent"
        background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
        p={['15px 12px 20px', null, '15px 20px 20px']}
      >
        <Text mb="15px" fontSize={['16px', null, '18px']}>
          Pure - USDC LP Stacked
        </Text>
        <Button text={buttonText} colors={blueButton} />
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems={['center', null, '']}
        p={['15px 0 0px', null, '']}
      >
        <Flex flexDirection="column">
          <Text
            pb={['5px', null, '10px']}
            fontSize={['16px', null, '24px']}
            color={['white', null, greyColor]}
          >
            Pshare earned
          </Text>
          <Text fontSize={['16px', null, '24px']}>0.000</Text>
        </Flex>
        <Box w={['30%', null, '']}>
          <Button text="Claim" colors={whiteButton} h="41px" disabled />
        </Box>
      </Flex>
    </Flex>
  );
};
