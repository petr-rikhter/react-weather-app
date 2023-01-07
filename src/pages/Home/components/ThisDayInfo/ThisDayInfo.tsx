import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";

import s from "./ThisDayInfo.module.scss";

interface Props {}

export const ThisDayInfo = (props: Props) => {
  return (
    <div className={s.this__day__info}>
      <div className={s.cloud__parent}></div>

      <div className={s.temperature}>
        <GlobalSvgSelector id="temperature" />
        <div className={s.title}>Температура</div>
        <div className={s.info}>20° - ощущается как 17°</div>
      </div>
      <div className={s.pressure}>
        <GlobalSvgSelector id="pressure" />
        <div className={s.title}>Давление </div>
        <div className={s.info}>765 мм ртутного столба - нормальное</div>
      </div>
      <div className={s.precipitation}>
        <GlobalSvgSelector id="precipitation" />
        <div className={s.title}>Осадки</div>
        <div className={s.info}>Без осадков</div>
      </div>
      <div className={s.wind}>
        <GlobalSvgSelector id="wind" />
        <div className={s.title}>Ветер</div>
        <div className={s.info}>3 м/с юго-запад - легкий ветер</div>
      </div>
    </div>
  );
};
