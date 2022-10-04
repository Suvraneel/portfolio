// Next, React
import {FC} from 'react';
import AboutSection from "../../components/About";
import HeroSection from "../../components/Hero";
import SkillsSection from "../../components/Skills";


export const HomeView: FC = ({}) => {

    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
        </>
    );
};