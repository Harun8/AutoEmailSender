import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmailContainer from "./comp/EmailContainer";

function App() {
  return (
    <body className="min-h-screen w-full bg-sky-100	 ">
      <>
        <div className="grid h-lvh grid-cols-2 gap-12 content-center">
          {/* Text here */}
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-sky-800">
              Never forget to send an email again
            </h2>
            <div>
              <p className="text-md font-semibold ">to</p>
            </div>
          </div>

          <div className="w-full  ">
            {/* Email component here */}
            <EmailContainer></EmailContainer>
          </div>
        </div>
      </>
    </body>
  );
}

export default App;
