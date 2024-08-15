import EmailContainer from "./EmailContainer";
import EmailForm from "./EmailForm";

type navProps = {
  loggedIn: boolean;
};

const ViewIsland = ({ loggedIn }: navProps) => {
  return (
    <div className="max-w-2xl rounded-xl overflow-hidden shadow-2xl">
      {/* <EmailContainer></EmailContainer> */}
      <EmailForm></EmailForm>

      <div className="px-6 pb-4 flex justify-center ">
        {loggedIn && (
          <button
            //   onMouseOver={() => changeTheme("green")}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-950 text-white shadow-lg   rounded-lg">
            Get started
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewIsland;
