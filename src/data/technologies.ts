import reactImg from '../assets/img/logos/react.png';
import cssImg from '../assets/img/logos/css.png';
import typescriptImg from '../assets/img/logos/ts.png';
import tailwindImg from '../assets/img/logos/tailwind.png';
import nodeImg from '../assets/img/logos/nodeJS.png';
import expressImg from '../assets/img/logos/express.png';
import postgresImg from '../assets/img/logos/postgresql.png';
import mongoImg from '../assets/img/logos/mongodb.png';
import gitImg from '../assets/img/logos/git.png';
import dockerImg from '../assets/img/logos/docker.png';
import postmanImg from '../assets/img/logos/postman.png';
import prismaImg from '../assets/img/logos/prisma1.png';
import htmlImg from '../assets/img/logos/html.png';
import jsImg from '../assets/img/logos/js.png';
import nextImg from '../assets/img/logos/nextJS.png';
import reduxImg from '../assets/img/logos/redux.png';
import pythonImg from '../assets/img/logos/python.png';
import djangoImg from '../assets/img/logos/django.png';

export type TechCategory = 'frontend' | 'backend' | 'others';

export interface Technology {
  name: string;
  image: ImageMetadata;
  category: TechCategory;
}

export const technologies: Technology[] = [
  // * Frontend
  { name: 'HTML 5', image: htmlImg, category: 'frontend' },
  { name: 'CSS 3', image: cssImg, category: 'frontend' },
  { name: 'JavaScript', image: jsImg, category: 'frontend' },
  { name: 'React', image: reactImg, category: 'frontend' },
  { name: 'Next', image: nextImg, category: 'frontend' },
  { name: 'Redux', image: reduxImg, category: 'frontend' },
  { name: 'TypeScript', image: typescriptImg, category: 'frontend' },
  { name: 'Tailwind CSS', image: tailwindImg, category: 'frontend' },

  // * Backend
  { name: 'Node.js', image: nodeImg, category: 'backend' },
  { name: 'Express', image: expressImg, category: 'backend' },
  { name: 'Python', image: pythonImg, category: 'backend' },
  { name: 'Django Rest Framework', image: djangoImg, category: 'backend' },
  { name: 'PostgreSQL', image: postgresImg, category: 'backend' },
  { name: 'MongoDB', image: mongoImg, category: 'backend' },
  { name: 'Prisma ORM', image: prismaImg, category: 'backend' },

  // * Otras
  { name: 'Git', image: gitImg, category: 'others' },
  { name: 'Docker', image: dockerImg, category: 'others' },
  { name: 'Postman', image: postmanImg, category: 'others' },
];
