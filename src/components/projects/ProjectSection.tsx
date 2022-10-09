import React from "react";
import Text from "../common/text";
import {projectList} from "./projectList";
import ProjectCard from "./ProjectCard";
import {projects} from "../../utils/links";
import Button from "../common/button";

const ProjectSection = () => {
    return (
        <div
            id="projects"
            className="relative font-silkscreen pt-20 text-white"
        >
            <Text variant="big-heading" className="pl-[120px]">Projects</Text>

            <div className="flex flex-wrap justify-center gap-10">
                {projectList.map((props, idx) => (
                    <ProjectCard {...props} key={idx} idx={props.idx}/>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Button
                    variant={"rounded_with_secondary"}
                    className="rounded-xl uppercase"
                    onClick={() => window.open(projects, "_blank")}
                >
                    View all projects
                </Button>
            </div>
        </div>
    );
};

export default ProjectSection;
