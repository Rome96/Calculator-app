import styled from 'styled-components/native';
import {primaryColors, secondaryColors} from '../../Theme/colors';

const Container = styled.View`
  flex: 1;
  background: ${primaryColors.black};
  padding: 20px;
  justify-content: flex-end;
`;

const Result = styled.Text`
  font-size: 40px;
  color: ${primaryColors.white};
  text-align: right;
`;

const ResultSmall = styled(Result)`
  font-size: 20px;
  color: ${secondaryColors.grayOpacity};
`;

const ContainerButtons = styled.View`
  padding: 5px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

export {Container, Result, ResultSmall, ContainerButtons};
