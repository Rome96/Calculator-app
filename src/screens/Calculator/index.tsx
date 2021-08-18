import React, { useState } from 'react';
import {View} from 'react-native';

import Button from '../../components/Button';
import {primaryColors, secondaryColors} from '../../Theme/colors';
import {Container, ContainerButtons, Result, ResultSmall} from './styles';

const index = () => {
  const [number, setNumber] = useState('100');

  const clear = () => {
    setNumber('0');
  };

  return (
    <Container>
      <ResultSmall>1,500.000</ResultSmall>
      <Result>{number}</Result>
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
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="del"
            color={secondaryColors.gray}
            textColor={primaryColors.black}
          />
          <Button
            text="/"
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            text="7"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="8"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="9"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="X"
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            text="4"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="5"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="6"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="-"
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            text="1"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="2"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="3"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="+"
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            broad
            text="0"
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="."
            color={secondaryColors.eastBay}
            textColor={primaryColors.white}
          />
          <Button
            text="="
            color={secondaryColors.pricot}
            textColor={primaryColors.white}
          />
        </ContainerButtons>
      </View>
    </Container>
  );
};

export default index;
