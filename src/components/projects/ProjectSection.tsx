import React from 'react';
import Text from "../common/text";
import {projectList} from "./projectList";
import ProjectCard from "./ProjectCard";
import {projects} from "../../utils/links";

const ProjectSection = () => {
    return (
        <div
            id="projects"
            className="relative min-h-screen px-40 bg-[#0A192F] font-sans pt-20 text-white">
            <Text variant="big-heading">
                Projects
            </Text>

            <div className='flex flex-wrap justify-center gap-20'>
                {
                    projectList.map((props, idx) => (
                        <ProjectCard {...props} key={idx} idx={props.idx}/>
                    ))
                }
            </div>
            <button
                className="btn btn-primary rounded-xl border-none bg-secondary hover:bg-primary my-8"
                onClick={
                    () => window.open(projects, "_blank")
                }>View all projects
            </button>
        </div>
    );
};

export default ProjectSection;