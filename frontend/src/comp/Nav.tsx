import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="fixed top-10 left-10 right-10 flex justify-between items-center  px-4 py-2 z-10">
        <p className="text-slate-800 font-bold"></p>
        {/* <Link to="/login" style={{ textDecoration: "none", color: "black" }}> */}
        <button className=" text-sm text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 shadow-lg  ">
          Login
        </button>
        {/* </Link> */}
        {/* <div className="text-slate-800 font-bold	">More</div> */}
      </div>
    </div>
  );
};

export default Nav;
