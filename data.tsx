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

export const projectData: Project[]=[
  {
      title: 'Geek Girl Con Mobile App', 
      abbrTitle: 'GGC Mobile', 
      github: '/', 
      role: 'Frontend Dev', 
      tags: ['Expo', 'React-Native', 'tamagui'], 
      status: 'In Development', 
      client: 'Geek Girl Con', 
      date: '2024', 
      thumbImage: GGC, 
      abbr: 'GGC', 
      mobile: "Yes", 
      desktop: 'Yes',
      displayImage: FullGGC
    },
  {
    title: 'Complexity-Helper Website', 
    abbrTitle: 'Complexity-Helper', 
    github: '/', 
    role: 'Sole Developer', 
    tags: ['React', 'Amplify', 'Dynamo DB', 'Lambda', 'S3', 'API Gateway', 'AWS'], 
    status: 'In Development', 
    client: 'Self', 
    date: '2024', 
    thumbImage: ComplexityHelper, 
    abbr: 'CH',
    mobile: "In Development", 
    desktop: 'Yes',
    displayImage: FullComplexityHelper
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
      client: 'North Seattle College', 
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
  }
]