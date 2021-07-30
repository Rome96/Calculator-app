import styled from 'styled-components/native';
import {primaryColors} from './colors';

interface Theme {
  isDarkMode: boolean;
}

export const AppStyle = styled.SafeAreaView<Theme>`
  flex: 1;
  background: ${props =>
    props.isDarkMode ? primaryColors.black : primaryColors.white};
`;
