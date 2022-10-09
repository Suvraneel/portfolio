import React from "react";
import Text from "../common/text";
import {talksList} from "./talksList";
import TalkCard from "./TalkCard";
import {talks} from "../../utils/links";
import Button from "../common/button";

const TalksSection = () => {
    return (
        <div
            id="talks"
            className="relative font-silkscreen pt-20 text-white"
        >
            <Text variant="big-heading" className="pl-[120px]">Talks</Text>

            <div className="flex items-center flex-wrap justify-center gap-10">
                {talksList.map((props, idx) => (
                    <TalkCard {...props} key={idx} idx={props.idx}/>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Button
                    variant={"rounded_with_secondary"}
                    className="rounded-xl uppercase"
                    onClick={() => window.open(talks, "_blank")}
                >
                    View all talks
                </Button>
            </div>
        </div>
    );
};

export default TalksSection;
