import styled from 'styled-components';
import theme, { darken } from 'src/styles/theme';

const ButtonStyled = styled.div`
  display: flex;
  width: 100%;

  button {
    background-color: ${theme.strongColor};
    color: white;
    font-family: ${theme.contentFont};
    font-weight: bold;
    border: none;
    padding: .6em;
    border-radius: 5px;
    width: 100%;
  }
  button:hover {
    background-color: ${darken(theme.strongColor, 10)};
  }
  
`;

export default ButtonStyled;
