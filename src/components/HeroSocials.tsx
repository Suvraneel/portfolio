import React from 'react';
import {FaGithub, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa';
import {SiGmail} from "react-icons/si";

const HeroSocials = () => {
    return (
        <div className="flex items-center justify-center space-x-4 my-2">
            <a href='https://www.linkedin.com/in/cdhiraj40/' className='hero-social-link' target='_blank'>
                <FaLinkedinIn/>
            </a>

            <a href='https://www.github.com/cdhiraj40' className='hero-social-link' target='_blank'>
                <FaGithub/>
            </a>

            <a href='https://www.twitter.com/cdhiraj40' className='hero-social-link' target='__blank'>
                <FaTwitter/>
            </a>

            <a href='mailto:chauhandhiraj40@gmail.com' className='hero-social-link'
               target='__blank'>
                <SiGmail/>
            </a>

            <a href='https://www.youtube.com/channel/UCTSqyTvuLkxlTZhxs84djbA' className='hero-social-link'
               target='__blank'>
                <FaYoutube/>
            </a>

            {/*<a href='https://www.twitch.tv/thefunnyintrovert' className='hero-social-link' target='__blank'>*/}
            {/*    <FaTwitch/>*/}
            {/*</a>*/}
        </div>
    );
};

export default HeroSocials;
