import React, { MouseEventHandler } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button, PhareCardType } from '..';
import { blueButton } from '../../constants';
import GetPShareStepsContext from '../../context/GetPShareStepsContext';

type GetPShareZeroStepPropsType = {
  handleChangeStep: (
    v: number,
    type: PhareCardType,
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
};

export const GetPShareZeroStep: React.FC<GetPShareZeroStepPropsType> = ({ handleChangeStep }) => {
  const context = React.useContext(GetPShareStepsContext);

  return (
    <>
      <Flex
        w="100%"
        flexDirection={['row', null, 'column']}
        alignItems={['flex-end', null, 'center']}
        justifyContent="space-between"
        mt={['45px', null, '60px']}
        mb={['23px', null, '25px']}
      >
        <Flex flexDirection="column" alignItems={['flex-start', null, 'center']}>
          <Text
            fontSize={['14px', null, '18px']}
            fontWeight={['400', null, 'bold']}
            color={['white', null, '#BABAE1']}
            mb={['5px', null, '25px']}
          >
            Stack LP
          </Text>
          <Text fontSize={['16px', null, '24px']}>Pure + USDC</Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={['flex-start', null, 'center']}
          mt={['0px', null, '30px']}
        >
          <Text fontSize="14px" fontWeight="normal">
            Deposit:
          </Text>
          <Text fontSize="14px" fontWeight="normal" my={['5px', null, '10px']}>
            Pure + USDC Earn PShare
          </Text>
          <Text fontSize="14px">300% APR</Text>
        </Flex>
      </Flex>
      <Button text="Get $PShare" colors={blueButton} onClick={handleChangeStep(1, context.type)} />
    </>
  );
};
