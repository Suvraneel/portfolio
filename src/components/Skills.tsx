import React from 'react';
import me from "../assets/images/profile_picture_1.png";
import Image from "next/image";
import {contact, resume, talks} from "../utils/links";
import Button from "./common/button";
import {openWebPage} from "../utils";

const SkillsSection = () => {
    return (
        <div
            id="skills"
            className="relative px-40 bg-[#0A192F] font-sans pt-20 text-white">
            <h2 className="text-[2.25rem] font-bold text-primary relative ml-[14px] mb-[3.75rem] underline">Skills</h2>

            <div className="px-20 gap-[80px]">
                <div
                    className="flex-start relative rounded-xl border-2 border-[#5DD39E] drop-shadow-xl
                    hover:shadow-black shadow-md hover:shadow-xl hover:-translate-y-[0.15rem]
                    bg-gray-800 w-[765px] absolute p-[1.875rem]">
                    <div>
                        <span className="tracking-wide font-normal text-justify mb-[1rem]">
                            <ul className="list-disc">
                                <li><b>Mobile</b>: Android(Java & Kotlin)</li>
                                <li><b>Web</b>: Next.js, React.js, HTML, CSS, JS</li>
                                <li><b>Blockchain</b>: Solana</li>
                                <li><b>Databases</b>: Firebase(Cloud Firestore & The Realtime Database), MySQL</li>
                                <li><b>Languages</b>: Kotlin, Java, Rust, JavaScript, TypeScript, Python, C/C++, </li>
                                <li><b>Tools</b>: Git, Postman, Figma</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;