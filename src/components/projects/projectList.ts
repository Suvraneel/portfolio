import {ProjectProps} from "../../types/project_types";

export const projectList: ProjectProps[] = [
    {
        idx: 0,
        projectLink: "https://github.com/solana-developers/solana-grants",
        imageLink: "https://drive.google.com/uc?export=view&id=1R7H9tj3BhnETNolevh_13KyASZuZaZD-",
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
        imageLink: "https://raw.githubusercontent.com/cdhiraj40/LeetDroid/development/app/src/main/res/drawable/app_logo.png",
        demoLink: "https://play.google.com/store/apps/details?id=com.cdhiraj40.leetdroid",
        description: "<b>LeetDroid</b> is An android client for LeetCode.<br/>Project proposes <b>one-stop for all leetcode work in Android</b> to keep track of all your leetcode activities.",
        techStack: ["Kotlin", "Firebase", "Graph QL"],
        category: ["Android"],
    },    {
        idx: 2,
        projectLink: "https://github.com/CerritusCodersComm/edujam",
        title: "eduJam",
        imageLink: "https://raw.githubusercontent.com/CerritusCodersComm/eduJam/main/app/src/main/res/drawable/edujamicon.png",
        description: "<b>eduJam</b> is a university app, which will help you with all of your university work*",
        techStack: ["Kotlin", "Firebase", "Room Database"],
        category: ["Android"],
    },
];