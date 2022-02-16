import React from 'react';
import { Button as Btn, ButtonProps } from '@chakra-ui/react';
import { darkBlue, disableText } from '../../constants';

type ButtonPropsType = {
  text: string;
  colors: {
    main: string;
    hover: string;
    active: string;
    disabled: string;
  };
};

export const Button: React.FC<ButtonProps & ButtonPropsType> = (props) => {
  const { text, colors } = props;
  return (
    <Btn
      w="100%"
      fontSize="18px"
      fontWeight="700"
      borderRadius="10px"
      color={darkBlue}
      bg={colors.main}
      _hover={{ backgroundColor: colors.hover }}
      _active={{ backgroundColor: colors.active }}
      _disabled={{ backgroundColor: colors.disabled, color: disableText }}
      {...props}
    >
      {text}
    </Btn>
  );
};
