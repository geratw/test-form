import React from "react";

interface RegistrationRadioButtonsProps {
  selectedType: string;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegistrationRadioButtons: React.FC<RegistrationRadioButtonsProps> = ({ selectedType, handleRadioChange }) => {
  return (
    <div className="div-type-registration">
      <label className="radio-label">
        <input
          type="radio"
          className="input-radio-btn"
          value="ИП или организация"
          name="registration"
          checked={selectedType === "ИП или организация"}
          onChange={handleRadioChange}
        />
        ИНН или названию
      </label>

      <label className="radio-label">
        <input
          className="input-radio-btn"
          type="radio"
          value="Самозанятый"
          name="registration"
          checked={selectedType === "Самозанятый"}
          onChange={handleRadioChange}
        />
        Самозанятый
      </label>
    </div>
  );
};

export default RegistrationRadioButtons;
