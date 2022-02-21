import { Flex, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  GetPhareCard,
  GetPShareZeroStep,
  PhareCardType,
  StackLPTokensModal,
} from '../../components';
import { GetPShareFirstStep } from '../../components/GetPShareFirstStep';
import { GetPShareStepsProvider } from '../../context/GetPShareStepsContext';
import { ObjectTypeGeneric } from '../../types';

export const GetPShareSteps: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState<{ ruby: number; ship: number }>({ ruby: 0, ship: 0 });
  const [openModal, setOpenModal] = useState<PhareCardType | null>(null);

  const handleCloseModal = () => {
    setOpenModal(null);
    onClose();
  };

  const handleChangeStep = (v: number, type: PhareCardType) => () => {
    setStep((state) => ({ ...state, [type]: v }));
    if (v === 3) handleCloseModal();
  };

  const handleOpenModal = (v: number, type: PhareCardType) => () => {
    setOpenModal(type);
    onOpen();
  };

  const rubyChildren: ObjectTypeGeneric<React.ReactNode> = {
    0: <GetPShareZeroStep handleChangeStep={handleChangeStep} />,
    1: <GetPShareFirstStep buttonText="Approve Pure-USDC LP" onButtonClick={handleChangeStep} />,
    2: <GetPShareFirstStep buttonText="Stack LP" onButtonClick={handleOpenModal} />,
    3: <GetPShareFirstStep />,
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
        <GetPShareStepsProvider value={{ type: 'ruby' }}>
          <GetPhareCard
            type="ruby"
            w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*10px)', 'calc(1/2*100% - (1 - 1/2)*25px)']}
            minW="200px"
            m={['35px 0 0', null, '0 0 10px', '0 0 25px']}
            typeicon={step.ruby ? 'leftIcon' : 'centerIcon'}
          >
            {rubyChildren[step.ruby]}
          </GetPhareCard>
        </GetPShareStepsProvider>
        <GetPShareStepsProvider value={{ type: 'ship' }}>
          <GetPhareCard
            type="ship"
            w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*10px)', 'calc(1/2*100% - (1 - 1/2)*25px)']}
            minW="200px"
            m={['35px 0 0', null, '0 0 10px', '0 0 25px']}
            typeicon={step.ship ? 'leftIcon' : 'centerIcon'}
          >
            {rubyChildren[step.ship]}
          </GetPhareCard>
        </GetPShareStepsProvider>
      </Flex>
      {openModal && (
        <StackLPTokensModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          type={openModal}
          handleChangeStep={handleChangeStep}
        />
      )}
    </>
  );
};
