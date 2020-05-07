import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0 2em 0;
  .team-member-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .presentation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    color: ${theme.secondaryColor};
    font-family: ${theme.titleFont};
    font-size: 2em;
    margin: .5em 0 0;
    a {
      color: ${theme.secondaryColor};
    }
  }
  .role {
    font-family: ${theme.contentFont};
    color: ${theme.alternativeColor};
    margin: 0 0 0 1em;
  }
  .image {
    margin-top: 1em;
    width: 182px;
    height: 200px;
    border: 1px solid ${lighten(theme.alternativeColor, 50)};
    background-color: ${lighten(theme.alternativeColor, 60)};
    .image-size {
      padding: 5px 5px 30px 5px;
      width: 180px;
      height: 200px;
    }
  }
  .left {
    transform: rotate(2deg);
  }
  .right {
    transform: rotate(-2deg);
  }
  .presentation-big {
    display: none;
  }
  .presentation-small {
    margin: 1em 2em;
  }
  .presentation {
    padding: 1em 1em 0 1em;
    font-style: ${theme.contentFont};
  }
  .quote-right {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
  }
  .team-member-right-big {
    display: none;
  }
  @media only screen and (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2em 5em 3em 5em;

    .team-member-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .presentation-wrapper {
      display: inline;
    }
    .presentation-small {
      margin-top: 1em;
    }
    .name {
      margin: 3em 0 0 2em;
    }
    .role {
      margin: 0 0 1em 4.5em;
    }
    .image {
      margin-top: 0;
      height: 250px;
      width: auto;
      .image-size {
        width: 200px;
        height: 250px;
      }
    }
    .team-member-wrapper {
      display: flex;
      width: 100%;
      margin: 2em 1em 0;
    }
    .presentation-wrapper {
      padding: 1.5em;
    }
    .presentation {
      padding: .5em 2.5em;
    }
    .quote-right {
      margin-right: 3em;
    }
  }

  @media only screen and (min-width: 900px) {
    padding: 0 5em 3em 5em;
    .team-member-right-big {
      display: block;
    }
    .team-member-right-small {
      display: none;
    }
    .presentation-small {
      display: none;
    }
    .presentation-big {
      display: block;
    }
    .name {
      margin: 0;
      }
    .role {
    margin: 0 0 1em 1em;
    }
  }

  @media only screen and (min-width: 1050px) {
    padding: 0 15em 3em 15em;
  }
`;

export default AboutUsStyled;
