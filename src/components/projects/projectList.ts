import {ProjectProps} from "../../types/project_types";

export const projectList: ProjectProps[] = [
    {
        idx: 0,
        projectLink: "https://github.com/solana-developers/solana-grants",
        imagePath: "/projects/solana-grants-logo.png",
        title: "Solana Grants",
        description: "<b>Solana Grants</b> is a marketplace where builders can host grants that community can contribute to.",
        demoLink: "https://solana-grants-nine.vercel.app/",
        techStack: ["Solana", "Next.js", "Typescript", "Rust", "Arweave"],
        category: ["Web3"],
    },
    {
        idx: 1,
        projectLink: "https://github.com/cdhiraj40/LeetDroid",
        title: "LeetDroid",
        imagePath: "/projects/leetdroid-logo.png",
        demoLink: "https://play.google.com/store/apps/details?id=com.cdhiraj40.leetdroid",
        description: "<b>LeetDroid</b> is An android client for LeetCode.<br/>Project proposes <b>one-stop for all leetcode work in Android</b> to keep track of all your leetcode activities.",
        techStack: ["Kotlin", "Firebase", "Graph QL"],
        category: ["Android"],
    },    {
        idx: 2,
        projectLink: "https://github.com/CerritusCodersComm/edujam",
        title: "eduJam",
        imagePath: "/projects/edujam-logo.png",
        description: "<b>eduJam</b> is a university app, which will help you with all of your university work*",
        techStack: ["Kotlin", "Firebase", "Room Database"],
        category: ["Android"],
    },
];