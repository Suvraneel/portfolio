import React from 'react';
import Button from "../common/button";
import {ProjectProps} from "../../types/project_types";
import {FaGithub, FaLink} from "react-icons/fa";
import {openWebPage} from "../../utils";
import Image from "next/image";

const ProjectCard = ({
                         idx,
                         title,
                         description,
                         imagePath,
                         projectLink,
                         demoLink,
                         techStack,
                         category
                     }: ProjectProps) => {
    return (
        <div className="card w-96 shadow-xl bg-[#1F2937] border-2 p-2 border-[#5DD39E]">
            <figure className='relative'>
                <div
                    className='absolute flex items-center justify-center w-60 h-60 transition-opacity opacity-0 bg-slate-700 hover:opacity-90'>
                    <Button variant={"secondary"} className='m-auto btn bg-secondary hover:bg-[aquamarine]
                        hover:text-black' onClick={() => openWebPage(projectLink)}>Learn More</Button>
                    <div
                        className="absolute flex rounded-r items-center justify-center top-0">
                    <span
                        className="px-4 rounded-b bg-secondary font-bold text-white flex align-center w-max
                        transition duration-300 ease">
                        {category}
                    </span>
                    </div>
                </div>
                <Image className='rounded-xl' width={360} height={240} src={imagePath} alt="Project Image"/>
                {/*<img className='w-60 h-60 rounded-xl' src={imagePath} alt="Project Image"/>*/}

                <div className="absolute left-0 bottom-0 mx-4 space-x-2 my-4 items-center">
                    <button
                        className='btn rounded-full bg-secondary text-white border-none hover:bg-[aquamarine] hover:text-black'>
                        <FaGithub className="-mx-1" size={24} style={{cursor: 'pointer'}} onClick={() => {
                            openWebPage(projectLink)
                        }}/>
                    </button>
                    {demoLink ?
                        <button
                            className='btn rounded-full bg-secondary text-white border-none hover:bg-[aquamarine] hover:text-black'>
                            <FaLink className="-mx-1" size={24} style={{cursor: 'pointer'}} onClick={() => {
                                openWebPage(demoLink)
                            }}/>
                        </button> : null
                    }
                </div>
            </figure>
            <div className="p-[24px] text-white">
                <h2 className="card-title text-2xl text-secondary underline underline-offset-2">{title}</h2>
                <div dangerouslySetInnerHTML={{__html: description}}/>
                <div className="justify-start">
                    {techStack.map((tech, idx) => (
                        <div className="badge badge-outline border-primary mr-2 mt-4 p-4">{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;