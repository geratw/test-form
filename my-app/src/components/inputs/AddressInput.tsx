import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";
interface AddressInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<IsShippingField>;
}

const AddressInput: React.FC<AddressInputProps> = ({ register, errors }) => {
  return (
    <label className="h3 label-input">
      Адрес регистрации (как в реестре)
      <input
        className="input"
        type="text"
        {...register("adress", {
          required: "Это поле обязательно",
        } as RegisterOptions)}
        placeholder="Адрес регистрации"
      />
      {errors.adress && <p className="error">{errors.adress.message}</p>}
    </label>
  );
};

export default AddressInput;
