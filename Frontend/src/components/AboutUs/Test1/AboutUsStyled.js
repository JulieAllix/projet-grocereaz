import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  .flip-card {
    background-color: transparent;
    width: 25vw;
    height: 86vh;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  .image {
    position: relative;
  }
  .image-size {
    width: 25vw;
    height: 86vh;
  }
  .card-section-wrapper {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    bottom: 3em;
    padding: .3em;
  }
  .name {
    color: ${theme.secondaryColor};
    font-family: ${theme.titleFont};
    font-size: 2em;
    }
  .role {
    font-family: ${theme.contentFont};
    color: ${theme.alternativeColor};
  }
  .flip-card-back {
    background-color: ${lighten(theme.alternativeColor, 60)};
    color: ${theme.secondaryColor};
    transform: rotateY(180deg);
    height: 86vh;
    width: 105%;
  }
  .name-card-back {
    margin-top: 1em;
  }
  
  @media only screen and (min-width: 650px) {
    flex-direction: row;
    .image {
      .image-size {
        width: 25vw;
      }
    }
  }

`;

export default AboutUsStyled;
