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


const RightBar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <div
                className="fixed right-0 top-0 bg-[#0A192F] border-l-2 border-primary p-10 w-24 min-h-screen flex flex-col justify-center z-11">
                <ul className="flex flex-col gap-16">
                    <li>
                        <a href="#home" className="text-2xl">
                            <RiHome2Line color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="text-2xl">
                            <RiUser3Line color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="text-2xl">
                            <RiStackLine color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#work-experience" className="text-2xl">
                            <RiBriefcase2Line color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#resume" className="text-2xl">
                            <RiFileList3Line color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#talks" className="text-2xl aquamarine">
                            <TbMicrophone2 color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#blog" className="text-2xl aquamarine">
                            <RiDraftLine color="aquamarine"/>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="text-2xl aquamarine">
                            <RiChat3Line color="aquamarine"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default RightBar;
