import { Box, Flex, IconButton, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';
import { Button, GetPhareCard, PhareCardType } from '../..';
import { IconClose } from '../../../assets/icons';
import { blueButton, darkBlue, whiteButton } from '../../../constants';

type StackLPTokensModalPropsType = {
  isOpen: boolean;
  type: PhareCardType;
  onClose: () => void;
  handleChangeStep: (
    v: number,
    type: PhareCardType,
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
};

export const StackLPTokensModal: React.FC<StackLPTokensModalPropsType> = ({
  isOpen,
  type,
  onClose,
  handleChangeStep,
}) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(47, 65, 70, 0.8)" />
      <ModalContent w={['calc(100% - 24px)']}>
        <GetPhareCard type={type} w={['100%', null, '100%']} typeicon="leftIcon" px="0px">
          <IconButton
            w="17.5px"
            h="17.5px"
            aria-label="Close modal"
            icon={<IconClose />}
            bgColor={darkBlue}
            position="absolute"
            right="20px"
            top="20px"
            onClick={onClose}
            variant="unstyled"
          />
          <Flex flexDirection="column" fontWeight="700">
            <Box
              w="100%"
              pt={['44px', null, '60px']}
              pb={['15px', null, '25px']}
              borderBottom="3px solid"
              borderColor="transparent"
              background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
            >
              <Text px={['12px', null, '20px']} fontSize={['16px', null, '24px']}>
                Stack LP Tokens
              </Text>
            </Box>
            <Flex
              justifyContent="space-between"
              my={['10px', null, '24px']}
              mx={['12px', null, '20px']}
              p="12px"
              alignItems={['flex-end']}
              bgColor="rgba(255, 255, 255, 0.1)"
            >
              <Flex flexDirection="column">
                <Text pb={['10px', null, '20px']} fontSize={['16px', null, '18px']}>
                  Stack
                </Text>
                <Text fontSize={['16px', null, '24px']}>0.000</Text>
              </Flex>
              <Button
                text="Max"
                colors={blueButton}
                w="60x"
                h="22px"
                fontSize={['16px', null, '18px']}
              />
              <Flex flexDirection="column">
                <Text pb={['10px', null, '28px']} fontSize={['16px', null, '18px']}>
                  Balance: 0
                </Text>
                <Text fontSize={['16px', null, '18px']}>Pure - USDC LP</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            justifyContent="space-between"
            mx={['12px', null, '20px']}
            fontSize="14px"
            fontWeight="400"
          >
            <Text>Annual ROI at current rates:</Text>
            <Text>3156%</Text>
          </Flex>
          <Flex
            mx={['12px', null, '20px']}
            justifyContent="space-between"
            mt={['15px', null, '20px']}
            mb={['0px', null, '-20px']}
          >
            <Button
              text="Cancel"
              colors={whiteButton}
              w={['calc(1/2*100% - (1 - 1/2)*9px)', null, 'calc(1/2*100% - (1 - 1/2)*20px)']}
              m={['0 0 9px', null, '0 0 20px']}
              onClick={onClose}
            />
            <Button
              text="Confirm"
              colors={whiteButton}
              w={['calc(1/2*100% - (1 - 1/2)*9px)', null, 'calc(1/2*100% - (1 - 1/2)*20px)']}
              m={['0 0 9px', null, '0 0 20px']}
              onClick={handleChangeStep(3, type)}
            />
          </Flex>
        </GetPhareCard>
      </ModalContent>
    </Modal>
  );
};
