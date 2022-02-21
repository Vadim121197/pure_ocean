import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GetRewardStepsFirstStep } from '../../components';
import { ObjectTypeGeneric } from '../../types';

export const GetRewardSteps: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const rewardChildren: ObjectTypeGeneric<React.ReactNode> = {
    0: <GetRewardStepsFirstStep />,
    // 1: <GetPShareFirstStep buttonText="Approve Pure-USDC LP" onButtonClick={handleChangeStep} />,
    // 2: <GetPShareFirstStep buttonText="Stack LP" onButtonClick={handleOpenModal} />,
    // 3: <GetPShareFirstStep />,
  };
  return (
    <Flex w="100%" mt={['15px']} justifyContent="center">
      {rewardChildren[step]}
    </Flex>
  );
};
