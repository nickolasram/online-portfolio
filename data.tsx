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
import OnlinePortfolio from '@/public/OPCurtainPreview.png'
import FullOnlinePortfolio from '@/public/OPCurtain.png';
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
import UpdatedGGC from '@/public/UpdatedGGC.png';
import CHArch from '@/public/CHArchitecture.png';
import CHMain from '@/public/CHMain.png';
import CHQ1 from '@/public/CHQ1.png';
import CHQ2 from '@/public/CHQ2.png';
import CHQ3 from '@/public/CHQ3.png';
import CHT from '@/public/CHT.png';
import CHFC from '@/public/CHFC.png';
import S3Real from '@/public/S3Real.png';
import GGCMMain from '@/public/GGCMMain.png';
import GGCMCat from '@/public/GGCMCat.png';
import GGCMSolo from '@/public/GGCMSolo.png';
import NSCPF1 from '@/public/NSCPFig1.png';
import NSCPF2 from '@/public/NSCPFig2.png';
import NSCPM from '@/public/NSCPM.png';
import BCW1 from '@/public/BCW1.png';
import BCW2 from '@/public/BCW2.png';
import BCW3 from '@/public/BCW3.png';
import BCW4 from '@/public/BCW4.png';
import OPP from '@/public/OPP.png';
import OPProto from '@/public/OPProto.png';

