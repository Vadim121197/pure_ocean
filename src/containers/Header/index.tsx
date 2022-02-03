import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { mainBackground } from '../../constants';
import ImageRuby from '../../assets/images/ruby.png';
import ImageShip from '../../assets/images/ship.png';
import ImageBasket from '../../assets/images/basket.png';

export const Header: React.FC = (props) => {
  return (
    <Flex
      w="100%"
      bg={mainBackground}
      h="156px"
      {...props}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex w="60%" justifyContent="space-around" {...props}>
        <Flex alignItems="center">
          <Image src={ImageRuby} alt="Ruby" boxSize="80px" objectFit="cover" />
          <Text fontSize="66px" color="white" paddingLeft="10px">
            0
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Image src={ImageShip} alt="Ruby" boxSize="70px" objectFit="cover" />
          <Text fontSize="66px" color="white" paddingLeft="10px">
            0
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Image src={ImageBasket} alt="Ruby" boxSize="80px" objectFit="cover" />
          <Text fontSize="66px" color="white" paddingLeft="10px">
            0
          </Text>
        </Flex>
      </Flex>
      <Button
        bg="#EFAE2E"
        height="78px"
        border="none"
        mx="30px"
        fontSize="48px"
        px="10px"
        onClick={() => console.log('asd')}
      >
        Connect Wallet
      </Button>
    </Flex>
  );
};
