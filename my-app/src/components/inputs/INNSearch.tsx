import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";

interface INNSearchProps {
  register: UseFormRegister<any>; 
  errors: FieldErrors<IsShippingField>; 
}

const INNSearch: React.FC<INNSearchProps> = ({ register, errors }) => {
  return (
    <label className="h3 label-input">
      ИНН или Название компании
      <input
        className="input"
        type="text"
        {...register("INNSearch", {
          required: "Это поле обязательно",
        } as RegisterOptions)}
        placeholder="Поиск по ИНН или названию"
      />
      {errors.INNSearch && <p className="error">{errors.INNSearch.message}</p>}
    </label>
  );
};

export default INNSearch;
