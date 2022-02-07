import { Button } from '@chakra-ui/react';
import React from 'react';

export type ConnectButtonProps = {
  onClick: () => void;
};

export const ConnectButton: React.FC<ConnectButtonProps> = ({ onClick }) => {
  return (
    <Button
      bg="#EFAE2E"
      height="40px"
      border="none"
      mx="30px"
      fontSize={['10px', '15px', '20px']}
      px="10px"
      onClick={onClick}
    >
      Connect Wallet
    </Button>
  );
};
