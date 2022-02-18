import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  VStack,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { IconClose, IconDocs, IconHistory, IconHome, IconRuby } from '../../assets/icons';
import { Button, HeaderItems, SidebarLink } from '../../components';
import { darkBlue, routes, goldButton } from '../../constants';
import { useBreakpointValueHook } from '../../hooks';

export type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
  variant?: 'drawer' | 'sidebar';
};

const SidebarContent: React.FC = () => {
  const variants = useBreakpointValueHook();
  const isMobile = variants?.isMobile;

  return (
    <VStack align="flex-start" mt={['10px', null, '50px']}>
      {isMobile && <Button text="Connect wallet" colors={goldButton} mb="10px" />}
      <SidebarLink
        to={routes.MAIN}
        text="Home"
        logo={<IconHome width={isMobile ? '20px' : '35px'} height={isMobile ? '20px' : '35px'} />}
      />
      <SidebarLink
        to={routes.SHARE}
        text="Get $PShare"
        logo={<IconRuby width={isMobile ? '20px' : '35px'} height={isMobile ? '20px' : '35px'} />}
      />
      <SidebarLink
        to={routes.REWARD}
        text="Get Reward"
        logo={<IconRuby width={isMobile ? '20px' : '35px'} height={isMobile ? '20px' : '35px'} />}
      />
      <SidebarLink
        to={routes.BOND}
        text="Get $PBond"
        logo={<IconRuby width={isMobile ? '20px' : '35px'} height={isMobile ? '20px' : '35px'} />}
      />
      <SidebarLink
        to={routes.HISTORY}
        text="History"
        logo={
          <IconHistory width={isMobile ? '20px' : '35px'} height={isMobile ? '20px' : '35px'} />
        }
      />
      <SidebarLink
        to={routes.DOCS}
        text="Docs"
        logo={<IconDocs width={isMobile ? '20px' : '35px'} height={isMobile ? '20px' : '35px'} />}
      />
    </VStack>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box w="355px" bg={darkBlue} pl="50px">
      <SidebarContent />
      <Box mt="90px">
        <HeaderItems
          alignItems="center"
          justifyContent="flex-start"
          orientation="vertical"
          iconWidth="35px"
        />
      </Box>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay bg="rgba(47, 65, 70, 0.8)">
        <DrawerContent w="315px">
          <DrawerBody bg={darkBlue} px="16px">
            <Flex h="64px" alignItems="center" justifyContent="space-between">
              <IconButton
                w="30px"
                h="30px"
                aria-label="Close modal"
                icon={<IconClose />}
                bgColor={darkBlue}
                onClick={onClose}
                variant="unstyled"
              />
              <HeaderItems iconWidth="30px" />
            </Flex>
            <SidebarContent />
            <Box mt="30px">
              <HeaderItems
                alignItems="center"
                justifyContent="flex-start"
                orientation="vertical"
                iconWidth="20px"
              />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
