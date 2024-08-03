import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmailContainer from "./comp/EmailContainer";

function App() {
  return (
    <>
      <div className="grid h-lvh grid-cols-2 gap-12">
        {/* Text here */}
        <div className="">yo</div>

        <div className="w-full ">
          {/* Email component here */}
          <EmailContainer></EmailContainer>
        </div>
      </div>
    </>
  );
}

export default App;
