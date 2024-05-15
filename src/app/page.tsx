"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconArrowRight, IconEmojiSmileFill, IconGithub, IconLinkDin, IconMail, IconPhoneCall, IconTerminalFill, IconWhatsapp } from "@/lib/Icons";
import Link from "next/link";
import { ProjectsCard } from "./ProjectsCard";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDialog from "./ProjectDialog";
import AnimatedDiv from "@/lib/AnimatedDiv";
interface ProjectData {
  name: string,
  decription: string,
  tech: string,
  img: string,
  projectlink: string,
  websitelink: string
}
const Page = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState<number>(0)
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anandharaj_Resume.pdf';
    // Trigger the click event on the anchor element
    document.body.appendChild(link);
    link.click();
    // Cleanup
    document.body.removeChild(link);

  };
  const projectdata: ProjectData[] = [
    {
      name: "Archie Home Decors",
      decription: " Developed While exterior design focuses on the outside appearance of buildings or structures, and as such is a part of on-campus or online architecture degree programs, interior design deals with the inside look and feel of those same buildings or structures. application using React.js (frontend) and Node.js (backend). Implemented desgin using tailwind css and twailwind freamwork in shadcn ui its show smoth so using this appliction Implemented React.js to enhance the user interface and improve page loading times.Contributed to a cohesive team effort, seamlesslyintegrating technologies for project success.",
      tech: "Next JS - React JS - Redux - TailwindCss - Javascript",
      img: '/images/project1.png',
      projectlink: "https://github.com/Raj-232",
      websitelink: "https://ahd-ui.onrender.com/home"
    },
    {
      name: "BookUsShow",
      decription: " This project aims to build a website using Next.js with TypeScript, RTK Query, and Tailwind CSS. It will display upcoming events and offer personalized recommendations to users. Key features include event listing, recommendations based on user preferences, responsive design, search and filtering options. Development involves integrating APIs, designing UI with Tailwind CSS, and ensuring robust testing and deployment. The goal is to create a modern, user-friendly platform for discovering and engaging with events",
      tech: "Next JS - React JS - Redux - TailwindCss - TypeScript",
      img: '/images/project2.png',
      projectlink: "https://github.com/Raj-232/bookusshow.git",
      websitelink: "https://bookusshow.onrender.com/home"
    },
    {
      name: "Note Your Tasks",
      decription: " Note Your Tasks is a dynamic project developed using React.js, designed to streamline task management. Users can effortlessly add tasks to the list, each with a unique description. The interface allows users to mark tasks as completed with a simple click, facilitating efficient tracking of progress. Additionally, users have the flexibility to delete tasks when they are no longer relevant. The project employs React.js to ensure a responsive and intuitive user experience, enhancing productivity and organization. With its user-friendly interface and robust functionality, Note Your Tasks exemplifies the power of React.js in modern web development and stands as a testament to effective task management solutions.",
      tech: "React JS",
      img: '/images/project3.png',
      projectlink: "https://github.com/Raj-232",
      websitelink: "https://devraviportfolio.netlify.app/"
    }
  ]
  const handleOpen = (index: number) => {
    setIndex(index)
    setOpen(true)
  }
  return (
    <div className="lg:px-48 px-4">

      <div id="home" className="space-y-4 flex flex-col items-start justify-center h-screen">
        <AnimatedDiv>
          <div className="md:text-7xl text-4xl font-bold">
            {`Hey , I'm Anandharaj`}<span className="text-primary">.</span>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="md:text-5xl text-3xl font-bold">
            I am <span className="text-primary">Full Stack developer</span>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>

          <div className="text-lg">
            Experienced software developer proficient in React and Node.js.
            Skilled in creating scalable web applications with a focus on high-quality code.
            Strong in both front-end and back-end development, with a collaborative mindset
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <Button onClick={handleDownload}>Download Resume</Button>
        </AnimatedDiv>
      </div>


      <div id="about" className="space-y-4 py-14">
        <AnimatedDiv>

          <div className="text-5xl flex items-center space-x-4 font-bold">About
            <span className="text-primary">.</span> <Separator />
          </div>
        </AnimatedDiv>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">

          <div className="capitalize space-y-4 text-lg md:col-span-2">
            <AnimatedDiv>
              <div>
                Anandharaj is a seasoned software developer proficient in React and Node.js, adept at building scalable web applications with a focus on top-notch code quality.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div>
                With a comprehensive skill set spanning front-end and back-end development, Anandharaj is passionate about creating intuitive user interfaces and contributing to cutting-edge projects.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div>
                His recent roles include developing a performance testing application at Icanio Technologies and spearheading the creation of a Green Cover Enhancement Web App at Forge Innovation & Ventures.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div>
                i am collaborative mindset and dedication to innovation make him an invaluable asset in any software development team, consistently striving for excellence in his work.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div className="flex space-x-3 items-center">
                <div className="font-bold text-primary">My Links</div>
                <IconArrowRight className="text-primary w-5 h-5" />
                <Link href="https://wa.me/918925191383" target="_blank" >
                  <IconWhatsapp className="w-5 h-5" />
                </Link>
                <Link href="https://github.com/Raj-232" target="_blank" >
                  <IconGithub className="w-5 h-5" />
                </Link>
                <Link href="mailto:aaraj232@gmail.com" >
                  <IconMail className="w-5 h-5" />
                </Link>
                <Link href="tel:+918925191383" >
                  <IconPhoneCall className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" >
                  <IconLinkDin className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedDiv>
          </div>
          <div className="space-y-6">
            <AnimatedDiv>

              <div className="flex space-x-3 text-xl items-center"> <IconTerminalFill /><div>Use at work</div>
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="flex-wrap space-x-2  space-y-2">
                <Badge>Javascript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>HTML</Badge>
                <Badge>React</Badge>
                <Badge>Redux</Badge>
                <Badge>Node Js</Badge>
                <Badge>Express</Badge>
                <Badge>Postgres</Badge>
                <Badge>MongoDB</Badge>
                <Badge>GitHub</Badge>
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div className="flex space-x-3 items-center text-xl"> <IconEmojiSmileFill /><div>Use at Fun</div></div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div className="flex-wrap space-x-2 space-y-2">
                <Badge>Tailwind</Badge>
                <Badge>Python</Badge>
                <Badge>Blender</Badge>
                <Badge>Java</Badge>
                <Badge>Unity</Badge>
                <Badge>PhotoShop</Badge>
              </div>
            </AnimatedDiv>
          </div>

        </div>
      </div>


      <div id="project" className="space-y-8 py-14">
        <AnimatedDiv>

          <div className="text-5xl flex items-center space-x-4 font-bold"><Separator />Projects<span className="text-primary">.</span></div>
        </AnimatedDiv>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
          {
            projectdata.map((data, index) => (

              <div key={index}>
                <AnimatedDiv>
                  <ProjectsCard handleOpen={handleOpen} index={index} name={data.name} decription={data.decription} tech={data.tech} img={data.img} projectlink={data.projectlink} websitelink={data.websitelink} />
                </AnimatedDiv>
              </div>

            ))
          }

        </div>
        <Dialog open={open} onOpenChange={setOpen} >
          <ProjectDialog projectdata={projectdata[index]} />
        </Dialog>
      </div>


      <div id="exp" className="space-y-12 py-14">
        <AnimatedDiv>

          <div className="text-5xl flex items-center space-x-4 font-bold">Experience<span className="text-primary">.</span> <Separator /></div>
        </AnimatedDiv>
        <div className="space-y-4">
          <div className="flex justify-between ">
            <AnimatedDiv>

              <div className="font-bold space-y-2 text-lg" >
                <div>Icanio Technologies</div>
                <div className="text-primary">Software Development Engineer Intern</div>
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div className="text-right space-y-2">
                <div>09/2023 - 02/2024</div>
                <div>Tirunelveli</div>
              </div>
            </AnimatedDiv>
          </div>
          <AnimatedDiv>

            <div>
              Developed user interfaces and components using React.js, ensuring responsiveness and a seamless user experience across different devices and browsers.
              Contributed to backend development by building RESTful APIs, handling authentication, and optimizing database operations using Node.js, MongoDB, and SQL.
              Worked closely with designers and backend developers to integrate frontend components with backend services, fostering effective collaboration and achieving project goals.
              Actively participated in code reviews, team meetings, and adopted agile methodologies, gaining valuable insights into software development best practices and enhancing my skills as a developer.
            </div>
          </AnimatedDiv>
          <AnimatedDiv>

            <div className="flex-wrap space-x-2 space-y-2">
              <Badge>React Js</Badge>
              <Badge>Node Js</Badge>
              <Badge>Next JS</Badge>
              <Badge>Nest Js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind Css</Badge>
              <Badge>MangoDb</Badge>
              <Badge>Sql</Badge>
            </div>
          </AnimatedDiv>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between ">
            <AnimatedDiv>

              <div className="font-bold space-y-2 text-lg" >
                <div>Forge Innovation & Ventures</div>
                <div className="text-primary">Graduate Innovation Engineer Trainee</div>
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div className="text-right space-y-2">
                <div>02/2023 - 06/2023</div>
                <div>Tirunelveli</div>
              </div>
            </AnimatedDiv>
          </div>
          <AnimatedDiv>

            <div>
              Applied academic IoT knowledge: Used theoretical learning in practical scenarios, particularly in IoT applications.
              Led innovation projects: Took charge of projects to solve problems with IoT solutions, actively contributing to problem-solving efforts.
              Gained hands-on IoT experience: Implemented IoT solutions in various sectors, like smart buildings and healthcare, learning about IoT systems firsthand.
              Developed professionally: Collaborated with mentors, enhancing technical and soft skills vital for professional growth and learning in a real-world setting.
            </div>
          </AnimatedDiv>
          <AnimatedDiv>

            <div className="flex-wrap space-x-2 space-y-2">
              <Badge>arduino</Badge>
              <Badge>IoT</Badge>
              <Badge>php</Badge>
              <Badge>Sql</Badge>
              <Badge>Inovation</Badge>
            </div>
          </AnimatedDiv>
        </div>
      </div>


      <div id="contact" className="space-y-6 flex flex-col items-center justify-center h-screen">
        <AnimatedDiv>
          <div className="text-7xl flex items-center space-x-4 font-bold">Contact
            <span className="text-primary">.</span>
          </div>
        </AnimatedDiv>
        <div className="text-lg md:w-2/3 text-center">
          <AnimatedDiv>
            <div>
              Shoot me an email if you want to connect! You can also find me on <span className="text-primary"><Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" >Linkedin</Link></span> or <span className="text-primary"><Link href="https://wa.me/918925191383" target="_blank">Whatsapp</Link></span>{` if that's more your speed.`}
            </div>
          </AnimatedDiv>
        </div>

        <AnimatedDiv>
          <Link href="mailto:aaraj232@gmail.com" className="space-x-2 text-lg font-bold flex items-center hover:text-primary" >
            <IconMail className="w-5 h-5" /> <div>aaraj232@gmail.com</div>
          </Link>
        </AnimatedDiv>
      </div>

    </div>
  )
}

export default Page