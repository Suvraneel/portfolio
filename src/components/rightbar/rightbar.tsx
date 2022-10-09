import React, {useState} from "react";
import {rightBarItems} from "./rightbarItems";

const RightBar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <div
                className="fixed right-0 top-0 border-l-2 border-primary w-28 min-h-screen flex flex-col justify-center z-11">
                <ul className="flex flex-col gap-8">
                    {rightBarItems.map(({Icon, label, url}, idx) => (
                        <a href={url} className="flex flex-col justify-center items-center">
                            <Icon className="text-2xl hover:text-primary text-[aquamarine]"/>
                            <p className="flex justify-center text-white items-center text-[16px]">
                                {label}
                            </p>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default RightBar;
