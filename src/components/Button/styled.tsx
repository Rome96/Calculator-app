import styled from 'styled-components/native';

interface ContainerButton {
  color: string;
}

interface TextButton {
  textColor: string;
}

const ContainerButton = styled.TouchableOpacity<ContainerButton>`
  background: ${({color}) => color};
  height: 60px;
  width: 60px;
  border-radius: 100px;
  justify-content: center;
`;

const TextButton = styled.Text<TextButton>`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({textColor}) => textColor};
  /* color: #000 */
`;

export {ContainerButton, TextButton};
