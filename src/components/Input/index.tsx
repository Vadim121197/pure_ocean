import { Input as InputComponent, InputProps } from '@chakra-ui/react';
import React from 'react';

export const Input: React.FC<InputProps> = (props) => {
  return (
    <InputComponent
      w="100%"
      h="41px"
      color="black"
      bgColor="white"
      fontSize="18px"
      fontWeight="700"
      py="12px"
      pl="12px"
      border="none"
      variant="unstyled"
      _placeholder={{ fontSize: '14px', fontWeight: '400' }}
      {...props}
    />
  );
};
