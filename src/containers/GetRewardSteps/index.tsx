import { Flex, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  GetRewardStepsFirstStep,
  GetRewardStepsSecondStep,
  StackLPTokensModal,
} from '../../components';
import { ObjectTypeGeneric } from '../../types';

export const GetRewardSteps: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [step, setStep] = useState<number>(1);

  const handleCloseModal = () => onClose();

  const handleChangeStep = (v?: number) => () => {
    if (!v) return;
    setStep(v);
    if (v === 3) handleCloseModal();
  };

  const handleOpenModal = () => () => onOpen();

  const rewardChildren: ObjectTypeGeneric<React.ReactNode> = {
    0: <GetRewardStepsFirstStep onButtonClick={handleChangeStep} />,
    1: (
      <GetRewardStepsSecondStep
        buttonText="Approve PShare"
        onButtonClick={handleChangeStep}
        nextStep={2}
      />
    ),
    2: <GetRewardStepsSecondStep buttonText="Stack PShare" onButtonClick={handleOpenModal} />,
    3: <GetRewardStepsSecondStep rightHeaderValue="3.000" />,
  };
  return (
    <>
      <Flex w="100%" mt={['15px', '50px']} justifyContent="center">
        {rewardChildren[step]}
      </Flex>
      {isOpen && (
        <StackLPTokensModal
          isOpen={isOpen}
          headerText="Stack PShare"
          textContent="PShare"
          onClose={handleCloseModal}
          handleChangeStep={handleChangeStep}
        />
      )}
    </>
  );
};
