import styled from 'styled-components/native';
interface ContainerButton {
  color?: string;
  broad: boolean;
}

interface TextButton {
  textColor: string;
}

const ContainerButton = styled.TouchableOpacity<ContainerButton>`
  background: ${({color}) => color};
  height: 70px;
  /* width: 65px; */
  width: ${({broad}) =>
    broad ? 160 : 70}px; /* 65+65+30(margin = 15 + 15) = 160 */
  border-radius: 100px;
  justify-content: center;
  margin: 0 10px;
`;

const TextButton = styled.Text<TextButton>`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({textColor}) => textColor};
  /* color: #000 */
`;

export {ContainerButton, TextButton};
