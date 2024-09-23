import { Project } from "@/Models/Project";
import BelindasWeb from '@/public/BeWeResized.png'
import BelindasMobile from '@/public/BeMoResized.png'
import ADPracticum from '@/public/ADPResized.png'
import ComplexityHelper from '@/public/CompHelpResized.png'
import GGC from '@/public/GGCResized.png'
import NSCEvents from '@/public/NSCResized.png'
import OnlinePortfolio from '@/public/OnlineResized.png'

const projectData: Project[]=[
  {
      title: 'Geek Girl Con Mobile App', 
      abbrTitle: 'GGC Mobile', 
      github: '/', 
      role: 'Frontend Dev', 
      tags: ['Expo', 'React-Native', 'tamagui'], 
      status: 'In Development', 
      client: 'Geek Girl Con', 
      date: '2024', 
      displayImage: GGC, 
      abbr: 'GGC', 
      mobile: "Yes", 
      desktop: 'Yes'
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
      displayImage: BelindasMobile, 
      abbr: 'BCM',
      mobile: "Yes", 
      desktop: 'No'
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
      displayImage: ADPracticum, 
      abbr: 'NSCP',
      mobile: "No", 
      desktop: 'Yes'
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
      displayImage: BelindasWeb, 
      abbr: 'BCW',
      mobile: "No", 
      desktop: 'Yes'
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
      displayImage: ComplexityHelper, 
      abbr: 'CH',
      mobile: "In Development", 
      desktop: 'Yes'
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
      displayImage: NSCEvents, 
      abbr: 'NSCE',
      mobile: "No", 
      desktop: 'Yes'
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
      displayImage: OnlinePortfolio, 
      abbr: 'OP',
      mobile: "In Development", 
      desktop: 'Yes'
    },
]

export default projectData;