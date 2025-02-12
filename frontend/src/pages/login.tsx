import { useState } from "react";
import Forms, { FormValues } from "../comp/Forms";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const cookies: Cookies = new Cookies();

  const login = async (values: FormValues) => {
    try {
      let { data } = await axios.post("http://localhost:3000/api/v1/login", {
        values,
      });
      let { jwtToken } = data;
      cookies.set("jwt", jwtToken, { path: "/" });

      navigate("/", { replace: true });
    } catch (error) {
      console.log("error logging in", error);
    }

    console.log(values);
    setIsSubmitting(true);

    setIsSubmitting(false);
  };
  return (
    <>
      <title>Login | AskPDFs</title>

      <div className=" bg-slate-200 flex justify-center md:grid md:grid-cols-2 md:gap-1 h-dvh ">
        <div className="">
          <div className="flex justify-center">
            <Forms
              isSubmitting={isSubmitting}
              showPassword={true}
              onSubmit={login}
              showName={false}
              link="/signin"
              title="Login"
              redirect="Don't have an account? Sign up?"></Forms>
          </div>
        </div>
        <div className="text-slate-900 hidden md:flex md:justify-center md:items-center md:p-12 md:bg-blue-200 md:dark:bg-blue-900 ">
          <div className="flex justify-center">
            {" "}
            {isSubmitting ? "check your email :)" : "welcome back :)"}{" "}
          </div>
          {/* <div className="w-full">
          <Image
            className="rounded-3xl  object-cover"
            src={LoginImage}
            alt="blue image"
            layout="responsive"
          />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
