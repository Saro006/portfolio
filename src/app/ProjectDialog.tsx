import { DialogContent, DialogDescription } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { IconBxExit, IconGithub } from '@/lib/Icons'
import Link from 'next/link'
import React from 'react'
interface ProjectData {
    name: string,
    decription: string,
    tech: string,
    img: string,
    projectlink: string,
    websitelink: string
}
interface Props {
    projectdata: ProjectData
}
function ProjectDialog({ projectdata }: Props) {
    return (
        <DialogContent className='overflow-scroll md:h-[500px] h-full max-w-[800px] overflow-x-hidden'>
            <DialogDescription >
                <div className=''>
                    <img src={projectdata.img} alt='project1' className='w-full h-96' />
                </div>
                <div className='w-full space-y-2 p-4'>
                    <div className="font-bold">
                        {projectdata.name}<span className="text-primary">.</span>
                    </div>
                    <div className='text-primary text-lg font-bold'>{projectdata.tech}</div>
                    <div className='text-lg'>
                        {projectdata.decription}</div>
                    <div className='flex space-x-2 text-primary font-bold'>
                        <Link className='flex space-x-2 items-center' href={projectdata.projectlink} target="_blank" >
                            <IconGithub className='w-8 h-8' /> <div>source code</div>

                        </Link>
                        <Link className='flex space-x-2 items-center' href={projectdata.websitelink} target="_blank" >
                            <IconBxExit className='w-8 h-8' /> <div>live project</div>
                        </Link>
                    </div>
                </div>
            </DialogDescription>

        </DialogContent>
    )
}

export default ProjectDialog