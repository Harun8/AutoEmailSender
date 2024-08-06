import { useState } from "react";

import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signin from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      {/*


      <Route path="/blog/:blogId" element={<Blog></Blog>}></Route>

     
      <Route path="create" element={<CreateBlogPost />}></Route>
       */}
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
