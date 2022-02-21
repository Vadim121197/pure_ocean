import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import { darkBlue } from '../../constants';

type RewardCardPropsType = {
  header: string;
  value: string;
};

export const RewardCard: React.FC<RewardCardPropsType & FlexProps> = (props) => {
  const { header, value } = props;
  return (
    <Flex
      flexDirection={['column', null, 'column']}
      alignItems={['center']}
      bgColor={darkBlue}
      py={['15px', '20px']}
      borderRadius="3px"
      fontStyle="normal"
      {...props}
    >
      <Text pb={['10px']} fontSize={['14px', '18px']} fontWeight={['400', '700']}>
        {header}
      </Text>
      <Text fontSize={['16px', '24px']} fontWeight={['700']}>
        {value}
      </Text>
    </Flex>
  );
};
