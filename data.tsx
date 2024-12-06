import { Project } from "@/Models/Project";
import { Logo } from '@/Models/Logo';
import BelindasWeb from '@/public/BCWPreview.png';
import FullBelindasWeb from '@/public/BCWFull.png';
import BelindasMobile from '@/public/BCMPreview.png';
import FullBelindasMobile from '@/public/BCMFull.png';
import ADPracticum from '@/public/ADPreview.png';
import FullADPracticum from '@/public/ADPFull.png';
import ComplexityHelper from '@/public/CHPreview.png';
import FullComplexityHelper from '@/public/CHFull.png';
import GGC from '@/public/GGCPreview.png';
import FullGGC from '@/public/GGCFull.png';
import NSCEvents from '@/public/NSCPreview.png';
import FullNSCEvents from '@/public/NSCFull.png';
import OnlinePortfolio from '@/public/OPPreview.png'
import FullOnlinePortfolio from '@/public/OPFull.png';
import ReactSmall from '@/public/CertLogos/ReactSmall.png';
import MUISmall from '@/public/CertLogos/MUISmall.png';
import CSSSmall from '@/public/CertLogos/CSSSmall.png';
import AWSCASmall from '@/public/CertLogos/AWSCASmall.png';
import AWSCDSmall from '@/public/CertLogos/AWSCDSmall.png';
import AWSCFSmall from '@/public/CertLogos/AWSCFSmall.png';
import AmplifySmall from '@/public/CertLogos/AmplifySmall.png';
import APISmall from '@/public/CertLogos/APISmall.png';
import DjangoSmall from '@/public/CertLogos/DjangoSmall.png';
import DockerSmall from '@/public/CertLogos/DockerSmall.png';
import DynamoSmall from '@/public/CertLogos/DynamoSmall.png';
import EC2Small from '@/public/CertLogos/EC2Small.png';
import ExpoSmall from '@/public/CertLogos/ExpoSmall.png';
import JavaSmall from '@/public/CertLogos/JavaSmall.png';
import KotlinSmall from '@/public/CertLogos/KotlinSmall.png';
import LambdaSmall from '@/public/CertLogos/LambdaSmall.png';
import MongoDBSmall from '@/public/CertLogos/MongoDBSmall.png';
import NextSmall from '@/public/CertLogos/NextSmall.png';
import PostgresSmall from '@/public/CertLogos/PostgresSmall.png';
import PythonSmall from '@/public/CertLogos/PythonSmall.png';
import RDSSMall from '@/public/CertLogos/RDSSmall.png';
import RedisSmall from '@/public/CertLogos/RedisSmall.png';
import S3Small from '@/public/CertLogos/S3Small.png';
import SQLSmall from '@/public/CertLogos/SQLSmall.png';
import TailwindSmall from '@/public/CertLogos/TailwindSmall.png';
import TamaguiSmall from '@/public/CertLogos/TamaguiSmall.png';
import FigmaSmall from '@/public/CertLogos/FigmaSmall.png';

