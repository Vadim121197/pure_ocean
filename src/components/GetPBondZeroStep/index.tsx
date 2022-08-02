import { Box, Flex, Text } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';
import { BalanceCard, Button } from '..';
import { blueButton, darkBlue } from '../../constants';

type GetPBondZeroStepPropsType = {
  type: 'pureToPBond' | 'pBondToPure';
  onButtonClick?: (
    v: number,
    type: 'pureToPBond' | 'pBondToPure',
  ) => MouseEventHandler<HTMLButtonElement>;
};

export const GetPBondZeroStep: React.FC<GetPBondZeroStepPropsType> = ({ type, onButtonClick }) => {
  return (
    <>
      <Flex flexDirection="column">
        <Flex flexDirection="column" alignItems="center" w="100%" pt={['20px', null, '20px']}>
          <Text fontSize={['16px']} fontWeight={['700']}>
            Purchase PBond
          </Text>
          <Text p={['15px 0px 10px']} fontSize={['14px']} fontWeight={['400']}>
            Pure to PBond
          </Text>
          <Text pb={['20px']} fontSize={['14px']} fontWeight={['400']}>
            5,091,724.0064 PBond avaliable for purchase
          </Text>
        </Flex>
        {onButtonClick ? (
          <Button text="Approve Pure" colors={blueButton} onClick={onButtonClick(1, type)} />
        ) : (
          <Flex
            flexDirection="column"
            ml={['-12px']}
            w="calc(100% + 24px)"
            borderBlockStart="3px solid"
            borderColor="transparent"
            // borderBlockEnd="0px solid"
            background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box,
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
            mb={['-15px']}
            py={['10px']}
          >
            <Box w="100%" px={['12px']}>
              <BalanceCard
                leftTopText="Amount"
                leftBottomText="0"
                rightBottomText="PBond"
                w="100%"
                // px={['12px']}
                mt="15px"
              />
            </Box>
            <Flex
              px={['12px']}
              justifyContent={['space-between']}
              mt={['10px']}
              alignItems={['center']}
            >
              <Flex flexDirection="column">
                <Text fontSize={['14px']} fontWeight={['400']}>
                  You are going to obtain:
                </Text>
                <Text fontSize={['16px']} fontWeight={['700']} mt={['10px']}>
                  14,70 PBond
                </Text>
              </Flex>
              <Button text="Swap" colors={blueButton} w={['87px']} />
            </Flex>
          </Flex>
        )}
      </Flex>
      {/* <Flex
        flexDirection="column"
        ml={['-12px']}
        w="calc(100% + 24px)"
        borderBlockStart="3px solid"
        borderColor="transparent"
        borderBlockEnd="0px solid"
        background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
        mt={['15px']}
      >
        <Box w="100%" px={['12px']}>
          <BalanceCard
            leftTopText="Amount"
            leftBottomText="0"
            rightBottomText="PBond"
            w="100%"
            // px={['12px']}
            mt="15px"
          />
        </Box>
        <Flex px={['12px']} justifyContent={['space-between']} mt={['10px']}>
          <Flex flexDirection="column">
            <Text fontSize={['14px']} fontWeight={['400']}>
              You are going to obtain:
            </Text>
            <Text fontSize={['16px']} fontWeight={['700']}>
              14,70 PBond
            </Text>
          </Flex>
          <Button text="Swap" colors={blueButton} w={['87px']} />
        </Flex>
      </Flex> */}
      {/* </Flex> */}
    </>
  );
};
