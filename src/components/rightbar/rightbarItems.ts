import {IconType} from "react-icons";
import {
    RiBriefcase2Line,
    RiChat3Line,
    RiDraftLine,
    RiFileList3Line,
    RiHome2Line,
    RiStackLine,
    RiUser3Line
} from "react-icons/ri";
import {FaLaptopCode} from "react-icons/fa";
import {TbMicrophone2} from "react-icons/tb";
import {talks} from "../../utils/links";

interface RightBarItem {
    Icon: IconType;
    label: string;
    url: string;
}

export const rightBarItems: RightBarItem[] = [
    {
        Icon: RiHome2Line,
        label: "Home",
        url: "#home",
    },
    {
        Icon: RiUser3Line,
        label: "About",
        url: "#about",
    },
    {
        Icon: RiBriefcase2Line,
        label: "Experience",
        url: "#experience",
    },
    {
        Icon: RiStackLine,
        label: "Skills",
        url: "#skills",
    },
    {
        Icon: FaLaptopCode,
        label: "Projects",
        url: "#projects",
    },
    {
        Icon: RiFileList3Line,
        label: "Resume",
        url: "https://resume.cdhiraj40.dev",
    },
    {
        Icon: TbMicrophone2,
        label: "Talks",
        url: talks,
    },
    {
        Icon: RiDraftLine,
        label: "Blogs",
        url: '#blogs',
    },
    // {
    //     Icon: DiOpensource,
    //     label: "Cerritus Coders",
    //     url: '#cerritus-coders',
    // },
    {
        Icon: RiChat3Line,
        label: "Contact",
        url: 'https://links.cdhiraj40.dev',
    },
];