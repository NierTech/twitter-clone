import React from "react";
import Avatar from "../UI/Avatar/Avatar";

const PostWritting = () => {
  return (
    <>
      <h1 className="font-bold text-xl p-4">Home</h1>
      <form className="border-b">
        <div className="flex mx-5">
          <Avatar />
          <div className="grow pl-2">
            <textarea
              className="w-full p-2 bg-transparent text-xl"
              placeholder={"What's happening?"}
            />
            <div className="text-right m-2">
              <button className="bg-sky-500 text-white px-5 py-2 rounded-full font-bold">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostWritting;
