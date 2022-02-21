import { AspectRatio, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { PageHeader } from '../../components';
import { darkBlue } from '../../constants';
import { GetPShareSteps } from '../../containers';

const GetPShare: React.FC = () => {
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
      <PageHeader text="How to get a PSHARE?" />
      <GetPShareSteps />
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

export default GetPShare;
