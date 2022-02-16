/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Flex, IconButton, Text, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { lightBlue, darkBlue, gold, goldHover, goldPressed, goldDisabled } from '../../constants';
// import { rpcService } from '../../services';
import { IconBasket, IconLogoHeader, IconMenu, IconRuby, IconShip } from '../../assets/icons';
import { Button } from '../../components';

export type HeaderProps = {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
};

export const headerImages = [
  {
    image: <IconRuby />,
    value: 0,
    id: 1,
  },
  {
    image: <IconShip />,
    value: 0,
    id: 2,
  },
  {
    image: <IconBasket />,
    value: 0,
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
      {!showSidebarButton && (
        <Box ml="50px">
          <IconLogoHeader />
        </Box>
      )}
      {showSidebarButton && (
        <Flex w={['100%', '100%', '60%']} justifyContent="space-around">
          {showSidebarButton && (
            <IconButton
              icon={<IconMenu />}
              onClick={onShowSidebar}
              aria-label="Search database"
              bg={darkBlue}
            />
          )}
          {headerImages.map((i) => (
            <Flex alignItems="center" key={i.id}>
              {i.id === 1 && (
                <IconRuby
                  width={showSidebarButton ? '35px' : '30px'}
                  height={showSidebarButton ? '35px' : '30px'}
                />
              )}
              {i.id === 2 && (
                <IconShip
                  width={showSidebarButton ? '35px' : '30px'}
                  height={showSidebarButton ? '35px' : '30px'}
                />
              )}
              {i.id === 3 && (
                <IconBasket
                  width={showSidebarButton ? '35px' : '30px'}
                  height={showSidebarButton ? '35px' : '30px'}
                />
              )}
              <Text
                fontSize={['14px', null, '24px']}
                color="white"
                paddingLeft="10px"
                fontWeight="bold"
              >
                {i.value}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
      {!showSidebarButton && (
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
      )}
    </Flex>
  );
};
