import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GetPhareCard, GetPShareZeroStep, StackLPTokensModal } from '../../components';
import { GetPShareFirstStep } from '../../components/GetPShareFirstStep';
import { ObjectTypeGeneric } from '../../types';

export const GetPShareSteps: React.FC = () => {
  const [stepRuby, setStepRuby] = useState<number>(3);
  const [stepShip, setStepShip] = useState<number>(0);

  const handleChangeStep = (v: number) => () => setStepRuby(v);

  const rubyChildren: ObjectTypeGeneric<React.ReactNode> = {
    0: <GetPShareZeroStep />,
    1: <GetPShareFirstStep buttonText="Approve Pure-USDC LP" />,
    2: <GetPShareFirstStep buttonText="Stack LP" />,
  };
  return (
    <>
      <Flex
        w="100%"
        flexDirection={['column', null, 'row']}
        justifyContent="space-between"
        flexWrap="wrap"
        mt={['0px', null, '45px']}
      >
        <GetPhareCard
          type="ruby"
          w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*25px)']}
          minW="300px"
          m={['35px 0 0', null, '0 0 25px']}
          leftIcon={Boolean(stepRuby)}
        >
          {rubyChildren[stepRuby]}
        </GetPhareCard>
        <GetPhareCard
          type="ship"
          w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*25px)']}
          minW="300px"
          m={['35px 0 0', null, '0 0 25px']}
          leftIcon={Boolean(stepShip)}
        >
          <GetPShareZeroStep />
        </GetPhareCard>
      </Flex>
      {stepRuby === 3 && <StackLPTokensModal />}
    </>
  );
};