export const projectData: Project[]=[
  {
      title: 'Geek Girl Con Mobile App', 
      abbrTitle: 'GGC Mobile', 
      github: '/', 
      role: 'Frontend Dev', 
      tags: ['Expo', 'React-Native', 'tamagui'], 
      status: 'Completed', 
      client: 'Geek Girl Con', 
      date: '2024', 
      thumbImage: GGC, 
      abbr: 'GGC', 
      mobile: "Yes", 
      desktop: 'Yes',
      displayImage: FullGGC,
      description: `I worked with GeekGirlCon through my school during the summer of 2024 for a few weeks to help build their mobile app.
                    I served primarily as a front end dev and my focus was on building the initial iteration of the schedule page.
                    My directive at the time was to make it as close to the desktop version of the site as possible so others could
                    better adapt the design for mobile later. Below, you'll see a picture of the schedule page as I left it 
                    when my time working with them was over. You'll also see a picture of the schedule page as it appears on the 
                    website which I was trying to emulate not only in look but also in function as I implented the date changing and the 
                    filtering functions for mobile as well. Finally, I have included a picture of the current version of the mobile schedule as well (though,
                    to be clear, I was not part of the team that changed the design for mobile.) Working on this project was my introduction to Expo,
                    React Native, and Tamagui.
                    `,
      CarouselImages: [
        {image: FullBelindasWeb,
        alt: 'test',
        description: 'this is a description for the first image'}, 
        {image: FullBelindasMobile,
          alt: 'test',
          description: `this is a long description for the second image.
          better adapt the design for mobile later. Below, you'll see a picture of the schedule page as I left it 
                    when my time working with them was over. You'll also see a picture of the schedule page as it appears on the 
                    website which I was trying to emulate not only in look but also in function as I implented the date changing and the 
                    filtering functions for mobile as well. Finally, I have included a picture of the current version of the mobile schedule as well (though,
                    to be clear, I was not part of the team that changed the design for mobile.) Working on this project was my introduction to Expo,
                    React Native, and Tamagui`},
        {image: FullOnlinePortfolio,
          alt: 'test',
          description: `this is a description for the third image.
          better adapt the design for mobile later. Below, you'll see a picture of the schedule page as I left it 
                    when my time working with them was over. You'll also see a picture of the schedule page as it appears on the 
                    website which I was trying to emulate not only in look but also in function as I implented the date changing and the 
                    filtering functions for mobile as well. Finally, I have included a picture of the current version of the mobile schedule as well (though,
                    to be clear, I was not part of the team that changed the design for mobile.) Working on this project was my introduction to Expo,
                    React Native, and Tamagui`},
        {image: FullADPracticum,
          alt: 'test'}
      ]
    },
  {
    title: 'Complexity-Helper Website', 
    abbrTitle: 'Complexity-Helper', 
    github: '/', 
    role: 'Sole Developer', 
    tags: ['React', 'Amplify', 'Dynamo DB', 'Lambda', 'S3', 'API Gateway', 'AWS'], 
    status: 'On Hold', 
    client: 'Personal Project', 
    date: '2024', 
    thumbImage: ComplexityHelper, 
    abbr: 'CH',
    mobile: "In Development", 
    desktop: 'Yes',
    displayImage: FullComplexityHelper,
  },
  {
      title: 'Belinda\'s Closet Mobile App', 
      abbrTitle: 'Belinda\'s Closet Mobile', 
      github: '/', 
      role: 'Full Stack Dev', 
      tags: ['Kotlin', 'SomethingUI', 'Figma'], 
      status: 'In Development', 
      client: 'North Seattle College', 
      date: '2024', 
      thumbImage: BelindasMobile, 
      abbr: 'BCM',
      mobile: "Yes", 
      desktop: 'No',
      displayImage: FullBelindasMobile
    },
  {
      title: 'NSC Practicum Site', 
      abbrTitle: 'NSC Practicum Site', 
      github: '/', 
      role: 'Lead Dev, Designer, etc.', 
      tags: ['React', 'Figma'], 
      status: 'In Development', 
      client: 'North Seattle College', 
      date: '2024', 
      thumbImage: ADPracticum, 
      abbr: 'NSCP',
      mobile: "No", 
      desktop: 'Yes',
      displayImage: FullADPracticum
    },
  {
    title: 'NSC Events Website', 
    abbrTitle: 'NSC Events Web', 
    github: '/', 
    role: 'Review/Testing', 
    tags: ['NextJS', 'MUI', 'MongoDB Atlas'], 
    status: 'In Development', 
    client: 'North Seattle College', 
    date: '2024', 
    thumbImage: NSCEvents, 
    abbr: 'NSCE',
    mobile: "No", 
    desktop: 'Yes',
    displayImage: FullNSCEvents
  },
  {
      title: 'Belinda\'s Closet Website', 
      abbrTitle: 'Belinda\'s Closet Web', 
      github: '/', 
      role: 'Front End Dev', 
      tags: ['NextJS', 'MUI', 'MongoDB Atlas'], 
      status: 'In Development',  
      client: 'North Seattle College', 
      date: '2024', 
      thumbImage: BelindasWeb, 
      abbr: 'BCW',
      mobile: "No", 
      desktop: 'Yes',
      displayImage: FullBelindasWeb
    },
  {
      title: 'Portfolio Website', 
      abbrTitle: 'Online Portfolio', 
      github: '/', 
      video: '/',
      role: 'Sole Developer', 
      tags: ['NextJS', 'MUI'], 
      status: 'Completed', 
      client: 'Personal Project', 
      date: '2024', 
      thumbImage: OnlinePortfolio, 
      abbr: 'OP',
      mobile: "In Development", 
      desktop: 'Yes',
      displayImage: FullOnlinePortfolio
    },
]

export const LogoArray: Logo[]=[
  {
    alt: "React Logo",
    badge: ReactSmall,
    background: "#fff"
  },
  {
    alt: 'Material UI Logo',
    badge: MUISmall,
    background: '#000',
  },
  {
    alt: 'CSS Logo',
    badge: CSSSmall,
    background: '#fff'
  },
  {
    alt: 'AWS Cloud Architecting Badge',
    badge: AWSCASmall,
    background: '#000'
  },
  {
    alt: 'AWS Cloud Developing Badge',
    badge: AWSCDSmall,
    background: '#000'
  },
  {
    alt: 'AWS Cloud Foundations Badge',
    badge: AWSCFSmall,
    background: '#000'
  },
  {
    alt: 'Amplify Logo',
    badge: AmplifySmall
  },
  {
    alt: 'AWS API Bridge Logo',
    badge: APISmall
  },
  {
    alt: 'Django Logo',
    badge: DjangoSmall
  },
  {
    alt: 'Docker Logo',
    badge: DockerSmall
  },
  {
    alt: 'AWS Dynamo Logo',
    badge: DynamoSmall
  },
  {
    alt: 'EC2 Logo',
    badge: EC2Small
  },
  {
    alt: 'Expo Logo',
    badge: ExpoSmall
  },
  {
    alt: 'Java Logo',
    badge: JavaSmall
  },
  {
    alt: 'Kotlin Logo',
    badge: KotlinSmall
  },
  {
    alt: 'Lambda Logo',
    badge: LambdaSmall
  },
  {
    alt: 'Figma Logo',
    badge: FigmaSmall
  },
  {
    alt: 'MongoDB Logo',
    badge: MongoDBSmall
  },
  {
    alt: 'NextJS Logo',
    badge: NextSmall
  },
  {
    alt: 'Postgres Logo',
    badge: PostgresSmall
  },
  {
    alt: 'Python Logo',
    badge: PythonSmall
  },
  {
    alt: 'AWS RDS Logo',
    badge: RDSSMall
  },
  {
    alt: 'Redis Logo',
    badge: RedisSmall
  },
  {
    alt: 'AWS S3 Logo',
    badge: S3Small
  },
  {
    alt: 'SQL Logo',
    badge: SQLSmall
  },
  {
    alt: 'Tailwind Logo',
    badge: TailwindSmall
  },
  {
    alt: 'TamaGui Logo',
    badge: TamaguiSmall
  }
]