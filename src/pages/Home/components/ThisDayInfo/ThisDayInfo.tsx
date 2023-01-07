import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import cloud from "../../../../assets/cloud.jpg";

import s from "./ThisDayInfo.module.scss";

interface Props {}

export const ThisDayInfo = (props: Props) => {
  return (
    <div className={s.this__day_info}>
      <img src={cloud} alt="cloud" />

      <div className={s.temperature}>
        <div className={s.circle}>
          <GlobalSvgSelector id="temperature" />
        </div>
        <div className={s.title}>Температура</div>
        <div className={s.info}>20° - ощущается как 17°</div>
      </div>
      <div className={s.pressure}>
        <div className={s.circle}>
          <GlobalSvgSelector id="pressure" />
        </div>
        <div className={s.title}>Давление </div>
        <div className={s.info}>765 мм ртутного столба - нормальное</div>
      </div>
      <div className={s.precipitation}>
        <div className={s.circle}>
          <GlobalSvgSelector id="precipitation" />
        </div>
        <div className={s.title}>Осадки</div>
        <div className={s.info}>Без осадков</div>
      </div>
      <div className={s.wind}>
        <div className={s.circle}>
          <GlobalSvgSelector id="wind" />
        </div>
        <div className={s.title}>Ветер</div>
        <div className={s.info}>3 м/с юго-запад - легкий ветер</div>
      </div>
    </div>
  );
};
