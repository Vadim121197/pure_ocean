import React from 'react';

export type ConnectAddressProps = {
  userAddress: string;
};

export const ConnectAddress: React.FC<ConnectAddressProps> = ({ userAddress }) => {
  return <div>{userAddress}</div>;
};
