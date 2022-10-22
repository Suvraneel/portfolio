import Image from "next/image";
import ScrollDown from "./scrolldown";
import HeroSocials from "./HeroSocials";
import Button from "./common/button";
import {openWebPage} from "../utils";
import {contact} from "../utils/links";

const HeroSection = () => {
    return (
        <div
            id="home"
            className="w-full min-h-screen font-silkscreen flex items-center justify-center text-white"
        >
            <div className="hero">
                <div className="flex items-center justify-center">
                    <div className="flex gap-[250px]">
                        <div className="flex items-center justify-center">
                            <div>
                                <h1 className="text-8xl font-bold">Dhiraj Chauhan</h1>
                                <p className="text-3xl font-bold pt-6 pb-4">
                                    Software Developer
                                </p>
                                <HeroSocials/>
                                <Button variant={"secondary"}
                                        className="btn border-none mt-2"
                                        onClick={() => openWebPage(contact)}>
                                    Get in Touch
                                </Button>
                            </div>
                        </div>
                        <Image
                            src={"/images/profile_picture_1.png"}
                            alt="Dhiraj's picture"
                            width={350}
                            height={350}
                            className="rounded-full shadow-2xl max-w-sm"
                        />
                    </div>

                </div>
                <ScrollDown/>
            </div>

            {/*<div className="flex items-center justify-center text-center h-screen">*/
            }
            {/*    <ul>*/
            }
            {/*        <li>*/
            }
            {/*            <Image*/
            }
            {/*                src={"/images/profile_picture_1.png"}*/
            }
            {/*                alt="Dhiraj's picture"*/
            }
            {/*                width={120}*/
            }
            {/*                height={120}*/
            }
            {/*                className="rounded-full"*/
            }
            {/*            />*/
            }
            {/*        </li>*/
            }
            {/*        <li>*/
            }
            {/*            <h1 className="text-3xl text-[#8332AC] font-bold">*/
            }
            {/*                Dhiraj Chauhan*/
            }
            {/*            </h1>*/
            }
            {/*        </li>*/
            }
            {/*        <li>*/
            }
            {/*            <p className="py-4">Software Developer</p>*/
            }
            {/*        </li>*/
            }
            {/*        /!*<li><p className="py-4">I like to build stuff that makes a difference in the world.</p></li>*!/*/
            }
            {/*        <HeroSocials/>*/
            }
            {/*        <Button*/
            }
            {/*            variant={"rounded_with_secondary"}*/
            }
            {/*            onClick={() => openWebPage(contact)}*/
            }
            {/*        >*/
            }
            {/*            Get in Touch*/
            }
            {/*        </Button>*/
            }
            {/*    </ul>*/
            }
            {/*    <ScrollDown/>*/
            }
            {/*</div>*/
            }
        </div>
    )
        ;
};

export default HeroSection;
