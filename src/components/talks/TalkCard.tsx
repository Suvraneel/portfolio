import React from 'react';
import YouTube, {YouTubeProps} from "react-youtube";
import Image from "next/image";
import {TalkProps} from "../../types/talk_types";
import {talks} from "../../utils/links";
import {openWebPage} from "../../utils";
import Button from 'components/common/button';
import Text from 'components/common/text';

const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const TalkCard = ({
                      id,
                      title,
                      imagePath,
                      videoID,
                      timing,
                  }: TalkProps) => {

    return (
        <div className="card w-auto shadow-xl bg-[#1F2937] border-2 p-2 border-[#5DD39E]">
            <figure className='relative'>
                {
                    videoID
                        ? <YouTube iframeClassName={"youtubeContainer"} videoId={videoID} opts={opts}/>
                        : null
                }
                {
                    imagePath
                        ? <Image className='rounded-xl' width={640} height={390} src={imagePath} alt="Talk Image"/>
                        : null
                }
            </figure>
            <div className="mx-2 text-secondary items-center">
                <h2 className="card-title mt-1 float-left text-2xl underline underline-offset-2">{title}</h2>
                <Text variant="paragraph" className="float-right mt-2">{timing}</Text>
            </div>
            <div className="justify-center px-3 mb-1 space-x-4 tems-center">
                <Button className="rounded-xl px-3" variant={"rounded_with_secondary"}
                        onClick={() => openWebPage(`${talks}/${id}`)}>Talk Details</Button>
                <Button className="rounded-xl" variant={"rounded_with_secondary"}
                        onClick={() => openWebPage(`https://youtube.com/watch?v=${videoID}`)}>Youtube Video</Button>
            </div>
        </div>
    );
};

export default TalkCard;