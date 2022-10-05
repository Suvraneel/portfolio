export interface ProjectProps {
    idx: number;
    title: string;
    description: string;
    imageLink: string;
    projectLink: string;
    demoLink?: string;
    techStack: string[];
    category: string[];
}