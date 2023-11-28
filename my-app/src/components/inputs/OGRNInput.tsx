import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";

interface OGRNInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<IsShippingField>;
}

const OGRNInput: React.FC<OGRNInputProps> = ({ register, errors }) => {
  return (
    <label className="h3 label-input">
      ОГРН / ОГРНИП
      <input
        type="text"
        {...register("OGRN", {
          required: "Это поле обязательно",
        } as RegisterOptions)}
        placeholder="ОГРН / ОГРНИП"
        className="input"
      />
      {errors.OGRN && <p className="error">{errors.OGRN.message}</p>}
    </label>
  );
};

export default OGRNInput;
