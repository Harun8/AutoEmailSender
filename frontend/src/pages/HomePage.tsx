// import "./App.css";
import { useEffect, useState } from "react";
import EmailContainer from "../comp/EmailContainer";
import Nav from "../comp/Nav";
import axios from "axios";
import { Cookies } from "react-cookie";

function HomePage() {
  const [name, setName] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const cookies: Cookies = new Cookies();

  useEffect(() => {
    const getUser = async () => {
      try {
        let response = await axios.get("http://localhost:3000/api/v1/getUser", {
          withCredentials: true,
        });

        console.log(response.status);

        if (response.status === 404) {
          setLoggedIn(false);
          return;
        }

        let { data } = response;

        console.log(data);
        let username: string = data.username;
        setLoggedIn(true);

        setName(username);
      } catch (error) {
        console.log("error", error);
      }
    };

    getUser();
  }, []);

  const logout = async () => {
    cookies.remove("jwt");
    setName("");
    location.reload();
  };
  return (
    <body className="min-h-screen w-full bg-sky-100">
      <Nav username={name} loggedIn={loggedIn} logout={logout}></Nav>
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

export default HomePage;
