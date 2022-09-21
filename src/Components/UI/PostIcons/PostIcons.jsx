import React from "react";

const PostIcons = () => {
  const comments = Math.floor(Math.random() * 50);
  const repost = Math.floor(Math.random() * 30);
  const likes = Math.floor(Math.random() * 70);
  return (
    <div className="flex justify-evenly mt-3">
      <div className="flex items-center gap-3">
        <div className="hover:bg-sky-200 rounded-full p-2 transition">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/metro/344/comments.png"
            alt="comments"
          />
        </div>
        <p className="text-gray-400 ">{comments}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="hover:bg-green-200 rounded-full p-2 transition">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/344/external-repost-arrows-inkubators-detailed-outline-inkubators.png"
            alt="reposts"
          />
        </div>
        <p className="text-gray-400">{repost}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="hover:bg-pink-300 rounded-full p-2 transition">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/material-outlined/344/like--v1.png"
            alt="likes"
          />
        </div>
        <p className="text-gray-400">{likes}</p>
      </div>
    </div>
  );
};

export default PostIcons;
