import React from "react";
import Tweet from "../UI/Tweet/Tweet";

const HeaderComponents = () => {
  const icons = [
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
      title: "Home",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/1827/1827975.png",
      title: "Explore",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/2529/2529521.png",
      title: "Notifications",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/542/542638.png",
      title: "Messages",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/25/25667.png",
      title: "Bookmarks",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/570/570170.png",
      title: "Lists",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
      title: "Profile",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://cdn-icons-png.flaticon.com/512/2549/2549922.png",
      title: "More",
    },
  ];
  return (
    <div className="fixed mx-12">
      {/* Header icons */}
      <div className="w-fit p-1">
        <a
          className="flex items-center p-2 hover:bg-blue-100 transition rounded-full"
          href="/"
        >
          <img
            className="w-8 h-8"
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="twitter-logo"
          />
        </a>
      </div>
      {/* Header nav menu */}
      <nav className="w-fit">
        {icons.map((item, idx) => {
          return (
            <div
              className="p-4 hover:bg-zinc-200 transition rounded-full xs:hidden s:hidden m:hidden"
              key={idx}
            >
              <a className="flex items-center gap-4 " href="/">
                <img className="w-6 h-6" src={item.img} alt={item.title} />
                <h2 className="text-xl">{item.title}</h2>
              </a>
            </div>
          );
        })}
      </nav>
      <Tweet />
    </div>
  );
};

export default HeaderComponents;
