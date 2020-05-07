import styled from 'styled-components';
import theme from 'src/styles/theme';

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;

  .content-part {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 4em;
    overflow-y: auto;

    h2 {
      font-family: ${theme.titleFont};
      font-size: 2.2em;
      margin-bottom: 1em;
      color: ${theme.secondaryColor};
    }

    &-title{
      width: 60%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      .link-plus{
        color: ${theme.alternativeColor};

        &:hover{
          color: ${theme.grocereazColor};
        }
      }
    }

    .instruction{
      font-family: ${theme.contentFont};
      font-weight: bold;
      color: ${theme.grocereazColor}
    }

    .list{
      width: 60%;
      display: flex;
      flex-direction: column;
      margin-bottom: 7em;

      .grocery-item{
        display: flex;
        justify-content: space-between;
        padding: .3em;
      }
      .ingredient-item{
        display: flex;
        justify-content: space-between;
        padding: .4em;
      }
      .link{
        color: ${theme.alternativeColor};
      }
      .link:hover{
        color: ${theme.grocereazColor};
      }
    }

    .addGroceryList{

      &-input{
        margin-top: 1em;
      }

      &-save{
        display:none;
      }
    }
  }

  .picture-part {
    display: none;
  }
  .user-data-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;
    width: 30em;
    .user-data-value {
    }
    .user-data-label {
      width: 6em;
      
    }
    .user-data {
      color: black;
      font-family: ${theme.contentFont};
      font-size: 1.2em;
      margin: 1em;
      display: flex;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;
    width: 15em;

    &-input{
      width: 100%;
    }
    .datasInput{
      margin-bottom: 1em;
    }
    .user-data-list {
      width : 100%;
    }

    .validData--transparent{
      display: none;
    }
    .link {
      display: inline;
      color: ${theme.strongColor};
      font-size: .9em;
      &:hover{
        color: ${theme.alternativeColor};
      }
    }
    &-text-area{
      max-width: 88%;
      margin-bottom:.5em;
    }
    &-validation{
      width: 88%;
    }
    
  }

  .image {
    display: none;
  }

  @media only screen and (min-width: 760px) {
    .content-part {
      width: 50%;
      overflow-y: auto;
      padding-bottom: 5em;
    }
    .picture-part {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      /*position: fixed;*/
      right: 0;
      /*top: 15em;*/
      }
    .image {
      display: inline;
      .image-size {
        max-width: 100%;
        height: auto;
        margin-right: 1em;
      }
    }
  }

`;

export default FormStyled;
