
import type { Speaker, ProgramItem, GalleryItem } from '../types';
import Mee from '../assets/images/Mee.jpeg';
import Mariebelle from '../assets/images/Mariebelle.jpeg';
import Franck from '../assets/images/Franck.png';

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Zambo Ayomba Mariebelle Petrova',
    role: { 
      en: 'CEO of MFY', 
      fr: 'PDG de MFY' 
    },
    bio: { 
      en: 'Dynamic CEO and passionate entrepreneur, Mariebelle is also an international volleyball player from Cameroon. With solid experience in leadership and management, she strives to create motivated teams and implement innovative strategies. Her sports background enriches her business vision, allowing her to promote excellence and develop sustainable solutions.',
      fr: 'CEO dynamique et entrepreneur passionnée, Mariebelle est également une internationale volleyeuse du Cameroun. Avec une solide expérience en leadership et en gestion, elle s\'efforce de créer des équipes motivées et d\'implémenter des stratégies innovantes. Son parcours sportif enrichit sa vision d\'entreprise, lui permettant de promouvoir l\'excellence et de développer des solutions durables.'
    },
    image: Mariebelle
  },
  {
    id: '2',
    name: 'Bena Mee Malaika', 
    role: { 
      en: 'Project Manager', 
      fr: 'Chef Projet' 
    },
    bio: { 
      en: 'Mee is responsible for designing, structuring, and coordinating projects to turn ideas into concrete actions. "MFY positions itself as the heart of youth entrepreneurship, a place where ideas transform into meaningful projects".',
      fr: 'Mee est chargée de concevoir, structurer et coordonner les projets, afin de transformer les idées en actions concrètes. "MFY se positionne comme le cœur de l\'entrepreneuriat jeune, un lieu où les idées se transforment en projets porteurs de sens".'
    },
    image: Mee
  },
  {
    id: '3',
    name: 'Ekwane Franck',
    role: { 
      en: 'Trainer / Educator', 
      fr: 'Formateur / Éducateur'
    },
    bio: { 
      en: 'Franck is responsible for designing and delivering training programs about the project to stakeholders and participants.',
      fr: 'Franck a pour but de concevoir et dispenser des formations sur le projet aux parties prenantes et aux participants.'
    },
    image: Franck
  },
  {
    id: '4',
    name: 'Diana Miller',
    role: { 
      en: 'Quantum Computing Researcher',
      fr: 'Chercheuse en Informatique Quantique'
    },
    bio: { 
      en: 'Dr. Miller is at the forefront of quantum computing, working to unlock its potential for complex problems.',
      fr: 'Dr. Miller est à l\'avant-garde de l\'informatique quantique, travaillant à libérer son potentiel pour résoudre des problèmes complexes.'
    },
    image: 'https://picsum.photos/id/103/400/400'
  },
  {
    id: '5',
    name: 'Ethan Garcia',
    role: { 
      en: 'Venture Capitalist',
      fr: 'Investisseur en Capital-Risque'
    },
    bio: { 
      en: 'Ethan focuses on early-stage startups, helping to fund and mentor the next generation of tech entrepreneurs.',
      fr: 'Ethan se concentre sur les startups en phase de démarrage, aidant à financer et à encadrer la prochaine génération d\'entrepreneurs technologiques.'
    },
    image: 'https://picsum.photos/id/177/400/400'
  },
  {
    id: '6',
    name: 'Fiona Wilson',
    role: { 
      en: 'Author & Futurist',
      fr: 'Auteure & Futurologue'
    },
    bio: { 
      en: 'Fiona is a best-selling author whose work explores the intersection of technology, society, and the future.',
      fr: 'Fiona est une auteure à succès dont le travail explore l\'intersection entre la technologie, la société et l\'avenir.'
    },
    image: 'https://picsum.photos/id/129/400/400'
  }
];

export const program: ProgramItem[] = [
  {
    id: 'p1',
    time: '9:00 AM',
    title: 'The Future of Digital Interaction',
    speaker: 'Alex Rivera',
    location: 'Main Stage',
    type: 'KEYNOTE',
    day: 1
  },
  {
    id: 'p2',
    time: '9:00 AM',
    title: 'Advanced UI/UX Prototyping',
    speaker: 'Maria Garcia',
    location: 'Room A',
    type: 'WORKSHOP',
    day: 1
  },
  {
    id: 'p3',
    time: '10:30 AM',
    title: 'AI in Creative Industries',
    speaker: 'Kenji Tanaka',
    location: 'Main Stage',
    type: 'PANEL',
    day: 1
  },
  {
    id: 'p4',
    time: '1:00 PM',
    title: 'Sustainable Tech Innovations',
    speaker: 'Dr. Evelyn Reed',
    location: 'Room B',
    type: 'TALK',
    day: 1
  },
  {
    id: 'p5',
    time: '1:00 PM',
    title: 'Building Scalable Web Apps',
    speaker: 'Kenji Tanaka',
    location: 'Room C',
    type: 'WORKSHOP',
    day: 1
  },
  {
    id: 'p6',
    time: '3:00 PM',
    title: 'Closing Remarks & Future Vision',
    speaker: 'Event Organizers',
    location: 'Main Stage',
    type: 'KEYNOTE',
    day: 1
  },
  {
    id: 'p7',
    time: '10:00 AM',
    title: 'Web3 & Decentralization',
    speaker: 'Sam Alt',
    location: 'Main Stage',
    type: 'TALK',
    day: 2
  }
];

export const gallery: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i}`,
  url: `https://picsum.photos/id/${10 + i}/600/800`,
  type: i % 4 === 0 ? 'video' : 'photo',
  day: (i % 2) + 1
}));
