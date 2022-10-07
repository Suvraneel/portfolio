// Next, React
import {FC} from 'react';
import AboutSection from "../../components/About";
import HeroSection from "../../components/Hero";
import SkillsSection from "../../components/Skills";
import ExperienceSection from "../../components/work-experience/Experience";
import VolunteerExperienceSection from "../../components/volunteer-experience/VolunteerExperience";
import ProjectSection from "../../components/projects/ProjectSection";
import TalksSection from "../../components/talks/TalksSection";


export const HomeView: FC = ({}) => {

    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ExperienceSection/>
            <VolunteerExperienceSection/>
            <ProjectSection/>
            <TalksSection/>
        </>
    );
};