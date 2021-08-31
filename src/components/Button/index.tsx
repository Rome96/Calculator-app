import React from 'react';
import {ContainerButton, TextButton} from './styled';

interface Props {
  color?: string;
  text: string;
  textColor: string;
  broad?: boolean;
  onPress: (numberText: string) => void;
}

const index = (props: Props) => {
  const {color, text, textColor, broad, onPress} = props;
  return (
    <ContainerButton
      color={color}
      broad={broad}
      activeOpacity={0.7}
      onPress={() => onPress(text)}>
      <TextButton textColor={textColor}>{text}</TextButton>
    </ContainerButton>
  );
};

export default index;
