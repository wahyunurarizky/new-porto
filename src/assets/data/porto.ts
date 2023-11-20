export interface IPorto {
  name: string
  image: string
  github?: string
  url?: string
  desc: string
  buildWith: string[]
}

export const porto: IPorto[] = [
  {
    name: 'Pink Shop (2021)',
    desc: 'Ecommerce website created with codeigniter for assessment in university',
    github: 'https://github.com/wahyunurarizky/RPLv3',
    url: 'https://youtu.be/uC5oIRRlWkI',
    image: '/porto/porto-rplv3.jpg',
    buildWith: ['Codeigniter', 'Bootstrap', 'My SQL', 'JQuery']
  },
  {
    name: 'Puskarier (2021)',
    desc: 'Application for job search and career development for UIN Jakarta alumni',
    url: 'https://puskarier.vercel.app',
    image: '/porto/porto-puskarier.png',
    buildWith: ['React JS', 'Laravel', 'My SQL', 'SCSS']
  },
  {
    name: 'SIAPP (2021)',
    desc: 'Application for submission of research by UIN Jakarta researchers',
    url: 'https://siapp.uinjkt.ac.id',
    image: '/porto/porto-siapp.png',
    buildWith: ['Laravel', 'Tailwind', 'Bootstrap', 'MySQL']
  },
  {
    name: 'Chat app (2021)',
    desc: 'Realtime chat app using react and firebase realtime database',
    github: 'https://github.com/wahyunurarizky/chat-app',
    url: 'https://chat-web-arzky.web.app',
    image: '/porto/porto-chat-app.png',
    buildWith: ['React JS', 'Firebase Realtime DB', 'Firebase auth', 'SCSS']
  },
  {
    name: 'Wahyu Coin (2023)',
    desc: 'Create own blockhain network',
    github: 'https://github.com/wahyunurarizky/wahyu-coin',
    url: 'https://wahyu-coin.vercel.app',
    image: '/porto/porto-wahyu-coin.png',
    buildWith: ['NodeJS', 'ReactJS', 'Redis']
  },
  {
    name: `Mom's Day Out Ceres Meses (2023)`,
    desc: `Create event website for Ceres Meses celebrate Mom's Day Out`,
    url: 'https://momsdayout.ceresmeses.co.id',
    image: '/porto/porto-ceres.png',
    buildWith: ['Laravel', 'Inertia', 'ReactJS', 'Tailwind', 'Redis']
  },
  {
    name: `Berburu Vespa Kober Mie (2023)`,
    desc: `Sayembara mie kober app to get vespa`,
    url: 'https://berburuvespa.kobermie.com',
    image: '/porto/porto-kober.png',
    buildWith: ['Laravel', 'Inertia', 'ReactJS', 'Tailwind', 'Redis']
  },
  {
    name: `Petkit Indonesia (2023)`,
    desc: `Create official website for official distributor Petkit from Indonesia`,
    url: 'https://petkitindonesia.com',
    image: '/porto/porto-petkit.png',
    buildWith: ['Laravel', 'Inertia', 'ReactJS', 'Tailwind', 'Redis']
  }
]
