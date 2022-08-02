import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import { Button } from '..';
import { blueButton } from '../../constants';

type BalanceCardPropsType = {
  leftTopText: string;
  leftBottomText: string;
  rightBottomText: string;
};

export const BalanceCard: React.FC<BalanceCardPropsType & FlexProps> = (props) => {
  const { rightBottomText, leftTopText, leftBottomText } = props;
  return (
    <Flex
      justifyContent="space-between"
      // my={['10px', null, '24px']}
      // mx={['12px', null, '20px']}
      p="12px"
      alignItems={['flex-end']}
      bgColor="rgba(255, 255, 255, 0.1)"
      {...props}
    >
      <Flex flexDirection="column">
        <Text pb={['10px', null, '20px']} fontSize={['16px', null, '18px']}>
          {leftTopText}
        </Text>
        <Text fontSize={['16px', null, '24px']}>{leftBottomText}</Text>
      </Flex>
      <Button text="Max" colors={blueButton} w="60x" h="22px" fontSize={['16px', null, '18px']} />
      <Flex flexDirection="column">
        <Text pb={['10px', null, '28px']} fontSize={['16px', null, '18px']}>
          Balance: 0
        </Text>
        <Text fontSize={['16px', null, '18px']}>{rightBottomText}</Text>
      </Flex>
    </Flex>
  );
};
