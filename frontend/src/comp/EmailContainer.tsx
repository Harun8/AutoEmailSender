import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const EmailContainer = () => {
  const [theme, setTheme] = useState<string>("blue");

  const changeTheme = (color: string) => {
    setTheme(color);
  };

  const themeColorClass =
    theme === "pink"
      ? "bg-pink-200"
      : theme === "green"
      ? "bg-green-200"
      : "bg-blue-200";

  return (
    <div className="px-6 py-4">
      <div className="font-bold text-sm mb-2 flex justify-center space-x-4">
        <button
          onMouseOver={() => changeTheme("pink")}
          className=" px-6 py-2  bg-slate-100 hover:bg-slate-400 text-pink-900 shadow-lg  rounded-lg">
          Rose
        </button>
        <button
          onMouseOver={() => changeTheme("green")}
          className="px-6 py-2  bg-slate-100 hover:bg-slate-400 text-green-900 shadow-lg   rounded-lg">
          Mint
        </button>
        <button
          onMouseOver={() => changeTheme("blue")}
          className="px-6 py-2  bg-slate-100 hover:bg-slate-400 text-sky-900 shadow-lg   rounded-lg">
          Sky
        </button>
      </div>

      <div className={`${themeColorClass} rounded-xl text-gray-950 p-6 mt-4`}>
        <p>Dear [Name],</p>
        <p className="m-6">
          I hope this message finds you well. I wanted to take a moment to wish
          you a very happy birthday! 🎂
        </p>
        <TypeAnimation
          aria-label="We produce food for Mice, Hamsters, Guinea Pigs and Chinchillas"
          sequence={[
            "Warmest wishes, your favorite colleague",
            500,
            "Warmest wishes, Dad",
            500,
            "Warmest wishes, Mom",
            500,
          ]}
          speed={50}
          style={{ fontSize: "1em" }}
          repeat={Infinity}></TypeAnimation>
      </div>
    </div>
  );
};

export default EmailContainer;
