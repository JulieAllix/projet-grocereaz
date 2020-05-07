import photoJulie from 'src/assets/images/julie.JPG';
import photoVincent from 'src/assets/images/vincent.jpg';
import photoPy from 'src/assets/images/py.jpg';
import photoDavid from 'src/assets/images/david.jpg';
import { createSelectorHook } from 'react-redux';

export default [
  {
    id: 1,
    name: 'David Fommard',
    role: 'Frontend Lead Dev',
    linkedIn: 'https://www.linkedin.com/in/david-fommard-8175ba32/',
    picture: photoDavid,
    text: 'After 10 years working in restauration, I decided to change all my life and to be a web developer… now, I believe I can fly, I believe I can touch the sky...',
  },
  {
    id: 2,
    name: 'Julie Allix',
    role: 'Product Owner / Graphic design',
    linkedIn: 'https://www.linkedin.com/in/julieallix/',
    picture: photoJulie,
    text: 'I fell in love with coding by discovering VBA in my previous job. My friends say I have bad taste in music and call me DJ Plaques d\'Egoût (DJ Manhole Cover). I must admit I\'m not ashamed of my guilty pleasures during parties when I\'m DJing. But I know that somewhere in their hearts they like these songs too ;) ! I love everything that is 80ish: the music, the neons, the looks, even the haircuts of the 80\'s. When I don\'t know how to answer a message, I answer with a funny GIF. ',
  },
  {
    id: 3,
    name: 'Pierre-Yves Donzé',
    role: 'Scrum Master / Dev Ops',
    linkedIn: 'https://www.linkedin.com/in/pierreyvesdonz%C3%A9/',
    picture: photoPy,
    text: 'I\'m a 37 years old man coming from a mysterious place where very few human beings dare going. I\'ve had a peaceful childhood, raised by orangutangs. I\'ve learned how to cope by myself, but I also learned teamwork, in order to enable us to keep eating organic food. But the ressources became scarce, the ennemi was encroaching our territory, and my family ended up dying in a Nutella jar. I had to find a solution to survive ... One thing leading to another, one fruit leading to a compote, one liana leading to Ikea furniture; I discovered the informatic jungle.',
  },
  {
    id: 4,
    name: 'Vincent Labarthe',
    role: 'Backend Lead Dev',
    linkedIn: 'https://www.linkedin.com/in/vincent-labarthe-6922b333/',
    picture: photoVincent,
    text: 'Passionate about new technologies and the web environment for many years, I decided to retrain by following intensive training at O\'Clock to become a full-stack mobile web & web developer.',
  },



];
