import React from 'react';
import me from "../assets/images/profile_picture_1.png";
import Image from "next/image";
import {contact, resume, talks} from "../utils/links";
import Button from "./common/button";
import {openWebPage} from "../utils";

const AboutSection = () => {
    return (
        <div
            className="relative px-40 min-h-screen bg-[#0A192F] font-sans pt-20 text-white">
            <h2 className="text-[2.25rem] font-bold text-primary relative ml-[14px] mb-[3.75rem] underline">About
                Me </h2>

            <div className="flex items-center justify-center px-20 mt-20 gap-[80px]">
                <Image src={me} width={255} height={270} className="rounded-full"/>

                <div
                    className="flex-start relative rounded-xl border-2 border-[#5DD39E] w-[765px] absolute p-[1.875rem]">
                    <div>
                        <span className="tracking-wide font-normal text-justify mb-[1rem]">
                            {/*I am a third-year CS student who likes to listen to lo-fi while coding for hours.*/}

                            {/*💼 GSoC'22 at 52° North | MLH Fellow Summer'22 at Solana Labs | GitHub Campus Expert | Android Developer | Solana Blockchain Developer | GSSoC'22 Mentor*/}
                            Hello! I'm Dhiraj, a third-year CS student from India, a software developer who likes to
                            build stuff that makes a difference in the world.<br/>
                            I usually work on <b>Android development</b>, <b>web development</b>, and <b>Solana
                            blockchain</b>.<br/><br/>
                            I believe in public learning, and I am constantly eager to learn new things and enjoy
                            sharing what I have learned with others. I love interacting with folks and helping community
                            members is what I like to do daily.<br/><br/>
                            I love to <a href={talks}>
                            <b><u>speak</u></b>
                        </a> and have conducted multiple sessions to encourage and mentor students
                            towards programming, open source, and building tech communities.<br/><br/>
                            <ul className="list-disc">
                                <li><a href={"https://summerofcode.withgoogle.com/programs/2022/projects/xXN12jAU"}>
                                    <u>Google Summer of Code Student</u></a> at <a
                                    href={"https://github.com/52North/"}><b><u>52°North</u></b></a>.
                                </li>
                                <li><a href={"https://github.com/solana-developers/solana-grants/"}>
                                    <u>MLH Fellow Summer'22</u></a> at <a href={"https://github.com/solana-labs"}><b><u>Solana
                                    Labs</u></b></a>.
                                </li>
                                <li>A <a href={"https://githubcampus.expert/cdhiraj40/"}><b><u>GitHub Campus Expert</u></b></a>.
                                </li>
                                <li>Co-founder of <a href={"https://github.com/cerrituscoderscomm"}><b><u>Cerritus
                                    Coders</u></b></a>.
                                </li>
                            </ul>
                        </span>
                        <div className="space-x-5 mt-2">
                            <Button variant={"rounded_with_secondary"}
                                    onClick={() => openWebPage(resume)}>Checkout my Resume</Button>
                            <Button variant={"rounded_with_secondary"}
                                    onClick={() => openWebPage(contact)}>Connect with me</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;