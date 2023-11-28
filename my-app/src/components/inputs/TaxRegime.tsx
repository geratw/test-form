import React from "react";
import { UseFormRegister } from "react-hook-form";

interface TaxRegimeProps {
  register: UseFormRegister<any>; 
}

const TaxRegime: React.FC<TaxRegimeProps> = ({ register }) => {
  return (
    <div className="div-Tax">
      <label htmlFor="TaxRegime" className="h3 label-input">
        Налоговый режим
        <select className="input" {...register("taxRegime")}>
          <option value="Общий (ОСН)">Общий (ОСН)</option>

        </select>
      </label>
    </div>
  );
};

export default TaxRegime;
