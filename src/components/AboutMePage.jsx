import React from "react";
import catKeyboard from "/cat-keyboard.gif";

function AboutMePage() {
  return (
    <div className="text-white border-2 border-violet-200 p-4 flex flex-row justify-center items-center">
      <div className="w-2/3">
        <h1 className="text-6xl leading-normal">Hi! Nice to meet you.</h1>
        <p className="text-6xl leading-tight">
          I'm{" "}
          <span className="underline underline-offset-[20px] decoration-green-400 font-thin">
            Katanyu Ploengpis
          </span>{" "}
          <span className="text-4xl">
            ( <span className="text-4xl font-thin">Tee</span> )
          </span>
        </p>
        <p className="mt-10">I'm a front-end developer</p>
        <p>passionate about building web apps</p>
        <button className="w-[200px] border-x-4 border-green-400 p-4 mt-16 text-xl hover:bg-slate-700">
          <a href="#contact-me">CONTACT ME</a>
        </button>
      </div>
      <div className="w-1/3">
        <div className="border-2 border-green-300 w-full rounded-full overflow-hidden">
          <img src={catKeyboard} alt="cat-keyboard-gif" className="w-full"/>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
