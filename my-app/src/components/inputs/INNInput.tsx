import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";

interface INNInputProps {
  register: UseFormRegister<any>; 
  errors: FieldErrors<IsShippingField>; 
}

const INNInput: React.FC<INNInputProps> = ({ register, errors }) => {
  return (
    <label className="h3 label-input">
      ИНН
      <input
        className="input"
        type="text"
        {...register("INN", {
          required: "Это поле обязательно",
        } as RegisterOptions)}
        placeholder="ИНН"
      />
      {errors.INN && <p className="error">{errors.INN.message}</p>}
    </label>
  );
};

export default INNInput;
