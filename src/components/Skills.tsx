import React from "react";
import Text from "./common/text";

const SkillsSection = () => {
    return (
        <div
            id="skills"
            className="relative font-silkscreen pt-20 text-white"
        >
            <Text variant="big-heading" className="pl-[120px]">Skills</Text>

            <div className="flex items-center justify-center">
                <div
                    className="flex-start relative rounded-xl border-2 border-[#5DD39E] drop-shadow-xl
                    hover:shadow-black shadow-md hover:shadow-xl hover:-translate-y-[0.15rem]
                    bg-gray-800 w-[800px] absolute p-[1.875rem]"
                >
                    <div>
            <span className="tracking-wide font-normal text-lg text-justify mb-[1rem]">
              <ul className="list-disc">
                <li>
                  <b>Mobile</b>: Android(Java & Kotlin)
                </li>
                <li>
                  <b>Web</b>: Next.js, React.js, HTML, CSS, JS
                </li>
                <li>
                  <b>Blockchain</b>: Solana
                </li>
                <li>
                  <b>Databases</b>: Firebase(Cloud Firestore & The Realtime
                  Database), MySQL
                </li>
                <li>
                  <b>Languages</b>: Kotlin, Java, Rust, JavaScript, TypeScript,
                  Python, C/C++,{" "}
                </li>
                <li>
                  <b>Tools</b>: Git, Postman, Figma
                </li>
              </ul>
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