export const projectData: Project[]=[
  {
      title: 'Geek Girl Con Mobile App', 
      abbrTitle: 'GGC Mobile',
      github: 'https://github.com/nickolasram/online-portfolio', 
      site: 'https://www.ramirez-dev.com/',
      role: 'Frontend Dev', 
      tags: ['Expo', 'React-Native', 'Tamagui'], 
      status: 'Completed', 
      client: 'Geek Girl Con', 
      date: 'July 2024', 
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
        {image: FullGGC,
        alt: 'Picture of the GGC app as I left it.',
        description: 'The state of the schedule page when my time working with GGC was done.'}, 
        {image: UpdatedGGC,
          alt: 'Picture of the GGC app as you\'ll find it on the app store.',
          description: `Picture of the GGC app as you\'ll find it on the app store.`},
      ]
    },
  {
    title: 'Complexity-Helper Website', 
    abbrTitle: 'Complexity-Helper', 
    github: 'https://github.com/nickolasram/complexity-helper', 
    site: 'https://complexity-helper.com/Home',
    role: 'Sole Developer', 
    tags: ['React', 'Amplify', 'Dynamo DB', 'Lambda', 'S3', 'API Gateway', 'AWS', 'CSS'], 
    status: 'On Hold', 
    client: 'Personal Project', 
    date: `Apr-July '24`, 
    thumbImage: ComplexityHelper, 
    abbr: 'CH',
    mobile: "In Development", 
    desktop: 'Yes',
    displayImage: FullComplexityHelper,
    description: `This was an independent project I worked during my time at North Seattle College. This site is designed to be
                  a tool to help students learn about time complexities in algorithms and data structures. I put the project on hold
                  due to school and work, but intend to finish it. Currently, the general UI/UX for desktop including the main page,
                  flashcards, tutorial articles, and review exercises is finished with the actual content being all placeholder. The website
                  is built with React and vanilla CSS and is being hosted on AWS Amplify with various AWS services helping to host and retrieve content.
    `,
    CarouselImages: [
      {image: CHArch,
        alt: 'image of site architecture',
        description: `The site's architecture across AWS`},
      {image: CHMain,
      alt: `The site's main page`,
        description: `The site's main page showing a comparison between three complexities on the graph and a description for 
        the bubble sorting algorithm and O(N^2) time.`},
      {image: CHQ1,
        alt:'image of example question',
        description: 'an example of a review question'},
      {image: CHQ2,
        alt:'image of example question with correct answer',
        description: 'an example of a review question with positive feedback'},
      {image: CHQ3,
        alt:'image of example question with incorrect answer',
        description: 'an example of a review question with negative feedback'},
      {image: CHT,
        alt:'image of example tutorial',
        description: 'example tutorial article with placeholder content'}, 
      {image: CHFC,
        alt:'image of example flashcard',
        description: `an example of the flashcard module. There is extra space to the left to put a sorting/shuffle component 
          like on the tutorial and question pages.`},   
    ]
  },
  {
      title: 'Belinda\'s Closet Mobile App', 
      abbrTitle: 'Belinda\'s Closet Mobile', 
      github: 'https://github.com/SeattleColleges/belindas-closet-android', 
      role: 'Full Stack Dev', 
      tags: ['Kotlin', 'Android Studio'], 
      status: 'In Development', 
      client: 'North Seattle College', 
      date: `Aug-Jan '24`, 
      thumbImage: BelindasMobile, 
      abbr: 'BCM',
      mobile: "Yes", 
      desktop: 'No',
      displayImage: FullBelindasMobile,
      description: `As a student at NSC, I worked on the Android app for the Belinda's Closet program. The program provides students
      with free clothing if they need it. On the mobile application I worked on the category and product pages from building the pages'
      layouts and programming the navigation between those pages and the home page. On top of those pages I also worked on some minor visual
      improvements. This project was my first practical experience building applications in Kotlin and as part of a larger team.`,
      CarouselImages: [
        {image: GGCMMain,
          alt: 'image of the Main page on the GGC Mobile app',
          description: `Current Home page of the app`},
        {image: GGCMCat,
          alt: 'image of the category page on the GGC Mobile app',
          description: `Page showing a category of product on the app`},
        {image: GGCMSolo,
          alt: 'image of the product page on the GGC Mobile app',
          description: `Page showing an individual product on the app`},
      ]
    },
  {
      title: 'NSC Practicum Site', 
      abbrTitle: 'NSC Practicum Site', 
      github: 'https://github.com/SeattleColleges/SeattleColleges.github.io',
      site: 'https://seattlecolleges.github.io/#/Home', 
      role: 'Lead Dev, Designer, etc.', 
      tags: ['React', 'Figma', 'CSS'], 
      status: 'In Development', 
      client: 'North Seattle College', 
      date: `May-July '24`, 
      thumbImage: ADPracticum, 
      abbr: 'NSCP',
      mobile: "No", 
      desktop: 'Yes',
      displayImage: FullADPracticum,
      description: `I lead a small team of students to develop this site. Since the team included junior students
      without any experience with React or CSS frameworks like NextJS or Tailwind, respectively, and the aim was to get this site up in a few weeks,
      we built it with basic React and CSS. A fellow student and I designed the visual layout of the site with Figma before building the site
      in React with the help of a couple other students.`,
      CarouselImages: [
        {image: NSCPF1,
          alt: 'image of Site design process with Figma',
          description: `Figma designs for the home page. This was a collaborative effort between myself and another student.`},
        {image: NSCPF2,
          alt: 'image of Site design process with Figma',
          description: `I designed the portfolio and about page.`},
        {image: NSCPM,
          alt: 'image of site planes made on miro',
          description: `The design plans I made on Miro for the team with info on general strategy and data models.`},
          {image: FullADPracticum,
          alt: 'image of the practicum site',
          description:`the final home page I built.`}
      ]
    },
  {
    title: 'NSC Events Website', 
    abbrTitle: 'NSC Events Web', 
    github: 'https://github.com/SeattleColleges/nsc-events-nextjs', 
    site: 'https://northseattlecollegeevents.com/',
    role: 'Review/Testing', 
    tags: ['NextJS', 'MUI', 'MongoDB Atlas'], 
    status: 'In Development', 
    client: 'North Seattle College', 
    date: `May-July '24`, 
    thumbImage: NSCEvents, 
    abbr: 'NSCE',
    mobile: "No", 
    desktop: 'Yes',
    displayImage: FullNSCEvents,
    description: `At NSC, I worked on this site in a testing and consultation capacity. I reviewed pull requests and provided help to 
    students that were running into similar problems I had encountered while working on the Belinda's Closet website.`,
    CarouselImages: [{
      image: FullNSCEvents,
      alt: 'screenshot of the NSC Events website'
    }]
  },
  {
      title: 'Belinda\'s Closet Website', 
      abbrTitle: 'Belinda\'s Closet Web', 
      github: 'https://github.com/SeattleColleges/belindas-closet-nextjs',
      site: 'https://belindascloset.com/',
      role: 'Front End Dev', 
      tags: ['NextJS', 'MUI', 'MongoDB Atlas', 'Figma'], 
      status: 'In Development',  
      client: 'North Seattle College', 
      date: `Jan-Aug '24`, 
      thumbImage: BelindasWeb, 
      abbr: 'BCW',
      mobile: "No", 
      desktop: 'Yes',
      displayImage: FullBelindasWeb,
      description: `As a student at NSC, I worked on the desktop site for the Belinda's Closet program primarily as a front end dev.
      The program provides students with free clothing if they need it. I helped build the initial layout in Tailwind and then 
      helped convert the site over to Material UI and install a standardized layout. I built a couple components as well, but my
      final task on the project, redesigning the entire home page, is where I'd say I learned the most about Material UI at NSC.`,
      CarouselImages: [
        {image: BCW1,
          alt: `image of the initial Belinda's Closet layout`,
          description: `The initial home page used for testing. Originally built in Tailwind then converted to Material UI.`},
        {image: BCW2,
          alt: `image of the upload product page`,
          description: `The upload product form, one of the components I built.`},
        {image: BCW3,
          alt: `image of the current Belinda's Closet layout`,
          description: `The current Belinda's Closet home page.`},
        {image: FullBelindasWeb,
          alt: `image of my home page redesign`,
          description: `My redesign of the Belinda's Closet home page. It hasn't been implemented yet. They seem to have
          only done some back end and administrative work since this design was approved.`},
        {image: BCW4,
          alt: `image of me designing on Figma`,
          description: `A snapshot of my design process on Figma.`},
      ]
    },
  {
      title: 'Portfolio Website', 
      abbrTitle: 'Online Portfolio', 
      github: 'https://github.com/nickolasram/online-portfolio', 
      video: '/',
      role: 'Sole Developer', 
      tags: ['NextJS', 'MUI', 'Amplify'], 
      status: 'Completed', 
      client: 'Personal Project', 
      date: `Aug-Dec '24`, 
      thumbImage: OnlinePortfolio, 
      abbr: 'OP',
      mobile: "In Development", 
      desktop: 'Yes',
      displayImage: FullOnlinePortfolio,
      description: `Built on NextJS with Material UI and running on AWS Amplify, this has been my project since graduating 
      NSC's Application Development Bachelor's program. It has been much more difficult building a website without a team, 
      but also incredibly educational on working with Material UI and NextJS.`,
      CarouselImages: [
        {image: FullOnlinePortfolio, 
          alt: `image of the introduction banner for this site`,
          description: `The intro/banner on the home page. The inspiration behind this was a curtain raising to reveal
          what it was obscuring.`},
        {image: OPP,
          alt: 'image comparing the portfolio module on desktop and mobile',
          description:`A comparison between the portfolio component on desktop and mobile`},
        {image: OPProto,
          alt: 'image of the original portfolio component',
          description:`The original prototype for the portfolio component. The concept got reused for this image carousel component.`},
      ]
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
    alt: 'NextJS Logo',
    badge: NextSmall
  },
  {
    alt: 'Tailwind Logo',
    badge: TailwindSmall
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
    alt: 'AWS S3 Logo',
    badge: S3Real
  },
  {
    alt: 'SQL Logo',
    badge: SQLSmall
  },
  {
    alt: 'TamaGui Logo',
    badge: TamaguiSmall
  },
  {
    alt: 'Redis Logo',
    badge: RedisSmall
  },
]
