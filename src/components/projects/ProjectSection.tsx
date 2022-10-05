import React from 'react';
import Text from "../common/text";
import {projectList} from "./projectList";
import ProjectCard from "./ProjectCard";
import {projects} from "../../utils/links";
import Button from "../common/button";

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
            <Button
                variant={"rounded_with_secondary"}
                className="rounded-xl my-16"
                onClick={
                    () => window.open(projects, "_blank")
                }>View all projects
            </Button>
        </div>
    );
};

export default ProjectSection;