import React from "react";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { IsShippingField } from "../app.interface";

interface OrganizationTypeSelectProps {
  register: UseFormRegister<any>; 
  errors: FieldErrors<IsShippingField>; 
}

const OrganizationTypeSelect: React.FC<OrganizationTypeSelectProps> = ({
  register,
  errors,
}) => {
  return (
    <label htmlFor="typeOrganization" className="h3 label-input">
      Тип организации:
      <select
        {...register("typeOrgnization", {
          required: "Выберите тип организации",
        } as RegisterOptions)}
        className="input input-type-organ"
        defaultValue=""
      >
        <option value="" disabled>
          Тип организации
        </option>
        <option value="правительственные">Правительственные</option>
        <option value="коммерческие">Коммерческие</option>
        <option value="бюджетные">Бюджетные</option>
      </select>
      {errors.typeOrgnization && (
        <p className="error">{errors.typeOrgnization.message}</p>
      )}
    </label>
  );
};

export default OrganizationTypeSelect;
