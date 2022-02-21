import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PageHeader, RewardCard } from '../../components';
import { GetRewardSteps } from '../../containers';

const getRewardValues = [
  {
    header: 'ARP',
    value: '357.33%',
  },
  {
    header: 'Next Reward',
    value: '03:48:19',
  },
  {
    header: '$Pure Price',
    value: '0.9850 USDC',
  },
];

const GetReward: React.FC = () => {
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
      <PageHeader text="Get reward" />
      <Flex
        w="100%"
        flexWrap="wrap"
        justifyContent="space-between"
        mb={['15px', null, '0']}
        mt={['15px', null, '25px']}
      >
        {getRewardValues.map((i, index) => (
          <RewardCard
            key={index}
            header={i.header}
            value={i.value}
            w={[
              '100%',
              '100%',
              'calc(1/3*100% - (1 - 1/3)*5px)',
              'calc(1/3*100% - (1 - 1/3)*20px)',
            ]}
            minW="100px"
            m={['0 0 3px', '0 0 3px', '0 0 5px', '0 0 15px']}
          />
        ))}
      </Flex>
      <RewardCard header="PShare Stucked" value="31,764.8081" w="100%" />
      <GetRewardSteps />
    </Flex>
  );
};

export default GetReward;
