import React from 'react';
import {View} from 'react-native';

import Button from '../../components/Button';
import { useCalculator } from '../../hooks/useCalculator';
import {primaryColors, secondaryColors} from '../../Theme/colors';
import {Container, ContainerButtons, Result, ResultSmall} from './styles';

const index = () => {
  
  const {
    number,
    previousNumber,
    btnSumar,
    btnRestar,
    calculate,
    btnDivide,
    btnMultiplicar,
    clear,
    buildNumer,
    positiveAndNegatve,
    btnDelete,
  } = useCalculator();

  return (
    <Container>
      {previousNumber !== '0' && <ResultSmall>{previousNumber}</ResultSmall>}
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
            onPress={positiveAndNegatve}
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="del"
            onPress={btnDelete}
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="/"
            onPress={btnDivide}
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
            onPress={btnMultiplicar}
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
            onPress={btnRestar}
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
            onPress={btnSumar}
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
            onPress={calculate}
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>
      </View>
    </Container>
  );
};

export default index;
