import inventoryImg from '../assets/img/projects/inventory.png';
import chilaoImg from '../assets/img/projects/Chilao.png';
import privateHomeImg from '../assets/img/projects/private-home.png';
import kanbanImg from '../assets/img/projects/kanban.png';
import criptoImg from '../assets/img/projects/cripto.png';
import movieImg from '../assets/img/projects/movie.png';
import pptImg from '../assets/img/projects/rock_paper_scissor.png';
import grgImg from '../assets/img/projects/github-readme-generator.png';
import devmmchImg from '../assets/img/projects/dev-match-memory-challenge.png';
import rbackImg from '../assets/img/projects/remove-background.png';

export interface Project {
  id: string;
  image: ImageMetadata;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    image: inventoryImg,
    githubUrl: 'https://github.com/nelsonacb/frontend_inventory',
  },
  {
    id: '2',
    image: chilaoImg,
    githubUrl: 'https://github.com/nelsonacb/menu-digital-frontend',
  },
  {
    id: '3',
    image: privateHomeImg,
    githubUrl: 'https://github.com/nelsonacb/private_home_backend',
  },
  {
    id: '4',
    image: kanbanImg,
    githubUrl: 'https://github.com/nelsonacb/kanban-project-frontend',
  },
  {
    id: '5',
    image: criptoImg,
    githubUrl: 'https://github.com/nelsonacb/crypto-dashboard',
  },
  {
    id: '6',
    image: movieImg,
    githubUrl: 'https://github.com/nelsonacb/movies-project',
  },
  {
    id: '7',
    image: pptImg,
    githubUrl: 'https://github.com/nelsonacb/rock-paper-scissors',
  },
  {
    id: '8',
    image: grgImg,
    githubUrl: 'https://github.com/nelsonacb/github-readme-generator',
  },
  {
    id: '9',
    image: devmmchImg,
    githubUrl: 'https://github.com/nelsonacb/dev-match-memory-challenge',
  },
  {
    id: '10',
    image: rbackImg,
    githubUrl: 'https://github.com/nelsonacb/background-remover-project',
  },
];
