import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";

interface KPPInputProps {
  register: UseFormRegister<any>; 
  errors: FieldErrors<IsShippingField>; 
}

const KPPInput: React.FC<KPPInputProps> = ({ register, errors }) => {
  return (
    <label className="h3 label-input">
      КПП
      <input
        className="input"
        type="text"
        {...register("KPP", {
          required: "Это поле обязательно",
        } as RegisterOptions)}
        placeholder="КПП"
      />
      {errors.KPP && <p className="error">{errors.KPP.message}</p>}
    </label>
  );
};

export default KPPInput;
