import EmailContainer from "./EmailContainer";

const ViewIsland = () => {
  return (
    <div className="max-w-2xl rounded-xl overflow-hidden shadow-2xl">
      <EmailContainer></EmailContainer>

      <div className="px-6 pb-2 flex justify-center ">
        <button
          //   onMouseOver={() => changeTheme("green")}
          className="px-6 py-2 bg-gray-800 hover:bg-gray-950 text-white shadow-lg   rounded-lg">
          Get started
        </button>
      </div>
    </div>
  );
};

export default ViewIsland;
