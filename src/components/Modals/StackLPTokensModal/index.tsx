import {
  Box,
  Flex,
  Button as B,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Button, GetPhareCard } from '../..';
import { IconClose } from '../../../assets/icons';
import { blueButton, darkBlue, whiteButton } from '../../../constants';

export const StackLPTokensModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <B onClick={onOpen}>Open Modal</B>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={['calc(100% - 24px)']}>
          <GetPhareCard
            type="ruby"
            w={['100%', null, 'calc(1/2*100% - (1 - 1/2)*25px)']}
            leftIcon
            px="0px"
          >
            <IconButton
              w="17.5px"
              h="17.5px"
              aria-label="Close modal"
              icon={<IconClose />}
              colorScheme="whiteAlpha"
              bgColor={darkBlue}
              position="absolute"
              right="20px"
              top="20px"
            />
            <Flex flexDirection="column">
              <Box
                w="100%"
                pt={['44px']}
                pb={['15px']}
                borderBottom="3px solid"
                borderColor="transparent"
                background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(225deg, #CD7312, #FBC850) border-box`}
              >
                <Text px={['12px', null, '20px']}>Stack LP Tokens</Text>
              </Box>
              <Flex
                justifyContent="space-between"
                my={['10px']}
                mx={['12px', null, '20px']}
                p={['12px']}
                alignItems={['flex-end']}
                bgColor="rgba(255, 255, 255, 0.1)"
              >
                <Flex flexDirection="column">
                  <Text pb={['10px']}>Stack</Text>
                  <Text>0.000</Text>
                </Flex>
                <Button
                  text="Max"
                  colors={blueButton}
                  w={['60x']}
                  h={['22px']}
                  fontSize={['16px']}
                />
                <Flex flexDirection="column">
                  <Text pb={['10px']}>Balance: 0</Text>
                  <Text>Pure - USDC LP</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" mx={['12px', null, '20px']}>
              <Text>Annual ROI at current rates:</Text>
              <Text>3156%</Text>
            </Flex>
            <Flex mx={['12px', null, '20px']} justifyContent="space-between" mt={['15px']}>
              <Button
                text="Cancel"
                colors={whiteButton}
                w={['calc(1/2*100% - (1 - 1/2)*9px)', null, 'calc(1/2*100% - (1 - 1/2)*18px)']}
                m={['0 0 9px', null, '0 0 20px']}
              />
              <Button
                text="Confirm"
                colors={whiteButton}
                w={['calc(1/2*100% - (1 - 1/2)*9px)', null, 'calc(1/2*100% - (1 - 1/2)*18px)']}
                m={['0 0 9px', null, '0 0 20px']}
              />
            </Flex>
          </GetPhareCard>
        </ModalContent>
      </Modal>
    </>
  );
};
