import { Box, Drawer, DrawerOverlay, DrawerBody, DrawerContent, VStack } from '@chakra-ui/react';
import { IconDocs, IconHistory, IconHome, IconRuby } from '../../assets/icons';
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
    <VStack align="flex-start" mt={['74px', '74px', '74px', '50px']}>
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
          iconwidth="35px"
        />
      </Box>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay position="relative" zIndex="50" bg="rgba(47, 65, 70, 0.8)">
        <DrawerContent w="315px" position="relative" zIndex="50">
          <DrawerBody bg={darkBlue} px="16px">
            <SidebarContent />
            <Box mt="30px">
              <HeaderItems
                alignItems="center"
                justifyContent="flex-start"
                orientation="vertical"
                iconwidth="20px"
              />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
