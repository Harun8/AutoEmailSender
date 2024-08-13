import { useState } from "react";
import Forms, { FormValues } from "../comp/Forms";
import axios from "axios";
import { Cookies } from "react-cookie";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const cookies: Cookies = new Cookies();
  const navigate: NavigateFunction = useNavigate();

  const Signin = async (values: FormValues) => {
    try {
      let { data } = await axios.post("http://localhost:3000/api/v1/signup", {
        values,
      });

      let { jwtToken } = data;
      console.log(jwtToken);
      cookies.set("jwt", jwtToken, { path: "/" });

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }

    setIsSubmitting(true);

    setIsSubmitting(false);
  };
  return (
    <>
      <title>Signin | AskPDFs</title>

      <div className=" bg-slate-200 flex justify-center md:grid md:grid-cols-2 md:gap-1 h-dvh ">
        <div className="">
          <div className="flex justify-center">
            <Forms
              isSubmitting={isSubmitting}
              showPassword={true}
              showName={true}
              onSubmit={Signin}
              link="/login"
              title="Sign Up"
              redirect="Already have an account? Log in here"></Forms>
          </div>
        </div>
        <div className="text-slate-200 hidden md:flex md:justify-center md:items-center md:p-12 md:bg-indigo-800 md:dark:bg-blue-800 ">
          <div className="flex justify-center">
            {" "}
            {isSubmitting ? "check your email :)" : "Hello there :)"}{" "}
          </div>
          {/* <div className="w-full">
          <Image
            className="rounded-3xl  object-cover"
            src={SigninImage}
            alt="blue image"
            layout="responsive"
          />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Signin;
