import React from "react";
import CommonForm from "../component/CommonForm";
import { registerFormControls } from "../component/formComtrols";
import { useAuth } from "../context";
import { updateProfile } from "firebase/auth";
import auth from "../firebaseConfig";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    setIsLoading,
  } = useAuth();
  const navigate = useNavigate();

  function onRegisterSubmit(e) {
    e.preventDefault();
    registerWithFirebase()
      .then((result) => {
        // console.log(result)
        updateProfile(result.user, {
          displayName: registerFormData.name,
        }).then(() => {
          if (auth.currentUser.displayName) {
            setIsLoading(false);
            setRegisterFormData("");
            navigate("/movies");
          }
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center relative">
      <div className="w-1/2 h-1/2 px-6 py-5 flex flex-col justify-center items-center bg-zinc-600 rounded-lg shadow-lg  shadow-zinc-600">
        <h1 className="text-5xl text-white mb-5">Register Page</h1>
        <div>
          <CommonForm
            formControls={registerFormControls}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={onRegisterSubmit}
            btnText={"save"}
          />
          <button className="text-3xl border-zinc-500 border-[1px] px-2 py-1 ml-5 rounded-lg text-white capitalize absolute left-[48%] top-[40%]"
            onClick={()=>{navigate("/login")}}
        >Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
