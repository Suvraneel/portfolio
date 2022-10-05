export interface WorkExperienceProps {
    idx: number;
    title: string;
    position: string;
    company: string;
    companyLink: string;
    companyVisible: boolean;
    timeActive: string;
    description: string[];
    techStacks?: string[];
    extraLinks?: ExtraLinks[];
}

interface ExtraLinks {
    text: string;
    link: string;
}