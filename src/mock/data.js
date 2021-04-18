import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chirag Saini | MERNG Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio Site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello Friendo, Myself ',
  name: 'Chirag Saini',
  subtitle: 'I\'m a MERNG Stack Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am MERNG Stack Developer with 1+ year of Experience. I specialize in React, GraphQl, NodeJs and Python to deliver End-to-End Web Applications.',
  paragraphTwo: 'I\'m also Experienced in Python and its various Subdomains like Django, Machine Learning and Data Science.',
  paragraphThree: 'Always Try to Learning and Enhance my Skills',
  resume: 'https://drive.google.com/file/d/1L44Kz3wAJvmstXbNsE6cLF_dZhZhVy5D/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Lireddit.png',
    title: 'LiReddit',
    info: 'A Full Stack Project using Stack Next.js, GraphQL, Apollo Server, Docker, Postgres, Reddis',
    info2: 'Hosted on Digital Ocean and Vercel with Custom domain for Both API and FE.',
    url: 'https://fullstack.chiragsaini.xyz/',
    repo: 'https://github.com/ChiragSaini/fullstack'
  },
  {
    id: nanoid(),
    img: 'django.png',
    title: 'Real Estate Django-React',
    info: 'A Full Stack Website built with Django-Rest Frameworks and React and Redux, Postgres.',
    info2: 'Features include Authentication, Forget Password CRUD Operations, Ad Posting, Searching.',
    // url: '',
    repo: 'https://github.com/ChiragSaini/Django-ReactJS-Realest-Estate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'typing.png',
    title: 'Typing Speed Test',
    info: 'A Typing test whihc measures your typing in speed with Random Generated Strings in WPM',
    info2: 'Made with React and ChakraUI.',
    url: 'https://typingtest.chiragsaini.xyz/',
    repo: 'https://github.com/ChiragSaini/typing-test', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chiragsaini7777@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ChiragSaini97',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chiragsaini97/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ChiragSaini',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
