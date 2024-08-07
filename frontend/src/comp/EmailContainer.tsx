import React, { useState } from "react";
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
    <div className="max-w-2xl rounded-xl overflow-hidden shadow-2xl">
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2 flex justify-center space-x-4">
          <button
            onMouseOver={() => changeTheme("pink")}
            className=" px-6 py-2  bg-pink-600 hover:bg-pink-900 text-pink-200  rounded-lg"
          >
            Rose
          </button>
          <button
            onMouseOver={() => changeTheme("green")}
            className="px-6 py-2 bg-green-600 hover:bg-green-900 text-green-200 rounded-lg"
          >
            Mint
          </button>
          <button
            onMouseOver={() => changeTheme("blue")}
            className="px-6 py-2  bg-blue-600 hover:bg-blue-900 text-blue-200 rounded-lg"
          >
            Sky
          </button>
        </div>

        <div className={`${themeColorClass} rounded-xl text-gray-950 p-6 mt-4`}>
          <p>Dear [Name],</p>
          <p className="m-6">
            I hope this message finds you well. I wanted to take a moment to
            wish you a very happy birthday! 🎂
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
            repeat={Infinity}
          ></TypeAnimation>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};

export default EmailContainer;
