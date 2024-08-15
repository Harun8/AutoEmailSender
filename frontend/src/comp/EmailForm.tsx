import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// import "@/public/styles/form.css";

export type FormValues = {
  //   recipient: string;
  //   recurring: boolean;
  //   text: boolean;
  //   date: Date;
  //   theme: string;
};
export type Credentials = {
  recipient: string;
  recurring: boolean;
  text: string;
  date: string;
  theme: string;
  onSubmit: (values: FormValues) => void;
};

const EmailForm = (props: Credentials) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Must be a valid email"),
  });

  return (
    <>
      <Formik
        initialValues={{
          recipient: "",
          recurring: false,
          text: "",
          date: "",
          theme: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => props.onSubmit(values)}>
        {() => (
          <Form className=" dark:bg-gray-800  rounded  mx-auto ">
            {/*    
              <h1 className="dark:text-white  flex justify-center text-3xl font-bold 		">
            Welcome back 
          </h1> */}

            <h1 className="dark:text-white text-gray-700 flex justify-center text-3xl font-bold 		">
              Generate your email
            </h1>

            <>
              <label
                className=" dark:text-white block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email">
                Recipient
              </label>
              <div className="flex justify-center">
                <Field
                  className="  autofill:bg-gray-900 bg-slate-200 dark:bg-gray-900 dark:text-white shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Please enter the recipient of the mail"
                />
              </div>
            </>
            {/* Change to a Rich text editor instead */}
            <label
              className=" dark:text-white block text-gray-700 text-sm font-bold mb-2"
              htmlFor="text">
              Text
            </label>
            <Field
              className=" autofill:bg-gray-900 bg-slate-200 dark:bg-gray-900 dark:text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="text"
              id="text"
              placeholder="Please enter the text you wish on the email"
            />

            <div className="flex flex-col mt-5">
              <button
                className={`${`rounded-lg dark:bg-slate-950  
                dark:text-white text-black text-white 
                 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}`}
                type="submit">
                {" "}
                Done
              </button>
              <hr className="mt-6"></hr>
            </div>

            {/* .props */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EmailForm;
