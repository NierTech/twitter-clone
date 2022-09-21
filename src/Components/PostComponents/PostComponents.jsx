import React from "react";
import Avatar from "../UI/Avatar/Avatar";
import PostIcons from "../UI/PostIcons/PostIcons";

const PostComponents = ({ post }) => {
  return (
    <>
      {post.map((item, idx) => {
        return (
          <div className="border-b hover:bg-zinc-100 transition" key={idx}>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <Avatar />
                <h1 className="font-bold text-sm">Kotonoha Katsura</h1>
                <span className="text-gray-500 text-sm">@kotonohakatsura</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="p-1">{item.author}</p>
                <img
                  className="rounded-xl"
                  src={item.download_url}
                  alt="first img"
                />
              </div>
              <PostIcons />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostComponents;
