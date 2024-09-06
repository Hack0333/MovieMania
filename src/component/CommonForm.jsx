import React from "react";
import CommonInput from "./CommonInput";

const CommonForm = ({
  formControls = [],
  onSubmit,
  btnText,
  formData,
  setFormData,
}) => {
  const formControlsType = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  const renderFormControls = (getFormControls, getFormData) => {
    let content = null;

    switch (getFormControls.componentType) {
      case formControlsType.INPUT:
        content = (
          <CommonInput
            type={getFormControls.type}
            label={getFormControls.label}
            name={getFormControls.name}
            value={getFormData[getFormControls.name]}
            placeholder={getFormControls.placeholder}
            className={getFormControls.className}
            onChange={(e) => {
              setFormData({
                ...formData,
                [getFormControls.name]: e.target.value,
              });
            }}
          />
        );

        break;

      default:
        content = (
          <CommonInput
            type={getFormControls.type}
            label={getFormControls.label}
            name={getFormControls.name}
            value={getFormData[getFormControls.name]}
            placeholder={getFormControls.placeholder}
            className={getFormControls.className}
            onChange={(e) => {
              setFormData({
                ...formData,
                [getFormControls.name]: e.target.value,
              });
            }}
          />
        );
        break;
    }
    return content;
  };
  return (
    <form onSubmit={onSubmit} className="relative">
      {formControls.map((singleFormControls, i) => (
        <div key={i}>{renderFormControls(singleFormControls, formData)}</div>
      ))}
      <button
        type="submit"
        className="text-3xl border-zinc-500 border-[1px] px-4 py-1 rounded-lg text-white m-5 capitalize absolute left-1/2 -translate-x-1/2"
      >
        {btnText || "Submit"}
      </button>
    </form>
  );
};

export default CommonForm;
