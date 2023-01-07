import React from "react";
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import s from "./ThisDay.module.scss";

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.left}>
          <div className={s.degrees}>20°</div>
          <div className={s.today}>Сегодня</div>
        </div>
        <div className={s.right}>
          <GlobalSvgSelector id="home-sun" />
        </div>
      </div>
      <div className={s.bottom__block}>
        <div className={s.time}>Время: 21:54</div>
        <div className={s.town}>Город: Санкт-Петербург</div>
      </div>
    </div>
  );
};
