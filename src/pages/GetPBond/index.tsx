import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PageHeader, PBondCard } from '../../components';

const getPBondValue = [
  {
    header: 'Last-Hour PWAP Price',
    value: 'PURE = 0.9829 USDC',
  },
  {
    header: 'Current Price',
    value: 'PBOND= 0.98 USDC',
  },
];

const GetPBond: React.FC = () => {
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
      <PageHeader text="How to get PBond?" />
      <Flex
        w="100%"
        flexWrap="wrap"
        justifyContent="space-between"
        mb={['15px', null, '0']}
        mt={['15px', null, '25px']}
      >
        {getPBondValue.map((i, index) => (
          <PBondCard
            key={index}
            header={i.header}
            value={i.value}
            w={['100%', '100%', 'calc(1/2*100% - (1 - 1/2)*25px)']}
            minW="100px"
            m={['0 0 3px', '0 0 3px', '0 0 5px', '0 0 15px']}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default GetPBond;
