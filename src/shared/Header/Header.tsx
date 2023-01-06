import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/images/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: "msk", label: "Москва" },
    { value: "spb", label: "Санкт-Петербург" },
    { value: "smr", label: "Самара" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      fontSize: "25px",
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <GlobalSvgSelector id="header-theme" />
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        ></Select>
      </div>
    </header>
  );
};
