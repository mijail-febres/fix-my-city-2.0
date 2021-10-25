import React, { useState } from "react";
import { MainContainer, MenuStyled } from "./BannerStyled";
import LogoWhite from "../../assets/images/fixmycity-logo-white.png";
import MenuImage from "../../assets/svgs/menu.svg";

export const Menu = () => {
  return (
    <MenuStyled>
      <button className="menuOption">HOME</button>
      <button className="menuOption">PROFILE</button>
      <button className="menuOption">LEADERS</button>
    </MenuStyled>
  );
};

const Banner = () => {
  const [showMenu, toggleShowMenu] = useState(false);

  const menuIconOnClickHandler = () => {
    toggleShowMenu(!showMenu);
  };

  return (
    <>
      <MainContainer>
        <img id="logo" src={LogoWhite} alt="logo_white"></img>
        <button id="menu" onClick={menuIconOnClickHandler}>
          <img id="menu_img" src={MenuImage} alt="menu_icon"></img>
        </button>
      </MainContainer>
      {showMenu && <Menu />}
    </>
  );
};

export default Banner;
