import { Box } from '@chakra-ui/react';
import React from 'react';
import { darkBlue } from '../../constants';

export type BoxWithTextProps = {
  text: string;
};

export const BoxWithText: React.FC<BoxWithTextProps> = ({ text }) => {
  return (
    <Box
      bg={darkBlue}
      color="white"
      fontSize={['25px', null, '35px']}
      w="100%"
      p="25px 10px"
      textAlign="center"
    >
      {text}
    </Box>
  );
};
