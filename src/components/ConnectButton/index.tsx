import { Button } from '@chakra-ui/react';
import React from 'react';
import { darkBlue, disableText, gold, goldDisabled, goldHover, goldPressed } from '../../constants';

export type ConnectButtonProps = {
  onClick: () => void;
};

export const ConnectButton: React.FC<ConnectButtonProps> = ({ onClick }) => {
  return (
    <Button
      bg={gold}
      borderRadius="5px"
      mr="50px"
      fontSize="18px"
      p="20px 10px"
      onClick={onClick}
      color={darkBlue}
      _hover={{ bg: goldHover }}
      _active={{ bg: goldPressed, borderColor: 'red' }}
      _disabled={{ bg: goldDisabled, color: disableText }}
    >
      Connect wallet
    </Button>
  );
};
