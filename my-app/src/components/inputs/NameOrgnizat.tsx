import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";

interface NameOrgnizationProps {
  register: UseFormRegister<any>; 
  errors: FieldErrors<IsShippingField>; 
}

const NameOrgnizat: React.FC<NameOrgnizationProps> = ({
  register,
  errors,
}) => {
  return (
    <label className="h3 label-input">
      Название (как в реестре)
      <input
        className="input"
        type="text"
        {...register("nameOrgnization", {
          required: "Это поле обязательно",
        } as RegisterOptions)}
        placeholder="Название"
      />
      {errors.nameOrgnization && (
        <p className="error">{errors.nameOrgnization.message}</p>
      )}
    </label>
  );
};

export default NameOrgnizat;
