// Next, React
import {FC, useEffect} from 'react';
import Image from "next/image";
import me from "../../assets/images/profile_picture_1.png";
import HeroSocials from "../../components/HeroSocials";
import ScrollDown from "../../components/scrolldown";
import {openWebPage} from "../../utils";
import {contact} from "../../utils/links";
import AboutSection from "../../components/About";
import Button from "../../components/common/button";


export const HomeView: FC = ({}) => {

    return (
        <>
            <div
                className="relative mr-24 min-h-screen font-sans flex items-center justify-center bg-[#0A192F] text-white">
                <div className="flex items-center justify-center text-center h-screen">
                    <ol>
                        <li><Image src={me} alt="Dhiraj's picture" width={120} height={120} className="rounded-full"/>
                        </li>
                        <li><h1 className="text-3xl text-[#8332AC] font-bold">Dhiraj Chauhan</h1></li>
                        <li><p className="py-4">Software Developer</p></li>
                        {/*<li><p className="py-4">I like to build stuff that makes a difference in the world.</p></li>*/}
                        <HeroSocials/>
                        <Button variant={"rounded_with_secondary"}
                                onClick={() => openWebPage(contact)}>Get in Touch</Button>
                    </ol>
                    <ScrollDown/>
                </div>
            </div>
            <AboutSection/>
        </>
    );
};