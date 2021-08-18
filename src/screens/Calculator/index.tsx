import React, {useState} from 'react';
import {View} from 'react-native';

import Button from '../../components/Button';
import {primaryColors, secondaryColors} from '../../Theme/colors';
import {Container, ContainerButtons, Result, ResultSmall} from './styles';

const index = () => {
  const [number, setNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');

  const clear = () => {
    setNumber('0');
  };

  const buildNumer = (numberText: string) => {
    setNumber(number + numberText);
  };

  return (
    <Container>
      <ResultSmall>{previousNumber}</ResultSmall>
      <Result numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Result>
      <View>
        <ContainerButtons>
          <Button
            text="C"
            onPress={clear}
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="+/-"
            onPress={clear}
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="del"
            onPress={clear}
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="/"
            onPress={clear}
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            text="7"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="8"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="9"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="X"
            onPress={clear}
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            text="4"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="5"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="6"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="-"
            onPress={clear}
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            text="1"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="2"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="3"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="+"
            onPress={clear}
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            broad
            text="0"
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="."
            onPress={buildNumer}
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="="
            onPress={clear}
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>
      </View>
    </Container>
  );
};

export default index;
