import React, {useState} from "react";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiDraftLine,
    RiChat3Line,
    RiFileList3Line,
} from "react-icons/ri";
import {TbMicrophone2} from "react-icons/tb";
import {FaLaptopCode} from "react-icons/fa";


const RightBar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <div
                className="fixed right-0 top-0 bg-[#0A192F] border-l-2 border-primary p-10 w-24 min-h-screen flex flex-col justify-center z-11">
                <ul className="flex flex-col gap-8">
                    <li>
                        <ul>
                            <li>
                                <a href="#home">
                                    <RiHome2Line className="text-2xl" color="aquamarine"/>
                                    <p className="flex justify-center items-center text-[14px]">Home</p>
                                </a>

                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <a href="#about">
                            <RiUser3Line className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">About</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills">
                            <RiStackLine className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Skills</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#work-experience">
                            <RiBriefcase2Line className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Experience</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects">
                            <FaLaptopCode className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Projects</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="https://resume.cdhiraj40.dev">
                            <RiFileList3Line className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Resume</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#talks">
                            <TbMicrophone2 className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Talks</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#blogs" className="aquamarine">
                            <RiDraftLine className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Blogs</p>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="https://links.cdhiraj40.dev" className="aquamarine">
                            <RiChat3Line className="text-2xl" color="aquamarine"/>
                            <p className="flex justify-center items-center text-[14px]">Contact</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default RightBar;
