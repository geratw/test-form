import React from "react";
import { UseFormRegister } from "react-hook-form";

interface VATRateProps {
  register: UseFormRegister<any>; 
}

const VATRate: React.FC<VATRateProps> = ({ register }) => {
  return (
    <div className="div-VAT">
      <label className="h3 label-input">
        Ставка НДС
        <select className="input" {...register("VAT_Rate")}>
          <option value="10%">10%</option>
          <option value="20%">20%</option>
          <option value="30%">30%</option>
          <option value="40%">40%</option>

        </select>
      </label>
    </div>
  );
};

export default VATRate;
