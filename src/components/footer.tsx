import React from "react";
import Text from "./common/text";
import {FaArrowUp} from "react-icons/fa";

const Footer = () => {
    return (
        <div
            id="footer"
            className="font-silkscreen mt-20 mb-6 text-white">

            <Text className="flex items-center justify-center" variant="paragraph">Built by <b>&nbsp;
                @cdhiraj40</b></Text>
            <a href="#home" className="btn rounded-full float-right -mt-12 border-transparent bg-secondary
            text-white hover:bg-primary font-bold hover:border-2 hover:border-black hover:-translate-y-[0.15rem]
            active:translate-y-[0.025rem] active:scale-[0.975]">
                <FaArrowUp/>
            </a>
        </div>
    );
};

export default Footer;
