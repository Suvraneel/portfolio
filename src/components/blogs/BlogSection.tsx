import React from "react";
import Text from "../common/text";
import { blogs, talks } from "../../utils/links";
import Button from "../common/button";
import BlogCard from "./BlogCard";
import { blogList } from "./blogList";

const BlogSection = () => {
  return (
    <div
      id="blogs"
      className="relative min-h-screen px-40 bg-[#0A192F] font-silkscreen pt-20 text-white"
    >
      <Text variant="big-heading">Recent Blogs</Text>

      <div className="grid grid-rows-2 justify-center gap-20">
        {blogList.map((props, idx) => (
          <BlogCard {...props} key={idx} idx={props.idx} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          variant={"rounded_with_secondary"}
          className="rounded-xl uppercase"
          onClick={() => window.open(blogs, "_blank")}
        >
          View all blogs
        </Button>
      </div>
    </div>
  );
};

export default BlogSection;
