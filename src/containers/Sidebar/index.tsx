import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import { headerImages } from '..';
import { IconDocs, IconHistory, IconHome, IconRuby } from '../../assets/icons';
import { SidebarLink } from '../../components';
import { lightBlue, darkBlue, routes } from '../../constants';

export type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
  variant?: 'drawer' | 'sidebar';
};

const SidebarContent: React.FC = () => (
  <VStack align="flex-start" mt="50px">
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
    <Box w="355px" bg={darkBlue} pl="50px">
      <SidebarContent />
      <Flex flexDir="column" mt="70px">
        {headerImages.map((i) => (
          <Flex alignItems="center" key={i.id} pb="20px">
            {i.image}
            <Text fontSize="18px" color="white" paddingLeft="10px" fontWeight="400">
              {i.value} USDC
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton
            colorScheme="whiteAlpha"
            bg={lightBlue}
            color={darkBlue}
            my="5px"
            _hover={{
              backgroundColor: 'gray',
            }}
          />
          <DrawerBody bg={darkBlue}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
