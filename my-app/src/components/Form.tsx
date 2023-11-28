import { FC, useState } from "react";
import "../scss/form.scss";
import { IsShippingField } from "./app.interface";
import InfoBlock from "./InfoBlock";
import { SvgIcon } from "./SvgIcon";
import { useForm, SubmitHandler } from "react-hook-form";

import AddressInput from "./inputs/AddressInput";
import OGRNInput from "./inputs/OGRNInput";
import KPPInput from "./inputs/KPPInput";
import INNInput from "./inputs/INNInput";
import NameOrgnizat from "./inputs/NameOrgnizat";
import INNSearch from "./inputs/INNSearch";
import OrganizationType from "./inputs/OrganizationType";
import MatchingAddressCheckbox from "./inputs/MatchingAddressCheckbox";
import RegistrationRadioButtons from "./inputs/RegistrationRadioButtons";
import TaxRegime from "./inputs/TaxRegime";
import VATRate from "./inputs/VATRate";

const Form: FC = () => {
  const [selectedType, setSelectedType] = useState("ИП или организация");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsShippingField>();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const onSubmit: SubmitHandler<IsShippingField> = (data) => {
    data.typeRegistration = selectedType;
    console.log(data);
  };

  return (
    <div className="body-main">
      <div className="breadcrumbs">
        <a href="/">Маркет</a> <SvgIcon name="breadcrumbs" />
        <a href="/PersonalAccount">Личный кабинет</a>
      </div>
      <h1 className="title">Личный кабинет</h1>
      <div className="div-main">
        <InfoBlock />
        <form onSubmit={handleSubmit(onSubmit)} className="form-main">
          <div>
            <h2 className="h2">Юридические данные</h2>
            <div>
              <h2 className="main-connect">Подключаюсь как</h2>
              <RegistrationRadioButtons
                selectedType={selectedType}
                handleRadioChange={handleRadioChange}
              />
            </div>

            <div>
              <h2 className="h2 ">Данные организации</h2>

              <INNSearch register={register} errors={errors} />
              <OrganizationType register={register} errors={errors} />
              <NameOrgnizat register={register} errors={errors} />
              <INNInput register={register} errors={errors} />
              <KPPInput register={register} errors={errors} />
              <OGRNInput register={register} errors={errors} />
              <AddressInput register={register} errors={errors} />
              <MatchingAddressCheckbox register={register} />
            </div>
            <div className="div-Tax-and-VAT">
              <TaxRegime register={register} />
              <VATRate register={register} />
            </div>
          </div>
          <button>Продолжить</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
