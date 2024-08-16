import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextEditor from "./TextEditor";
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
              <div className="flex justify-center mt-12">
                <label
                  className=" dark:text-white block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email">
                  Recipient
                </label>
              </div>
              <div className="flex justify-center">
                <Field
                  className=" bg-sky-100 text-white shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Please enter the recipient of the mail"
                />
              </div>
            </>
            {/* Change to a Rich text editor instead */}

            <div className="mx-6 bg-green-200 mt-12">
              <TextEditor></TextEditor>
            </div>

            <div></div>
            {/* .props */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EmailForm;
