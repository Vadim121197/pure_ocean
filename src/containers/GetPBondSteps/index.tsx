import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GetPBondZeroStep, GetPhareCard } from '../../components';
import { ObjectTypeGeneric } from '../../types';

export const GetPBondSteps: React.FC = () => {
  const [step, setStep] = useState<{ pureToPBond: number; pBondToPure: number }>({
    pureToPBond: 0,
    pBondToPure: 0,
  });

  const handleChangeStep = (v: number, type: 'pureToPBond' | 'pBondToPure') => () =>
    setStep((state) => ({ ...state, [type]: v }));

  const childrens: ObjectTypeGeneric<React.ReactNode> = {
    0: <GetPBondZeroStep onButtonClick={handleChangeStep} />,
    1: <GetPBondZeroStep />,
  };

  return (
    <Flex
      w="100%"
      flexDirection={['column', null, 'row']}
      justifyContent="space-between"
      flexWrap="wrap"
      mt={['0px', null, '45px']}
    >
      <GetPhareCard
        type="ruby"
        w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*10px)', 'calc(1/2*100% - (1 - 1/2)*25px)']}
        minW="200px"
        m={['35px 0 0', null, '0 0 10px', '0 0 25px']}
        typeicon={step.pureToPBond ? 'leftIcon' : 'centerIcon'}
      >
        {childrens[step.pureToPBond]}
      </GetPhareCard>
      <GetPhareCard
        type="ruby"
        w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*10px)', 'calc(1/2*100% - (1 - 1/2)*25px)']}
        minW="200px"
        m={['35px 0 0', null, '0 0 10px', '0 0 25px']}
        typeicon={step.pureToPBond ? 'leftIcon' : 'centerIcon'}
      >
        {childrens[step.pBondToPure]}
      </GetPhareCard>
      {/* <GetPShareStepsProvider value={{ type: 'ruby' }}>
        <GetPhareCard
          type="ruby"
          w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*10px)', 'calc(1/2*100% - (1 - 1/2)*25px)']}
          minW="200px"
          m={['35px 0 0', null, '0 0 10px', '0 0 25px']}
          typeicon={step.pureToPBond ? 'leftIcon' : 'centerIcon'}
        >
          {rubyChildren[step.pureToPBond]}
        </GetPhareCard>
      </GetPShareStepsProvider> */}
      {/* <GetPShareStepsProvider value={{ type: 'ship' }}>
        <GetPhareCard
          type="ship"
          w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*10px)', 'calc(1/2*100% - (1 - 1/2)*25px)']}
          minW="200px"
          m={['35px 0 0', null, '0 0 10px', '0 0 25px']}
          typeicon={step.ship ? 'leftIcon' : 'centerIcon'}
        >
          {rubyChildren[step.ship]}
        </GetPhareCard>
      </GetPShareStepsProvider> */}
    </Flex>
  );
};
