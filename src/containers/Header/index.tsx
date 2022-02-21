/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Flex, IconButton, Box } from '@chakra-ui/react';
import { darkBlue, goldButton } from '../../constants';
// import { rpcService } from '../../services';
import { IconClose, IconLogoHeader, IconMenu } from '../../assets/icons';
import { Button, HeaderItems } from '../../components';

export type HeaderProps = {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
  isOpen: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isOpen, showSidebarButton, onShowSidebar }) => {
  // const [userAddress, setUserAddress] = useState<string>('');

  // const connect = async () => {
  // rpcService
  //   .connectToWallet()
  //   .then((address: string | undefined) => address && setUserAddress(address));
  // };

  useEffect(() => {
    // rpcService
    //   .checkIfWalletIsConnected()
    //   .then((address: string | undefined) => address && setUserAddress(address));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      w="100%"
      bg={darkBlue}
      h="100%"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      zIndex="100"
    >
      {!showSidebarButton && (
        <Box ml="50px">
          <IconLogoHeader />
        </Box>
      )}
      <Flex w={['100%', '100%', '100%', '60%']} justifyContent="space-around">
        {showSidebarButton ? (
          !isOpen ? (
            <IconButton
              icon={<IconMenu />}
              onClick={onShowSidebar}
              aria-label="Search database"
              bg={darkBlue}
            />
          ) : (
            <IconButton
              mt="5px"
              w="30px"
              h="30px"
              aria-label="Close modal"
              icon={<IconClose />}
              bgColor={darkBlue}
              onClick={onShowSidebar}
              variant="unstyled"
            />
          )
        ) : (
          <></>
        )}
        <HeaderItems />
      </Flex>
      {!showSidebarButton && (
        <Box mr="50px">
          <Button text="Connect wallet" px="10px" colors={goldButton} />
        </Box>
      )}
    </Flex>
  );
};
