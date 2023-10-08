import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="my-6 text-3xl font-semibold text-center"> My Profile </h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="self-center object-cover w-24 h-24 mt-2 rounded-full cursor-pointer "
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 border rounded-lg"
        />
        <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-50">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-4">
        <span className="p-2 text-red-600 rounded-lg cursor-pointer hover:text-red-700 hover:bg-red-100 hover:underline">
          Delete account?
        </span>
        <span className="p-2 text-red-600 rounded-lg cursor-pointer hover:underline hover:text-red-700 hover:bg-red-100">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;
