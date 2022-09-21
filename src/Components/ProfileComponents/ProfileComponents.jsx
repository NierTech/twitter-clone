import React from "react";
import Avatar from "../UI/Avatar/Avatar";

const ProfileComponents = () => {
  return (
    <div className="hover:bg-zinc-200 transition rounded-full p-4 xs:hidden s:hidden m:hidden">
      {/* Profile menu, 1 div - bg-hover, 2 div - main info, 3 div - img, 4 div - Nickname */}
      <div className="flex gap-3">
        <Avatar />
        <div>
          <a href="/">
            <h1 className="font-bold">Kotonoha</h1>
            <p className="text-gray-500">@kotonohakatsura</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponents;
