import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
import { IconBasket, IconRuby, IconShip } from '../../assets/icons';

export const headerImages = [
  {
    value: 123123,
    id: 1,
  },
  {
    value: 123123,
    id: 2,
  },
  {
    value: 123,
    id: 3,
  },
];

type HeaderItemsPropsType = {
  iconWidth?: string;
  orientation?: 'vertical' | 'horisontal';
};

export const HeaderItems: React.FC<FlexProps & HeaderItemsPropsType> = (props) => {
  const { orientation = 'horisontal', iconWidth = '35px' } = props;
  return (
    <>
      {headerImages.map((i) => (
        <Flex
          alignItems="center"
          key={i.id}
          pb={orientation === 'vertical' ? '14px' : '0px'}
          {...props}
        >
          {i.id === 1 && <IconRuby width={iconWidth} height={iconWidth} />}
          {i.id === 2 && <IconShip width={iconWidth} height={iconWidth} />}
          {i.id === 3 && <IconBasket width={iconWidth} height={iconWidth} />}
          <Text
            fontSize={orientation === 'vertical' ? ['14px', null, '18px'] : ['14px', null, '24px']}
            color="white"
            paddingLeft="10px"
            fontWeight={orientation === 'vertical' ? '400' : '700'}
          >
            {i.value} {orientation === 'vertical' && 'USDC'}
          </Text>
        </Flex>
      ))}
    </>
  );
};
