import { Box, Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { darkBlue } from '../../constants';
import Money from '../../assets/images/money.png';

type PBondCardPropsType = {
  header: string;
  value: string;
};

export const PBondCard: React.FC<PBondCardPropsType & FlexProps> = (props) => {
  const { header, value } = props;
  return (
    <Flex
      flexDirection="row"
      alignItems={['center']}
      justifyContent={['flex-start', 'center']}
      bgColor={darkBlue}
      p={['15px 12px', '20px']}
      borderRadius="3px"
      fontStyle="normal"
      {...props}
    >
      <Box w={['46px', '60px']} mr={['8px', '20px']}>
        <Image src={Money} alt="money" />
      </Box>
      <Flex flexDirection={['column', null, 'column']}>
        <Text fontSize={['14px', '18px']} fontWeight={['400', '700']} mb={['8px', '15px']}>
          {header}
        </Text>
        <Text fontSize={['16px', '24px']} fontWeight={['700']}>
          {value}
        </Text>
      </Flex>
    </Flex>
  );
};
