import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

interface navProps {
  username: string;
  loggedIn: boolean;
}
const cookies: Cookies = new Cookies();

const removeCookie = () => {
  cookies.remove("jwt");
};
const Nav = ({ username, loggedIn }: navProps) => {
  return (
    <div>
      <div className="fixed top-10 left-10 right-10 flex justify-between items-center  px-4 py-2 z-10">
        <p className="text-slate-800 font-bold">
          {loggedIn ? `Hello, ${username}` : ""}
        </p>
        {/* <Link to="/login" style={{ textDecoration: "none", color: "black" }}> */}

        {!loggedIn ? (
          <Link to="/login">
            <button className=" text-sm  font-bold  hover:text-white  text-gray-700 bg-slate-100 px-6 py-2 rounded-lg hover:bg-slate-900 shadow-lg  ">
              Login
            </button>
          </Link>
        ) : (
          <button
            className=" text-sm  font-bold  hover:text-white  text-gray-700 bg-slate-100 px-6 py-2 rounded-lg hover:bg-slate-900 shadow-lg  "
            onClick={removeCookie}>
            logout
          </button>
        )}
        {/* </Link> */}
        {/* <div className="text-slate-800 font-bold	">More</div> */}
      </div>
    </div>
  );
};

export default Nav;
