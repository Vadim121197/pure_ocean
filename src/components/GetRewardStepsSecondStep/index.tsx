import { Box, Flex, Text } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';
import { Button, Input } from '..';
import { IconRuby, IconShip } from '../../assets/icons';
import { blueButton, darkBlue, whiteButton } from '../../constants';

type GetRewardStepsSecondStepPropsType = {
  buttonText?: string;
  nextStep?: number;
  rightHeaderValue?: string;
  onButtonClick?: (v?: number) => MouseEventHandler<HTMLButtonElement>;
};

export const GetRewardStepsSecondStep: React.FC<GetRewardStepsSecondStepPropsType> = ({
  nextStep,
  buttonText,
  rightHeaderValue,
  onButtonClick,
}) => {
  return (
    <Flex
      flexDirection="column"
      w={['100%', '50%']}
      borderRadius="3px"
      fontStyle="normal"
      color="white"
      border="3px solid"
      borderColor="transparent"
      background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(#CD7312, #FBC850) border-box`}
      fontSize={['16px', '24px']}
      fontWeight="700"
    >
      <Flex
        flexDirection="column"
        p={['20px 12px', '20px']}
        borderBottom="3px solid"
        borderColor="transparent"
        background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
      >
        <Flex mb="20px" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Box bgColor="white" w="30px" h="30px" py="1px" px="3px" borderRadius="50%">
              <IconShip height="24px" width="24px" />
            </Box>
            <Text ml="10px">PShare stacked</Text>
          </Flex>
          {rightHeaderValue && <Text>{rightHeaderValue}</Text>}
        </Flex>
        {buttonText && onButtonClick ? (
          <Button text={buttonText} colors={blueButton} onClick={onButtonClick(nextStep)} />
        ) : (
          <Input placeholder="Enter number" />
        )}
      </Flex>
      <Flex flexDirection="column" p={['20px 12px', '20px']}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Box bgColor="white" w="30px" h="30px" borderRadius="50%" py="2px" px="3px">
              <IconRuby height="24px" width="24px" />
            </Box>
            <Text ml={['10px']}>Pure earned</Text>
          </Flex>
          <Text>0.000</Text>
        </Flex>
        <Button text="Claim" colors={whiteButton} mt="20px" />
      </Flex>
    </Flex>
  );
};
