/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Flex, IconButton, Image, Text, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { burgerBackground, mainBackground } from '../../constants';
import ImageRuby from '../../assets/images/ruby.png';
import ImageShip from '../../assets/images/ship.png';
import ImageBasket from '../../assets/images/basket.png';
import { ConnectAddress, ConnectButton } from '../../components';
import { rpcService } from '../../services';

export type HeaderProps = {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
};

const headerImages = [
  {
    image: ImageRuby,
    value: 123123,
    id: 1,
  },
  {
    image: ImageShip,
    value: 1231212333,
    id: 2,
  },
  {
    image: ImageBasket,
    value: 12312,
    id: 3,
  },
];

export const Header: React.FC<HeaderProps> = ({ showSidebarButton, onShowSidebar }) => {
  const [userAddress, setUserAddress] = useState<string>('');

  const connect = async () => {
    rpcService
      .connectToWallet()
      .then((address: string | undefined) => address && setUserAddress(address));
  };

  useEffect(() => {
    rpcService
      .checkIfWalletIsConnected()
      .then((address: string | undefined) => address && setUserAddress(address));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex w="100%" bg={mainBackground} h="10vh" alignItems="center" justifyContent="space-between">
      {showSidebarButton ? (
        <IconButton
          icon={<HamburgerIcon w={8} h={8} />}
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={onShowSidebar}
          aria-label="Search database"
          bg={burgerBackground}
          mx="30px"
          color={mainBackground}
        />
      ) : (
        <Box width="260px" />
      )}
      {!showSidebarButton && (
        <Flex w="60%" justifyContent="space-around">
          {headerImages.map((i) => (
            <Flex alignItems="center" key={i.id}>
              <Image src={i.image} alt="Ruby" w="35px" />
              <Text fontSize="25px" color="white" paddingLeft="10px">
                {i.value}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
      {userAddress ? (
        <ConnectAddress userAddress={userAddress} />
      ) : (
        <ConnectButton onClick={connect} />
      )}
    </Flex>
  );
};
