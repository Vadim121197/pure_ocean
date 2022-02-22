import { Box, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import { IconRuby, IconShip, IconUSDC } from '../../assets/icons';
import { darkBlue, gold } from '../../constants';
import { useBreakpointValueHook } from '../../hooks';

export type PhareCardType = 'ruby' | 'ship';

type GetPhareCardPropsType = {
  type?: PhareCardType;
  typeicon?: 'leftIcon' | 'centerIcon';
  children: React.ReactNode;
};

export const GetPhareCard: React.FC<GetPhareCardPropsType & FlexProps> = (props) => {
  const { type, typeicon = 'centerIcon', children } = props;

  const variants = useBreakpointValueHook();
  const isMobile = variants?.isMobile;
  return (
    <Flex
      flexDirection="column"
      alignItems={typeicon === 'leftIcon' ? 'none' : ['none', null, 'center']}
      w="100%"
      borderRadius="3px"
      fontWeight="bold"
      fontStyle="normal"
      color="white"
      px={['12px', null, '20px']}
      pb={['20px', null, '25px']}
      border="3px solid"
      borderColor="transparent"
      background={`linear-gradient(${darkBlue}, ${darkBlue}) padding-box, 
            linear-gradient(#CD7312, #FBC850) border-box`}
      {...props}
    >
      {type && (
        <>
          <Box
            bgColor="white"
            position="absolute"
            mt="-20px"
            mb="20px"
            ml={typeicon === 'leftIcon' ? ['0px', null, '20px'] : ['0px', null, '-60px']}
            w={['50px', null, '50px', '70px']}
            h={['50px', null, '50px', '70px']}
            borderRadius="50%"
            px={type === 'ruby' ? ['0', null, '0', '3px'] : ['4px', null, '4px', '5px']}
            py={type === 'ruby' ? ['0', null, '0', '3px'] : ['3px', null, '3px', '5px']}
          >
            {type === 'ruby' ? (
              <IconRuby width={isMobile ? '50px' : '60px'} height={isMobile ? '50px' : '60px'} />
            ) : (
              <IconShip width={isMobile ? '40px' : '55px'} height={isMobile ? '40px' : '55px'} />
            )}
          </Box>
          <Box
            bgColor="white"
            position="absolute"
            mt="-20px"
            mb="20px"
            w={['50px', null, '50px', '70px']}
            h={['50px', null, '50px', '70px']}
            borderRadius="50%"
            ml={typeicon === 'leftIcon' ? ['40px', null, '70px'] : ['40px', null, '20px', '50px']}
            border="2px solid"
            borderColor={gold}
            px={['2px', null, '2px', '3px']}
            py={['2px', null, '2px', '3px']}
          >
            <IconUSDC width={isMobile ? '43px' : '60px'} height={isMobile ? '43px' : '60px'} />
          </Box>
        </>
      )}
      {children}
    </Flex>
  );
};
