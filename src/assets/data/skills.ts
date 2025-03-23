export interface ISkill {
  title: string;
  skills: {
    image: string;
    name: string;
    level: number;
  }[];
}

const skills: ISkill[] = [
  {
    title: 'Programming Language',
    skills: [
      {
        image: '/skills/1/php.png',
        level: 5,
        name: 'PHP'
      },
      {
        image: '/skills/1/js.png',
        level: 5,
        name: 'Javascript'
      },
      {
        image: '/skills/1/ts.png',
        level: 5,
        name: 'Typescript'
      },
      {
        image: '/skills/1/nodejs.png',
        level: 5,
        name: 'Node JS'
      },
      {
        image: '/skills/1/java.png',
        level: 5,
        name: 'JAVA'
      },
      {
        image: '/skills/1/solidity.png',
        level: 5,
        name: 'Solidity'
      },
      {
        image: '/skills/1/rust.png',
        level: 4,
        name: 'Rust'
      },
      {
        image: '/skills/1/go.png',
        level: 4,
        name: 'Go'
      }
    ]
  },
  {
    title: 'Framework / Library',
    skills: [
      {
        image: '/skills/2/laravel.png',
        level: 5,
        name: 'Laravel'
      },
      {
        image: '/skills/2/codeigniter.png',
        level: 5,
        name: 'Codeigniter'
      },
      {
        image: '/skills/2/wp.png',
        level: 5,
        name: 'Wordpress'
      },
      {
        image: '/skills/2/express.png',
        level: 5,
        name: 'Express JS'
      },
      {
        image: '/skills/2/nestjs.png',
        level: 5,
        name: 'Nest JS'
      },
      {
        image: '/skills/2/nextjs.png',
        level: 5,
        name: 'Next JS'
      },
      {
        image: '/skills/2/react.png',
        level: 5,
        name: 'React JS'
      },
      {
        image: '/skills/2/vue.png',
        level: 5,
        name: 'Vue JS'
      },
      {
        image: '/skills/2/jquery.png',
        level: 5,
        name: 'JQuery'
      },
      {
        image: '/skills/2/firebase.png',
        level: 5,
        name: 'Firebase'
      },
      {
        image: '/skills/2/inertia.png',
        level: 5,
        name: 'Inertia JS'
      },
      {
        image: '/skills/2/tailwind.png',
        level: 5,
        name: 'Tailwind'
      },
      {
        image: '/skills/2/bootstrap.png',
        level: 5,
        name: 'Bootstrap CSS'
      },
      {
        image: '/skills/2/vite.png',
        level: 5,
        name: 'Vite'
      },
      {
        image: '/skills/2/strapi.png',
        level: 5,
        name: 'Strapi'
      }
    ]
  },
  {
    title: 'Database',
    skills: [
      {
        image: '/skills/3/sql.png',
        level: 5,
        name: 'SQL'
      },
      {
        image: '/skills/3/mongodb.png',
        level: 5,
        name: 'Mongo DB'
      },
      {
        image: '/skills/3/redis.png',
        level: 5,
        name: 'Redis'
      },
      {
        image: '/skills/3/firebase.png',
        level: 5,
        name: 'Firestore'
      }
    ]
  },
  {
    title: 'Tools',
    skills: [
      {
        image: '/skills/4/azuredevops.png',
        level: 5,
        name: 'Azure Devops'
      },
      {
        image: '/skills/4/docker.png',
        level: 5,
        name: 'Docker'
      },
      {
        image: '/skills/4/figma.png',
        level: 5,
        name: 'Figma'
      },
      {
        image: '/skills/4/git.png',
        level: 5,
        name: 'GIT'
      },
      {
        image: '/skills/4/jira.png',
        level: 5,
        name: 'JIRA'
      }
    ]
  },
  {
    title: 'Other Technical',
    skills: [
      {
        image: '/skills/5/microservices.png',
        level: 5,
        name: 'Microservices'
      },
      {
        image: '/skills/5/websocket.png',
        level: 5,
        name: 'Websocket'
      },
      {
        image: '/skills/5/restapi.png',
        level: 5,
        name: 'REST API'
      },
      {
        image: '/skills/5/grpc.png',
        level: 5,
        name: 'GRPC'
      },
      {
        image: '/skills/5/graphql.png',
        level: 5,
        name: 'Graphql'
      },
      {
        image: '/skills/5/jest.png',
        level: 5,
        name: 'Jest'
      },
      {
        image: '/skills/5/linux.png',
        level: 5,
        name: 'Linux'
      },
      {
        image: '/skills/5/elastic.png',
        level: 5,
        name: 'Elastic Search'
      },
      {
        image: '/skills/5/rabbitmq.png',
        level: 5,
        name: 'Rabbitmq'
      }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      {
        image: '/skills/6/collaborating.png',
        level: 5,
        name: 'Collaborating'
      },
      {
        image: '/skills/6/googling.png',
        level: 5,
        name: 'Googling'
      },
      {
        image: '/skills/6/communicating.png',
        level: 5,
        name: 'Communicating'
      },
      {
        image: '/skills/6/critical-thinking.png',
        level: 5,
        name: 'Critical thinking'
      },
      {
        image: '/skills/6/problem-solving.png',
        level: 5,
        name: 'Problem solving'
      }
    ]
  }
];

export default skills;
