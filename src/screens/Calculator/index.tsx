import React from 'react';
import {View} from 'react-native';

import Button from '../../components/Button';
import {primaryColors, secondaryColors} from '../../Theme/colors';
import {Container, ContainerButtons, Result, ResultSmall} from './styles';

const index = () => {
  return (
    <Container>
      <ResultSmall>1,500.000</ResultSmall>
      <Result>2,456.000</Result>
      <View>
        <ContainerButtons>
          <Button
            color={secondaryColors.gray}
            text="C"
            textColor={primaryColors.black}
          />
          <Button
            color={secondaryColors.gray}
            text="/"
            textColor={primaryColors.black}
          />
          <Button
            color={secondaryColors.gray}
            text="/"
            textColor={primaryColors.black}
          />
          <Button
            color={secondaryColors.buttercup}
            text="/"
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            color={secondaryColors.tuatara}
            text="7"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.tuatara}
            text="8"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.tuatara}
            text="9"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.buttercup}
            text="X"
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            color={secondaryColors.tuatara}
            text="4"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.tuatara}
            text="5"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.tuatara}
            text="6"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.buttercup}
            text="-"
            textColor={primaryColors.white}
          />
        </ContainerButtons>

        <ContainerButtons>
          <Button
            color={secondaryColors.tuatara}
            text="1"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.tuatara}
            text="2"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.tuatara}
            text="3"
            textColor={primaryColors.white}
          />
          <Button
            color={secondaryColors.buttercup}
            text="-"
            textColor={primaryColors.white}
          />
        </ContainerButtons>
      </View>
    </Container>
  );
};

export default index;
