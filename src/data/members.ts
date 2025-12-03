import { Member } from '../types';

export const members: Member[] = [
  {
    id: 'mem1',
    name: 'Aisha R',
    teamPreferences: ['Team India', 'RCB'],
    city: 'Bengaluru',
    verified: true,
    women: true,
    languages: ['English', 'Hindi', 'Kannada'],
    emergencyContact: '+91 90000 12345'
  },
  {
    id: 'mem2',
    name: 'Rahul Deshpande',
    teamPreferences: ['Mumbai Indians'],
    city: 'Mumbai',
    verified: true,
    women: false,
    languages: ['English', 'Marathi', 'Hindi'],
    emergencyContact: '+91 98989 11111'
  },
  {
    id: 'mem3',
    name: 'Sara Qureshi',
    teamPreferences: ['CSK', 'Team India'],
    city: 'Chennai',
    verified: false,
    women: true,
    languages: ['English', 'Tamil', 'Hindi'],
    emergencyContact: '+91 99333 99887'
  }
];
