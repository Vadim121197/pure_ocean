import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react';
import { IconLogo } from '../../assets/icons';
import { mainBackground } from '../../constants';

export type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
  variant?: 'drawer' | 'sidebar';
};

const SidebarContent: React.FC<{ onClose: SidebarProps['onClose'] }> = ({ onClose }) => (
  <VStack>
    <Box w="200px" marginBottom="70px">
      <IconLogo />
    </Box>
    <Button onClick={onClose} w="100%">
      Home
    </Button>
    <Button onClick={onClose} w="100%">
      About
    </Button>
    <Button onClick={onClose} w="100%">
      Contact
    </Button>
  </VStack>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box position="fixed" left={0} p={5} w="250px" top={0} h="100%" bg={mainBackground}>
      <SidebarContent onClose={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody bg={mainBackground}>
            <SidebarContent onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
