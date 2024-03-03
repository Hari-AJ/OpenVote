import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../features/auth/admin/adminSlice";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, isError, isAdminLoggedIn, message } = useSelector(
    (state) => state.admin
  );
  console.log(admin);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isAdminLoggedIn === true || admin !== null) {
      navigate("/admin");
    }

  }, [admin, isError, isAdminLoggedIn, message, navigate, dispatch]);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("here")
    try {
      // Dispatch the admin login action
      await dispatch(adminLogin({ username, password }));
      // Redirect to admin dashboard after successful login
     
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="flex">
       

        <div className="h-screen w-[100%] sm:w-[40%] lg:w-[30%] flex m-auto px-6">
          <div className="w-full max-w-md m-auto  rounded-lg">
            <h1 className="text-[18px] outfit-500 font-medium mt-10 mb-4">
              Admin Login
            </h1>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full px-2 py-3 outfit-300  border rounded-[8px] outline-none text-sm transition duration-150 ease-in-out mb-6`}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-2 py-3 outfit-300 border rounded-[8px] outline-none text-sm transition duration-150 ease-in-out mb-4`}
                />
              </div>

              <div className="flex justify-center font-medium bg-[#005197] py-[8px] rounded-[8px] text-white items-center mt-4">
                <button className="w-full outfit-500" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
