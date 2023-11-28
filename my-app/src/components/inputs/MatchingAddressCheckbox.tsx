import React from "react";
import { UseFormRegister } from "react-hook-form";


interface MatchingAddressCheckboxProps {
  register: UseFormRegister<any>; 
}

const MatchingAddressCheckbox: React.FC<MatchingAddressCheckboxProps> = ({ register }) => {
  return (
    <label className="h3 custom-checkbox">
      <input
        type="checkbox"
        {...register("matchesTheActualAddress")}
        className="custom-checkbox-input"
      />
      <span className="checkmark"></span>
      Совпадает с фактическим
    </label>
  );
};

export default MatchingAddressCheckbox;
