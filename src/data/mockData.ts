
import type { Speaker, ProgramItem, GalleryItem } from '../types';

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'CEO of TechCorp',
    bio: 'Alex is a visionary leader in the tech industry, known for his groundbreaking work in sustainable technology.',
    image: 'https://picsum.photos/id/64/400/400',
  },
  {
    id: '2',
    name: 'Brenda Smith',
    role: 'AI Ethicist',
    bio: 'Brenda specializes in the ethical implications of artificial intelligence, advising governments globally.',
    image: 'https://picsum.photos/id/65/400/400',
  },
  {
    id: '3',
    name: 'Charles Davis',
    role: 'Lead UX Designer, Innovate Co.',
    bio: 'With over 15 years of experience, Charles has led design teams to create user-centric products reached by millions.',
    image: 'https://picsum.photos/id/91/400/400',
  },
  {
    id: '4',
    name: 'Diana Miller',
    role: 'Quantum Computing Researcher',
    bio: 'Dr. Miller is at the forefront of quantum computing, working to unlock its potential for complex problems.',
    image: 'https://picsum.photos/id/103/400/400',
  },
  {
    id: '5',
    name: 'Ethan Garcia',
    role: 'Venture Capitalist',
    bio: 'Ethan focuses on early-stage startups, helping to fund and mentor the next generation of tech entrepreneurs.',
    image: 'https://picsum.photos/id/177/400/400',
  },
  {
    id: '6',
    name: 'Fiona Wilson',
    role: 'Author & Futurist',
    bio: 'Fiona is a best-selling author whose work explores the intersection of technology, society, and the future.',
    image: 'https://picsum.photos/id/129/400/400',
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
