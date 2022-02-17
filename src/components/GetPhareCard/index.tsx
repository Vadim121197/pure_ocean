/* eslint-disable no-template-curly-in-string */
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import { Button } from '..';
import { IconRuby, IconUSDC } from '../../assets/icons';
import { blueHover, bluePressed, darkBlue, goldDisabled, lightBlue } from '../../constants';
import { useBreakpointValueHook } from '../../hooks';

export const GetPhareCard: React.FC<FlexProps> = (props) => {
  const variants = useBreakpointValueHook();
  const isMobile = variants?.isMobile;
  return (
    <Flex
      flexDirection="column"
      alignItems={['none', null, 'center']}
      bgColor={darkBlue}
      w="100%"
      borderRadius="3px"
      fontWeight="bold"
      fontStyle="normal"
      color="white"
      px={['12px', null, '20px']}
      pb={['20px', null, '25px']}
      border="3px solid"
      borderColor="#CD7312"
      {...props}
    >
      <Box
        bgColor="white"
        position="absolute"
        mt="-20px"
        mb="20px"
        w={['50px', null, '70px']}
        h={['50px', null, '70px']}
        borderRadius="50%"
        px={['0', null, '3px']}
        py={['0', null, '3px']}
      >
        <IconRuby width={isMobile ? '50px' : '60px'} height={isMobile ? '50px' : '60px'} />
      </Box>
      <Box
        bgColor="white"
        position="absolute"
        mt="-20px"
        mb="20px"
        w={['50px', null, '70px']}
        h={['50px', null, '70px']}
        borderRadius="50%"
        ml={['40px', null, '110px']}
        border="2px solid"
        borderColor="#CD7312"
        px={['2px', null, '3px']}
        py={['2px', null, '3px']}
      >
        <IconUSDC width={isMobile ? '43px' : '60px'} height={isMobile ? '43px' : '60px'} />
      </Box>
      <Flex
        w="100%"
        flexDirection={['row', null, 'column']}
        alignItems={['flex-end', null, 'center']}
        justifyContent="space-between"
        mt={['45px', null, '60px']}
        mb={['23px', null, '25px']}
      >
        <Flex flexDirection="column" alignItems={['flex-start', null, 'center']}>
          <Text
            fontSize={['14px', null, '18px']}
            fontWeight={['400', null, 'bold']}
            color={['white', null, '#BABAE1']}
            mb={['5px', null, '25px']}
          >
            Stack LP
          </Text>
          <Text fontSize={['16px', null, '24px']}>Pure + USDC</Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={['flex-start', null, 'center']}
          mt={['0px', null, '30px']}
        >
          <Text fontSize="14px" fontWeight="normal">
            Deposit:
          </Text>
          <Text fontSize="14px" fontWeight="normal" my={['5px', null, '10px']}>
            Pure + USDC Earn PShare
          </Text>
          <Text fontSize="14px">300% APR</Text>
        </Flex>
      </Flex>
      <Button
        text="Get $PShare"
        colors={{
          main: lightBlue,
          hover: blueHover,
          active: bluePressed,
          disabled: goldDisabled,
        }}
      />
    </Flex>
  );
};
