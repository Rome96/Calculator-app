import styled from 'styled-components/native';
import {primaryColors, secondaryColors} from '../../Theme/colors';

const Container = styled.View`
  flex: 1;
  background: ${primaryColors.black};
  padding: 30px;
  justify-content: flex-end;
`;

const Result = styled.Text`
  font-size: 40px;
  color: ${primaryColors.white};
  text-align: right;
  margin-bottom: 10px;
`;

const ResultSmall = styled(Result)`
  font-size: 20px;
  color: ${secondaryColors.grayOpacity};
`;

const ContainerButtons = styled.View`
  margin: 10px 0px;
  padding: 0px 10px;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-content: center;
`;

export {Container, Result, ResultSmall, ContainerButtons};
