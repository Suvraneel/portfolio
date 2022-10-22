// Next, React
import {FC} from 'react';
import AboutSection from "../../components/About";
import HeroSection from "../../components/Hero";
import SkillsSection from "../../components/Skills";
import ExperienceSection from "../../components/work-experience/Experience";
import VolunteerExperienceSection from "../../components/volunteer-experience/VolunteerExperience";
import ProjectSection from "../../components/projects/ProjectSection";
import TalksSection from "../../components/talks/TalksSection";
import BlogSection from "../../components/blogs/BlogSection";
import Footer from "../../components/footer";


export const HomeView: FC = ({}) => {

    return (
        <>
            <HeroSection/>
            <div className="w-full space-y-20">
                <AboutSection/>
                <SkillsSection/>
                <ExperienceSection/>
                <VolunteerExperienceSection/>
                <ProjectSection/>
                <TalksSection/>
                <BlogSection/>
            </div>
            <Footer/>
        </>
    );
};