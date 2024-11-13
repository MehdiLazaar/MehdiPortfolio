import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Sorting Algorithms',
    description: 'Comparative analysis of Bubble, Quick, and Counting Sorts.',
    demoLink: 'https://github.com/MehdiLazaar/Sorting_Algorithms',
    tags: ['JAVA']
  },
  {
    name: 'Maze',
    description: 'Maze solving project using C, threads, and processes for sequential and parallelized solutions.',
    demoLink: 'https://github.com/MehdiLazaar/Maze',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['C']
  },
  {
    name: 'Linked Lists',
    description: 'Singly linked list in Java with operations',
    demoLink: 'https://github.com/MehdiLazaar/Linked_Lists',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['JAVA']
  },
  {
    name: 'Flappy Bird',
    description : 'Flappy Bird game in Java with XML and OOP',
    demoLink: 'https://github.com/MehdiLazaar/Flappy_Bird',
    tags: ['JAVA', 'XML']
  },
  {
    name: 'Quantik Game',
    description: 'Quantik: two-player strategic game, tactical and challenging.',
    demoLink: 'https://github.com/MehdiLazaar/QuantikGame',
    tags: ['PHP','MYSQL','CSS']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/pokemon-catcher')),
    name: 'Symfony Blog Page',
    demoLink: 'https://github.com/MehdiLazaar/Projet_Blog_Symfony',
    tags: ['Symfony','TWIG','MySQL', 'PHP']
  }
]
