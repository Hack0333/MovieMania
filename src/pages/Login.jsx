import React from "react";
import { loginFormControls } from "../component/formComtrols";
import { useAuth } from "../context";
import CommonForm from "../component/CommonForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginFormData, setLoginFormData, loginWithFirebase, setIsLoading } =
    useAuth();
  const navigate = useNavigate();

  function onLoginSubmi(e) {
    e.preventDefault();

    loginWithFirebase()
      .then((result) => {
        // console.log(result);
        if (result) {
          setIsLoading(false);
          navigate("/movies");
          setLoginFormData("");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center relative">
      <div className="w-1/2 h-1/2 px-6 py-5 flex flex-col justify-center items-center bg-zinc-600 rounded-lg shadow-lg  shadow-zinc-600">
        <h1 className="text-5xl text-white mb-5">Login</h1>
        <div>
          <CommonForm
            formControls={loginFormControls}
            btnText={"Submit"}
            formData={loginFormData}
            setFormData={setLoginFormData}
            onSubmit={onLoginSubmi}
          />
          <button className="text-3xl border-zinc-500 border-[1px] px-2 py-1 rounded-lg text-white capitalize absolute left-[48%] top-[40%]"
            onClick={()=>{navigate("/register")}}
        >Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
