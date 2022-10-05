import {WorkExperienceProps} from "../../types/work_experience_types";

export const workExperience: WorkExperienceProps[] = [
    {
        idx: 1,
        title: "Google Summer Of Code 2022 participant",
        position: "Software Developer",
        company: "52°North GmbH",
        companyLink: "https://github.com/52North/",
        companyVisible: true,
        timeActive: "May 2022 - Sept 2022",
        description: [
            "<a href='https://github.com/enviroCar/enviroCar-app'><b><u>enviroCar</u></b></a> is an Android application that can be used to collect Extended Floating Car Data.",
            "<a href='https://wiki.52north.org/Projects/GSoC2022ProjectIdeas#enviroCar_App:_Voice_Command'><b><u>[Project enviroCar App: Voice Command]</b></u></a>: I Worked on automating the enviroCar application’s actions via voice commands such as Start/stop track recording, select car to provide a user-friendly experience.",
        ],
        techStacks: ["Java", "Kotlin", "ML", "Rasa", "Python", "Docker"],
        extraLinks: [
            {
                text: "Accepted Proposal",
                link: 'https://summerofcode.withgoogle.com/programs/2022/projects/xXN12jAU'
            }, {
                text: "enviroBot Link",
                link: 'https://github.com/enviroCar/envirocar-rasa-bot'
            }, {
                text: "Project Link",
                link: 'https://github.com/enviroCar/enviroCar-app/pull/961'
            }
        ],

    }, {
        idx: 2,
        title: "Major League Hacking Fellowship: Open Source",
        position: "Software Developer",
        company: "Solana Labs",
        companyLink: "https://github.com/solana-labs/",
        companyVisible: true,
        timeActive: "May 2022 - Aug 2022",
        description: [
            "Built a marketplace from scratch that builders can host Solana grants that community can contribute to.",
            "Worked on creating smart contracts, web3 DB and front end integration.",
            "Collaborated with pod mates to design various implementations and completed the project under 12 weeks.",
        ],
        techStacks: ["Next.js", "Rust", "Typescript", "Anchor", "Solana-web3"],
        extraLinks: [
            {
                text: "Project Link",
                link: 'https://github.com/solana-developers/solana-grants'
            }
        ],

    }, {
        idx: 3,
        title: "Gramoday",
        position: "Android Developer Intern",
        company: "Agrilinks Technologies",
        companyLink: "https://www.gramoday.net/",
        companyVisible: false,
        timeActive: "Feb 2022 - Apr 2022",
        description: [
            "Collaborated with teams to define, design, and ship new features for the mobile apps in the bi-weekly sprint",
            "Worked on bug fixing and improved application performance reported by in-house QA."
        ],
        techStacks: ["Kotlin", "Firebase", "MongoDB"],
        extraLinks: [
            {
                text: "Application Link",
                link: 'https://play.google.com/store/apps/details?id=net.gramoday.agriculture'
            }
        ],

    }, {
        idx: 4,
        title: "XIRCLS - Collaborative Marketing Saas",
        position: "Android Developer Intern",
        company: "XIRCLS",
        companyLink: "https://www.linkedin.com/company/xircls/",
        companyVisible: false,
        timeActive: "September 2021 - November 2021",
        description: [
            "<b>3SRB</b><a href='https://play.google.com/store/apps/details?id=com.threesrb.app&hl=en_IN&gl=US'><b><u>(Google Play Store Link)</b></u></a>",
            "Worked with the Android team to  common development tools, and frameworks/libraries that the group will use for the  development.",
            "Updated downloading music and notes feature with respect to the android 11’s new storage updates.",
            "Wrote elegant, self-documenting code, easy to read and adapt for other developers.",
            "<b>XIRCLS</b><a href='https://play.google.com/store/apps/details?id=com.nucleus.xirclslive'><b><u>(Google Play Store Link)</b></u></a>",
            "Worked on the dark theme of the app to provide a better user experience.",
            "Ensure application is properly integrated with the APIs.",
        ],
        techStacks: ["Java", "Python", "Firebase", "Postman"],
        extraLinks: [],
    },
];