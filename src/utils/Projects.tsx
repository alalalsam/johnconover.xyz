import { Grommet } from "grommet-icons";
import {
   Typescript,
   Javascript,
   Firebase,
   MongoDB,
   Kotlin,
   Git,
   XCode,
   AndroidStudio,
   Java,
   Heroku,
   Swift,
   CSS,
   NodeJS,
   React as ReactIcon,
   Express,
} from "./TechnologySVGList";


export const projects = [
   {
      name: "Coapt: Myo Pattern Recognition",
      url: " ",
      roles: [
         { name: "Firmware Intern", color: { color: "firmware-intern", opacity: "strong" } },
      ],
      period: "August 2022 - May 2023",
      techStack: [
		{ name: "Git", icon: <Git /> }
      ],
      img: "https://media.licdn.com/dms/image/C4D0BAQGpl0eFXCA9bQ/company-logo_200_200/0/1630525128114/coapt_logo?e=2147483647&v=beta&t=a_n3bdXuvVfmuJyF0R67UPsod9Omocb0AYLTFCXhe0I",
      description: `Spearheaded research, schematic revision, hardware testing, and firmware development for a prototype low-power PCB module. 
					Successfully decreased system power draw by 2 orders of magnitude.`,
   },
   
   {
      name: "Robotics Team 4206",
      url: " ",
      roles: [{ name: "Control Systems Lead", color: { color: "firmware-intern", opacity: "strong" } }],
      period: "August 2017 - May 2020",
      techStack: [
	  /*
         { name: "Typescript", icon: <Typescript /> },
         { name: "Javascript", icon: <Javascript /> },
         { name: "CSS", icon: <CSS /> },
         { name: "Firebase", icon: <Firebase /> },
         { name: "Grommet", icon: <Grommet /> },
         { name: "MongoDB", icon: <MongoDB /> },
         { name: "NodeJS", icon: <NodeJS /> },
         { name: "Heroku", icon: <Heroku /> },
         { name: "React", icon: <ReactIcon /> },
         { name: "Express", icon: <Express /> },
      */
	  ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNkpE8pObatdfZLX_6LVdXNvnOWPD5oOcRg&s",
      description: `Conducted design and full assembly of electronic control systems with integrated pneumatics. 
					Achieved single-day turnaround on system assembly and wire harness.`,
   },
   
   /*
   {
      name: "Tigase, Inc",
      url: "tigase.net",
      roles: [
         { name: "Software Engineer", color: { color: "software-engineer", opacity: "strong" } },
      ],
      period: "Jan 2021 - Present",
      techStack: [
         { name: "Java", icon: <Java /> },
         { name: "Swift", icon: <Swift /> },
         { name: "Kotlin", icon: <Kotlin /> },
         { name: "Git", icon: <Git /> },
         { name: "XCode", icon: <XCode /> },
         { name: "AndroidStudio", icon: <AndroidStudio /> },
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fimageedit_4_3824293816.png?alt=media&token=5dae8ad5-30e3-47f3-8198-6c677ca5b07c",
      description: `I am currently excelling in the creation of multi-platform applications using Kotlin and Swift for platforms including Android, iOS, MacOS, and Windows. My strengths lie in adapting swiftly to emerging technologies and grasping new concepts at a rapid pace. I have been working in close collaboration with graphic designers, which has empowered us to produce eye-catching illustrations. Furthermore, my work extends to the design of visual layout mockups, utilizing tools such as Adobe Photoshop and Illustrator. Notably, I am deeply involved in creating and overhauling application user experiences to align with modern standards, thereby successfully attracting new audiences.`,
   },
   // {
   //    name: "sevanevans.com",
   //    url: "sevanevans.com",
   //    roles: [{ name: "Project", color: { color: "software-engineer", opacity: "strong" } }],
   //    period: "July 2023",
   //    techStack: [
   //       { name: "Typescript", icon: <Typescript /> },
   //       { name: "Javascript", icon: <Javascript /> },
   //       { name: "CSS", icon: <CSS /> },
   //       { name: "React", icon: <ReactIcon /> },
   //    ],
   //    description: ``,
   // },
   {
      name: "PDHS Official Application",
      url: "",
      roles: [
         { name: "Collaborator", color: { color: "collaborator", opacity: "strong" } },
         { name: "Software Engineer", color: { color: "software-engineer", opacity: "strong" } },
      ],
      period: "2019",
      techStack: [
         { name: "Java", icon: <Java /> },
         { name: "Swift", icon: <Swift /> },
         { name: "Kotlin", icon: <Kotlin /> },
         { name: "Git", icon: <Git /> },
         { name: "XCode", icon: <XCode /> },
         { name: "AndroidStudio", icon: <AndroidStudio /> },
      ],
      img: "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fimageedit_10_8089454363.png?alt=media&token=ec370426-a6ef-4e8b-82e5-9a43bd845691",
      description: `During the PDHS Official School Application project, I developed crucial skills in cooperative problem-solving, communication, and rapid software development. As a collaborator, I contributed to a platform impacting students, teachers, and staff daily. Our challenge was maintaining consistent communication across the app's facets, which we overcame with modern development tools and a dedicated approach. This experience emphasized the importance of collaboration, precision, and user-centric design in real-world software development.`,
   },

   {
      name: "RCPC Hackathon",
      url: "",
      roles: [{ name: "1st Place", color: { color: "1st-place", opacity: "strong" } }],
      period: "Apr 2019",
      techStack: [{ name: "Java", icon: <Java /> }],
      img: "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fimageedit_8_7526074017.png?alt=media&token=d5d62334-ff4c-47a6-b1c8-1904c61fc959",
      description: `I had the thrilling experience of being part of the winning team at the 2019 RSPC Hackathon, a fast-paced 2-hour competition that pushed our abilities to their limits. We chose Java, a language we were confident and skilled in to do the competition in.

       The challenge was not just in coding, but in developing an innovative solution within a very limited time frame. Despite the pressures of time, we successfully solved all problems set in front of us with flying colors. Our win was not just a testament to our technical abilities in Java, but also our team coordination, quick decision-making, and capacity to innovate under pressure.`,
   },
   {
      name: "Desert Art Academy",
      url: "",
      roles: [
         {
            name: "Software Engineer",
            color: { color: "software-engineer", opacity: "strong" },
         },
      ],
      period: "2018",
      techStack: [{ name: "Java", icon: <Java /> }],
      img: "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fdownload%20(4).jpg?alt=media&token=61834de7-4e3f-4ca7-b538-114a612edc8c",
      description: ``,
   },
	*/

];
