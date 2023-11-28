import { FC } from "react";
import { SvgIcon } from "./SvgIcon";

const InfoBlock: FC = () => {
  return (
    <div className="div-main-info">
      <div className="info-penrson">
        <div className="profile">
          <img src="photo.png" alt="photoProfile" />
          <div className="discriptionProfile">
            <h3>Sergey Kovalev</h3>
            <p>skovalev@allforoil.ae</p>
          </div>
        </div>
        <div className="svg-info-person">
          <SvgIcon name="factory" />
          <p className="svg-info-person-text">Организация</p>
        </div>
        <div className="svg-info-person">
          <SvgIcon name="blackList" />
          <p className="svg-info-person-text">Черный список</p>
        </div>
      </div>
      <div className="any-questions">
        <h2 className="medium">
          Есть вопросы?
          <br /> Обратитесь в поддержку
        </h2>
        <h3 className="h3 ">
          Свяжемся с Вами в течение 30 минут. Работаем с 9:00 до 21:00
        </h3>
        <button>Обратиться</button>
      </div>
    </div>
  );
};

export default InfoBlock;
