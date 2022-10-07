export interface ProjectProps {
    idx: number;
    title: string;
    description: string;
    imagePath: string;
    projectLink: string;
    demoLink?: string;
    techStack: string[];
    category: string[];
}