import { FC, useState } from "react";
import "../scss/form.scss";
import { IsShippingField } from "./app.interface";
import InfoBlock from "./InfoBlock";
import { useForm, SubmitHandler } from "react-hook-form";
import { SvgIcon } from "./SvgIcon";

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
        <a href="/">Маркет</a> <SvgIcon name="breadcrumbs" />{" "}
        <a href="/PersonalAccount">Личный кабинет</a>
      </div>
      <h1 className="title">Личный кабинет</h1>
      <div className="div-main">
        <InfoBlock />
        <form onSubmit={handleSubmit(onSubmit)} className="form-main">
          <div className="">
            <h2 className="h2">Юридические данные</h2>
            <div>
              <h2 className="main-connect">Подключаюсь как</h2>
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
                  ИП или организация
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
            </div>
            <div>
              <h2 className="h2 ">Данные организации</h2>
              <label className="h3 label-input">
                ИНН или Название компании
                <input
                  className="input"
                  type="text"
                  {...register("INNSearch", {
                    required: "Это поле обязательно",
                  })}
                  placeholder="ИНН или Название компании"
                />
                {errors.INNSearch && (
                  <p className="error">{errors.INNSearch.message}</p>
                )}
                
              </label>
              <div>
                <label htmlFor="typeOrganization" className="h3 label-input">
                  Тип организации:
                  <select
                    {...register("typeOrgnization", {
                      required: "Выберите тип организации",
                    })}
                    className="input input-type-organ"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Выберите тип организации
                    </option>
                    <option value="правительственные">правительственные</option>
                    <option value="коммерческие">коммерческие</option>
                    <option value="бюджетные">бюджетные</option>
                  </select>
                  {errors.typeOrgnization && (
                    <p className="error">{errors.typeOrgnization.message}</p>
                  )}
                </label>
              </div>

              <label className="h3 label-input">
                Название (как в реестре)
                <input
                  className="input"
                  type="text"
                  {...register("nameOrgnization", {
                    required: "Это поле обязательно",
                  })}
                  placeholder="Название"
                />
                {errors.nameOrgnization && (
                  <p className="error">{errors.nameOrgnization.message}</p>
                )}
              </label>
              <label className="h3 label-input">
                ИНН или Название компании
                <input
                  className="input"
                  type="text"
                  {...register("INN", {
                    required: "Это поле обязательно",
                  })}
                  placeholder="ИНН или Название компании"
                />
                {errors.INN && <p className="error">{errors.INN.message}</p>}
              </label>

              <label className="h3 label-input">
                КПП
                <input
                  className="input"
                  type="text"
                  {...register("KPP", {
                    required: "Это поле обязательно",
                  })}
                  placeholder="КПП"
                />
                {errors.KPP && <p className="error">{errors.KPP.message}</p>}
              </label>
              <label className="h3 label-input">
                ОГРН / ОГРНИП
                <input
                  type="text"
                  {...register("OGRN", {
                    required: "Это поле обязательно",
                  })}
                  placeholder="ОГРН / ОГРНИП"
                  className="input"
                />
                {errors.OGRN && <p className="error">{errors.OGRN.message}</p>}
              </label>
              <label className="h3 label-input">
                Адрес регистрации (как в реестре)
                <input
                  className="input"
                  type="text"
                  {...register("adress", {
                    required: "Это поле обязательно",
                  })}
                  placeholder="Адрес регистрации"
                />
                {errors.adress && (
                  <p className="error">{errors.adress.message}</p>
                )}
              </label>
              <label className="custom-checkbox h3">
                <input
                  type="checkbox"
                  {...register("matchesTheActualAddress")}
                />
                <span className="checkmark "></span>
                Совпадает с фактическим
              </label>
            </div>
            <div className="div-Tax-and-VAT">
              <div className="div-Tax">
                <label htmlFor="TaxRegime " className="h3 label-input">
                  Налоговый режим
                  <select className="input" {...register("taxRegime")}>
                    <option value="Общий (ОСН)">Общий (ОСН)</option>
                  </select>
                </label>
              </div>
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
            </div>
          </div>
          <button>Продолжить</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
