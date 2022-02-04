import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react';
import { IconDocs, IconHistory, IconHome, IconLogo, IconRuby } from '../../assets/icons';
import { SidebarLink } from '../../components';
import { burgerBackground, mainBackground, routes } from '../../constants';

export type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
  variant?: 'drawer' | 'sidebar';
};

const SidebarContent: React.FC = () => (
  <VStack align="flex-start">
    <Box w="200px" marginBottom="70px">
      <IconLogo />
    </Box>
    <SidebarLink to={routes.MAIN} text="Home" logo={<IconHome />} />
    <SidebarLink to={routes.SHARE} text="Get $PShare" logo={<IconRuby />} />
    <SidebarLink to={routes.REWARD} text="Get Reward" logo={<IconRuby />} />
    <SidebarLink to={routes.BOND} text="Get $PBond" logo={<IconRuby />} />
    <SidebarLink to={routes.HISTORY} text="History" logo={<IconHistory />} />
    <SidebarLink to={routes.DOCS} text="Docs" logo={<IconDocs />} />
  </VStack>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box position="fixed" left={0} p={5} w="250px" top={0} h="100%" bg={mainBackground}>
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton
            colorScheme="whiteAlpha"
            bg={burgerBackground}
            color={mainBackground}
            my="5px"
            _hover={{
              backgroundColor: 'gray',
            }}
          />
          <DrawerBody bg={mainBackground}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
