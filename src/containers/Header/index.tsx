import React from 'react';
import { Button, Flex, IconButton, Image, Text, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { burgerBackground, mainBackground } from '../../constants';
import ImageRuby from '../../assets/images/ruby.png';
import ImageShip from '../../assets/images/ship.png';
import ImageBasket from '../../assets/images/basket.png';

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

export const Header: React.FC<HeaderProps> = (props) => {
  const { showSidebarButton = true, onShowSidebar } = props;
  return (
    <Flex
      w="100%"
      bg={mainBackground}
      h="80px"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
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
        <Flex w="60%" justifyContent="space-around" {...props}>
          {headerImages.map((i) => {
            return (
              <Flex alignItems="center">
                <Image src={i.image} alt="Ruby" w="35px" />
                <Text fontSize="25px" color="white" paddingLeft="10px">
                  {i.value}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      )}
      <Button
        bg="#EFAE2E"
        height="40px"
        border="none"
        mx="30px"
        fontSize={['10px', '15px', '20px']}
        px="10px"
      >
        Connect Wallet
      </Button>
    </Flex>
  );
};
