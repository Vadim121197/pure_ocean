import { AspectRatio, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { GetPhareCard } from '../../components';
import { darkBlue } from '../../constants';

export const GetShare: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="100%"
      fontWeight="bold"
      fontStyle="normal"
      color="white"
      p={['15px 10px 30px', null, '50px 50px 70px']}
    >
      <Text
        fontSize={['16px', null, '24px']}
        py={['15px', null, '13px']}
        bgColor={darkBlue}
        w="100%"
        textAlign="center"
        borderRadius="3px"
      >
        How to get a PSHARE?
      </Text>
      <Flex
        w="100%"
        flexDirection={['column', null, 'row']}
        justifyContent="space-between"
        flexWrap="wrap"
        mt={['0px', null, '45px']}
      >
        <GetPhareCard
          w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*25px)']}
          minW="300px"
          m={['35px 0 0', null, '0 0 25px']}
        />
        <GetPhareCard
          w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*25px)']}
          minW="300px"
          m={['35px 0 0', null, '0 0 25px']}
        />
      </Flex>
      <Text
        fontSize={['16px', null, '24px']}
        py={['15px', null, '13px']}
        bgColor={darkBlue}
        w="100%"
        textAlign="center"
        borderRadius="3px"
        mt={['15px', null, '25px']}
        mb={['15px', null, '50px']}
      >
        Tutorial:
      </Text>
      <AspectRatio w="100%" ratio={[16 / 9, null, 21 / 9]}>
        <iframe title="naruto" src="https://www.youtube.com/embed/oebE0cb86n8" />
      </AspectRatio>
    </Flex>
  );
};
