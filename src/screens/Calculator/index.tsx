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
    //no aceptar doble punto:
    if (number.includes('.') && numberText === '.') return;

    //validar si el numero empieza con 0 o -0
    if (number.startsWith('0') || number.startsWith('-0')) {
      //validar si es el primer punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        // evaluar si es otro 0 y hay un punto'.'
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        // evaluar si es diferente de 0 y no tiene un punto '.'
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        // Evitar el 0000.0
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveAndNegatve = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let numTemp = number;

    if (number.includes('-')) {
      numTemp = number.substr(1); // elimina la primera posicion del string
    }

    if (numTemp.length > 1) {
      setNumber(number.slice(0, -1)); // elimina la ultima posicion del string
    } else {
      setNumber('0');
    }
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
