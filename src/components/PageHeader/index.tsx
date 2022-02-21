import { Text } from '@chakra-ui/react';
import React from 'react';
import { darkBlue } from '../../constants';

type PageHeaderPropsType = {
  text: string;
};

export const PageHeader: React.FC<PageHeaderPropsType> = ({ text }) => {
  return (
    <Text
      fontSize={['16px', null, '24px']}
      py={['15px', null, '13px']}
      bgColor={darkBlue}
      w="100%"
      textAlign="center"
      borderRadius="3px"
    >
      {text}
    </Text>
  );
};
