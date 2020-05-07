import styled from 'styled-components';

import theme, { lighten } from 'src/styles/theme';

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${lighten(theme.alternativeColor, 60)};
  padding: .6em;
    .logo-size {
      max-width: 30px;
      height: auto;
      margin: .4em 1em 0 .1em;
    }
    .logo-title {
      display: flex;
      flex-direction: row;
      /*align-items: baseline;*/
      .grocereaz {
        font-family: ${theme.grocereazFont};
        color: ${theme.grocereazColor};
        font-size: 1.5em;
        align-self: center;
        margin-top: 0;
      }
    }
    .display-search {
      display: none;
    }
    .header-buttons {
      display: flex;
      flex-direction: row;
      .header-button {
        color: ${theme.secondaryColor};
        border: 1px solid ${theme.secondaryColor};
        background-color: ${lighten(theme.alternativeColor, 60)};
        border-radius: 5px;
        margin-bottom: 0;
        margin-right: .5em;
        :hover {
          background-color: ${theme.secondaryColor};
        }
        button{
          border: none;
          background-color: transparent;
          color: ${lighten(theme.alternativeColor, 60)};
          font-family: ${theme.contentFont};
          font-weight: bold;
          &:hover{
            color: ${theme.secondaryColor};
          }
        }
      }
    }
    .home-button {
      display: none;
    }

/*--- HeaderButton ---*/

    .dropdown {
      color: ${theme.secondaryColor};
      font-family: ${theme.contentFont};
      font-weight: bold;
      padding: .35em .2em;
      :hover {
        color: ${lighten(theme.alternativeColor, 60)};
      }
      &-option {
        width: 7em;
        padding-left: .3em;
        background-color: ${theme.secondaryColor};
      }
      a {
        color: ${lighten(theme.alternativeColor, 60)};
        cursor: pointer;
        :hover {
          color: ${theme.strongColor};
          background-color: ${theme.secondaryColor};
        }
      }
    }
  @media only screen and (min-width: 330px) {
    .logo-title {
      .grocereaz {
        font-size: 1.4em;
      }
    }
  }
/*--- / HeaderButton ---*/

  @media only screen and (min-width: 650px) {

    .display-search {
      display: block;
    }
    .home-button {
      display: block;
      border: 1px solid ${theme.secondaryColor};
      color: ${theme.secondaryColor};
      background-color: ${lighten(theme.alternativeColor, 60)};
      font-family: ${theme.contentFont};
      font-weight: bold;
      border-radius: 5px;
      margin-right: 1em;
      padding: .9em;
      :hover {
        background-color: ${theme.secondaryColor};
        color: ${lighten(theme.alternativeColor, 60)};
      }
    }
  }

  @media only screen and (min-width: 750px) {
    .logo-title {
      .grocereaz {
        font-size: 1.8em;
      }
    }

`;

export default HeaderStyled;
