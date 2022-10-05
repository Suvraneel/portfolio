import React, {useState} from 'react';
import {volunteerWorkExperience} from "./volunteer_work_experience";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {openWebPage} from "../../utils";

const VolunteerExperienceSection = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div
            id="volunteer-experience"
            className="relative px-40 min-h-screen bg-[#0A192F] font-sans pt-20 text-white">
            <h2 className="text-[2.25rem] font-bold text-primary relative ml-[14px] mb-[3.75rem] underline">
                Volunteer Experience
            </h2>

            <div className="px-20">
                <Tabs
                    className="flex"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"text-secondary bg-gray-100 bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-l-lg"}
                    selectedTabPanelClassName={"shadow-black shadow-xl -translate-y-[0.15rem]"}
                >
                    <TabList className=" mb-[1.25rem]">
                        {volunteerWorkExperience.map((experience) => {
                            const {idx, company} = experience;
                            return (
                                <Tab className="flex relative" key={idx}>
                                    <button className="inline-block text-left font-bold w-full bg-transparent px-[2rem] py-[1rem]
                                    cursor-pointer">
                                        {company}
                                    </button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {volunteerWorkExperience.map((experience) => {
                        const {
                            idx,
                            company,
                            companyLink,
                            companyVisible,
                            timeActive,
                            title,
                            description,
                            position,
                            techStacks,
                            extraLinks
                        } = experience;
                        return (
                            <TabPanel className="flex" key={idx}>
                                <div className="flex-start relative rounded-r-xl border-2 border-[#5DD39E] drop-shadow-xl
                                shadow-md bg-gray-800 w-[765px] absolute p-[1.875rem]">
                                    <div>
                                        <span className="tracking-wide font-normal text-justify mb-[1rem]">
                                            <div className="flex space-x-2 text-xl mb-1 ">
                                                {companyVisible === true ? (
                                                        <>
                                                            <h2 className="text-primary">
                                                                {title} at
                                                            </h2>
                                                            <span className="cursor-pointer" onClick={() => {
                                                                openWebPage(companyLink)
                                                            }}><b><u>{company}</u></b>
                                                    </span>
                                                        </>
                                                    ) :
                                                    <h2 className="text-primary cursor-pointer" onClick={() => {
                                                        openWebPage(companyLink)
                                                    }}>
                                                        <b><u>{title}</u></b>
                                                    </h2>
                                                }
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <p className="text-[14px] italic mb-[1rem]">{position}</p>
                                            <p className="text-[14px] text-right italic mb-[1rem]">{timeActive}</p>
                                            </div>
                                            <ul>
                                                {description.map((info, index) => {
                                                    return (<>
                                                            <li className="text-white list-disc mb-2"
                                                                key={index}>
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: info
                                                                    }}></div>
                                                            </li>
                                                        </>
                                                    );
                                                })}
                                                {techStacks ? (
                                                    <li className="mb-2">Technology
                                                        used: {techStacks.map((info, index) => {
                                                            return (<span className="font-bold"
                                                                          key={index}>
                                                                {info},&nbsp;
                                                        </span>
                                                            );
                                                        })}</li>
                                                ) : null
                                                }
                                                    </ul>
                                            {extraLinks ? extraLinks.map((extraLinks, index) => {
                                                return <button
                                                    className="btn btn-primary rounded-xl border-none bg-secondary hover:bg-primary mr-4"
                                                    onClick={
                                                        () => window.open(extraLinks.link, "_blank")
                                                    }>{extraLinks.text}
                                                </button>
                                            }) : null
                                            }
                                                    </span>
                                    </div>
                                </div>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </div>
    );
};

export default VolunteerExperienceSection;