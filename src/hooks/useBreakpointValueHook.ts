import { useBreakpointValue } from '@chakra-ui/react';

type Variant = {
  navigation: 'drawer' | 'sidebar';
  navigationButton: boolean;
  isMobile: boolean;
};

export const useBreakpointValueHook = () => {
  const smVariant: Variant = { navigation: 'drawer', navigationButton: true, isMobile: true };
  const mdVariant: Variant = { navigation: 'sidebar', navigationButton: false, isMobile: false };
  const variants = useBreakpointValue({ base: smVariant, md: smVariant, lg: mdVariant });

  return variants;
};
