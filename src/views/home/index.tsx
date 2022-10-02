// Next, React
import {FC, useEffect} from 'react';
import Image from "next/image";
import me from "../../assets/images/profile_picture_1.png";
import HeroSocials from "../../components/HeroSocials";
import ScrollDown from "../../components/scrolldown";


export const HomeView: FC = ({}) => {

    return (
        <div className="relative mr-24 min-h-screen font-sans flex items-center justify-center bg-[#0A192F] text-white">
            <div className="flex items-center justify-center text-center h-screen">
                <ol>
                    <li><Image src={me} alt="Dhiraj's picture" width={120} height={120} className="rounded-full"/></li>
                    <li><h1 className="text-3xl text-[#8332AC] font-bold">Dhiraj Chauhan</h1></li>
                    <li><p className="py-4">Software Developer</p></li>
                    {/*<li><p className="py-4">I like to build stuff that makes a difference in the world.</p></li>*/}
                    <HeroSocials/>
                    <button className="btn btn-primary btn-xs opacity-80 hover:opacity-100 shadow-[#dcdde1] shadow-md
                    hover:shadow-xl hover:transition-all sm:btn-xs md:btn-sm lg:btn-md  capitalize border-none
                    bg-secondary rounded-full my-2">Get in Touch
                    </button>
                </ol>
                <ScrollDown/>
            </div>
        </div>
    );
};