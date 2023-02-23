import React from "react";

type SurpriseMeProps =
  | {
      isSurpriseMe: true;
      handleSurpriseMe: () => void;
    }
  | {
      isSurpriseMe?: false;
    };

type Props = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange?: (e: any) => void;
} & SurpriseMeProps;

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  ...props
}: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {props.isSurpriseMe && (
          <button
            type="button"
            onClick={props.handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
