export interface IExp {
  title: string
  company: string
  date: string
  description: string
  learns: string[]
}

export const experiences: IExp[] = [
  {
    title: 'Web Developer Intern',
    company: 'UIN Jakarta research and publishing center',
    date: 'Jan - Aug 2023',
    description: `Create an application <a target="_blank" href="https://siapp.uinjkt.ac.id">siapp.uinjkt.ac.id</a> using laravel, this application is used for researchers and lecturers at UIN to submit research proposals and publications.`,
    learns: [
      'Laravel',
      'Tailwind',
      'Bootstrap',
      'MySQL',
      'Linux',
      'Apache',
      'Product planning'
    ]
  },
  {
    title: 'Tech team intern',
    company: 'YLABS',
    date: 'Aug - Nov 2021',
    description: `3 months intern as Tech team. YLabs (PT YLABS INOVASI INDONESIA) is the first research and innovation management company in Indonesia that provides modules, tools and strategies to help the process of creating innovations and discoveries in STEM in an integrated and integrated manner.`,
    learns: ['Firebase', 'ReactJS', 'JIRA']
  },
  {
    title: 'Backend Developer',
    company: 'PT Falah Inovasi Teknologi',
    date: 'Des 2021 - Jun 2023',
    description: `1 year 6 months as fulltime backend developer, learn and use so many tools to reach the goal as backend developer.`,
    learns: [
      'Laravel',
      'Express',
      'PostgresSQL',
      'Docker',
      'Microservices',
      'ERP Dev',
      'Figma',
      'Socket IO'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Integrity Asia',
    date: 'Jun 2023 - Present',
    description: `Integrity Asia provides efficient solutions for ensuring good governance and business certainty, improving fraud detection and swiftly investigating infringements. I have responsible to develop new app using NestJS and NextJS as fullstack developer.`,
    learns: [
      'NestJS',
      'NextJS',
      'ReactJS',
      'MongoDB',
      'Microservices',
      'Rabbitmq',
      'Azure devops',
      'Websocket',
      'Xendit payment'
    ]
  }
]
