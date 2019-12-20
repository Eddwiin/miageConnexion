import React from "react";
import Button from "../generics/button";

const HeaderComponent = () => (
  <div className="header">
    <div className="header__menu">
      <div className="header__menu__name">
        <Button href="/auth/signIn">Sign in</Button>
      </div>
    </div>
  </div>
);

export default HeaderComponent;
