import React from 'react';
import {ContainerButton, TextButton} from './styled';

interface Props {
  color?: string;
  text: string;
  textColor: string;
}

const index = (props: Props) => {
  const {color, text, textColor} = props;
  return (
    <ContainerButton color={color}>
      <TextButton textColor={textColor}>{text}</TextButton>
    </ContainerButton>
  );
};

export default index;
