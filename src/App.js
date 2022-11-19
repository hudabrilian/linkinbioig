import React from "react";
import { links } from "./constants";

export default function App() {
  return (
    <div className="max-w-screen max-h-screen font-mono cursor-default antialiased">
      <div className="flex flex-col justify-center items-center my-10">
        <div className="space-y-10 flex flex-col items-center justify-center">
          <div className="h-full flex items-center justify-center my-5">
            <div className="rounded-full h-20 w-20 relative bg-gray-800 animate-ping transition-all duration-300"></div>
            <div className="rounded-full absolute flex">
              <img src="me.jpg" alt="me" className="rounded-full h-32 w-32" />
            </div>
          </div>
          <div className="text-center space-y-2 px-20">
            <h1 className="font-bold text-2xl hover:underline">Huda Brilian</h1>
            <p className="text-sm break-words">
              Just someone else who wants to do whatever I like.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center w-full justify-center items-center my-7 space-y-7">
          {links.map((link) => (
            <a href={link.url} className="btn">
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-sm text-gray-400 cursor-default my-5">
          &copy; {new Date().getFullYear()} Briel.
        </div>
      </div>
    </div>
  );
}
