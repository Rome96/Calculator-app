import styled from 'styled-components/native';
import {primaryColors, secundaryColors} from '../../Theme/colors';

const Container = styled.View`
  flex: 1;
  background: ${primaryColors.black};
  padding: 0px 20px;
  justify-content: flex-end;
`;

const Result = styled.Text`
  font-size: 40px;
  color: ${primaryColors.white};
  text-align: right;
`;

const ResultSmall = styled(Result)`
  font-size: 20px;
  color: ${secundaryColors.gray};
`;

export {Container, Result, ResultSmall};
