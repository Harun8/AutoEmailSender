import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmailContainer from "./comp/EmailContainer";
import Nav from "./comp/Nav";

function App() {
  return (
    <body className="min-h-screen w-full bg-sky-100">
      <Nav></Nav>
      <>
        <div className="grid h-lvh grid-cols-2 gap-12 content-center">
          {/* Text here */}
          <div className="flex flex-col items-center ">
            <h2 className="text-2xl font-bold text-sky-800">
              Never forget to send an email again
            </h2>
            <div className="flex justfiy-center">
              <p className="text-md font-semibold text-gray-700 hover:text-black tracking-wide	mx-24 mt-12">
                Craft personalized emails for any event and schedule them to be
                sent at just the right moment—whether it's a one-time message or
                a recurring annual greeting.{" "}
                <span className=" text-md font-semibold text-orange-700 hover:text-orange-900 tracking-wide">
                  {" "}
                  You strategize, we execute.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full">
            {/* Email component here */}
            <EmailContainer></EmailContainer>
          </div>
        </div>
      </>
    </body>
  );
}

export default App;
