
import type { Speaker, ProgramItem, GalleryItem } from '../types';
import Mee from '../assets/images/Mee.jpeg';
import Mariebelle from '../assets/images/Mariebelle.jpeg';
import Franck from '../assets/images/Franck.png';
import Myriam from '../assets/images/Myriam.jpeg'
import Ako from '../assets/images/Ako.jpeg'


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
      en: 'Franck is responsible for designing and delivering training programs for the project\'s stakeholders and participants.',
      fr: 'Franck a pour but de concevoir et dispenser des formations sur le projet aux parties prenantes et aux participants.'
    },
    image: Franck
  },
  {
    id: '4',
    name: 'Guiolobo Myriam Eliora Nilie',
    role: { 
      en: 'Marketing and Management Manager',
      fr: 'Responsable Marketing et management'
    },
    bio: { 
      en: 'Myriam oversees the company\'s marketing and management activities. She manages and publishes video and visual content, communicates with other young entrepreneurs and actively seeks sponsorship opportunities.',
      fr: 'Myriam est responsable de la gestion du marketing et du management de l\'entreprise. Elle partage et  fait la publicité des différentes videos et images. Elle entre en communication avec d\'autres jeunes entrepreneurs et cherche le maximum de sponsors.'
    },
    image: Myriam
  },
  {
    id: '5',
    name: 'Bekono Ako Franck',
    role: { 
      en: 'Community Manager',
      fr: 'Community Manager'
    },
    bio: { 
      en: 'Franck is responsible for creating content, captivating attention in an infinite stream of information and manages the MFY community.',
      fr: 'Franck est chargé de créer du contenu, de captiver l\'attention dans un flux d\'informations infini et de gérer la communauté de MFY.'
    },
    image: Ako
  },
  // {
  //   id: '6',
  //   name: 'Fiona Wilson',
  //   role: { 
  //     en: 'Author & Futurist',
  //     fr: 'Auteure & Futurologue'
  //   },
  //   bio: { 
  //     en: 'Fiona is a best-selling author whose work explores the intersection of technology, society, and the future.',
  //     fr: 'Fiona est une auteure à succès dont le travail explore l\'intersection entre la technologie, la société et l\'avenir.'
  //   },
  //   image: 'https://picsum.photos/id/129/400/400'
  // }
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
