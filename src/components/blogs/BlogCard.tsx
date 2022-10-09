import React from "react";
import Image from "next/image";
import {BlogProps} from "../../types/blog_types";
import Text from "../common/text";
import {openWebPage, truncateText} from "../../utils";

const BlogCard = ({
                      id,
                      title,
                      description,
                      blogLink,
                      tags,
                      date,
                  }: BlogProps) => {
    return (
        <div className="card w-auto shadow-xl bg-gray-800 border-2 p-2 border-[#5DD39E]">
            <div className="max-w-4xl lg:flex">
                <div
                    className="rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-secondary text-2xl underline underline-offset-2 font-bold mb-2
                        cursor-pointer"
                             onClick={
                                 () => openWebPage(blogLink)
                             }>
                            {title}
                        </div>
                        <Text variant="paragraph" className="float-right mt-2">
                            {truncateText(description, 250)}
                        </Text>
                    </div>
                    <div className="flex items-center">
                        <Image
                            className="rounded-full mr-4"
                            width={50}
                            height={50}
                            src={"/images/profile_picture_1.png"}
                            alt="Dhiraj's picture"
                        />
                        <div className="mx-2">
                            <p className="text-secondary leading-none">Dhiraj Chauhan</p>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 my-2 justify-start">
                    {tags.map((tech, idx) => (
                        <div className="badge badge-outline border-primary mr-2 mt-4 p-4">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
