/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Flex, IconButton, Text, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { lightBlue, darkBlue, gold, goldHover, goldPressed, goldDisabled } from '../../constants';
// import { rpcService } from '../../services';
import { IconBasket, IconLogoHeader, IconRuby, IconShip } from '../../assets/icons';
import { Button } from '../../components';

export type HeaderProps = {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
};

export const headerImages = [
  {
    image: <IconRuby />,
    value: 1231231,
    id: 1,
  },
  {
    image: <IconShip />,
    value: 123,
    id: 2,
  },
  {
    image: <IconBasket />,
    value: 123123,
    id: 3,
  },
];

export const Header: React.FC<HeaderProps> = ({ showSidebarButton, onShowSidebar }) => {
  // const [userAddress, setUserAddress] = useState<string>('');

  const connect = async () => {
    // rpcService
    //   .connectToWallet()
    //   .then((address: string | undefined) => address && setUserAddress(address));
  };

  useEffect(() => {
    // rpcService
    //   .checkIfWalletIsConnected()
    //   .then((address: string | undefined) => address && setUserAddress(address));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex w="100%" bg={darkBlue} h="100%" alignItems="center" justifyContent="space-between">
      {showSidebarButton ? (
        <IconButton
          icon={<HamburgerIcon w={8} h={8} />}
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={onShowSidebar}
          aria-label="Search database"
          bg={lightBlue}
          mx="30px"
          color={darkBlue}
        />
      ) : (
        <Box ml="50px">
          <IconLogoHeader />
        </Box>
      )}
      {!showSidebarButton && (
        <Flex w="60%" justifyContent="space-around">
          {headerImages.map((i) => (
            <Flex alignItems="center" key={i.id}>
              {i.image}
              <Text fontSize="24px" color="white" paddingLeft="10px" fontWeight="700">
                {i.value}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
      {/* {userAddress ? (
        <ConnectAddress userAddress={userAddress} />
      ) : ( */}
      {/* <ConnectButton onClick={connect} /> */}
      <Box mr="50px">
        <Button
          text="Connect wallet"
          px="10px"
          colors={{
            main: gold,
            hover: goldHover,
            active: goldPressed,
            disabled: goldDisabled,
          }}
        />
      </Box>
      {/* )} */}
    </Flex>
  );
};
