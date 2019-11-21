import React from "react";
import "./Feature.scss";
import Wrapper from "../../hoc/Wrapper";
import { Icon } from "react-icons-kit";
import { music } from "react-icons-kit/icomoon/music";
const feature = props => (
  <Wrapper>
    <div className="feature">
      <div className="feature__icon">
      <Icon icon={music} size={45}  />
      </div>
      <div className="feature__heading">{props.title}</div>
      <div className="feature__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
        ratione explicabo iste dignissimos corrupti perferendis odit nulla
      </div>
    </div>
  </Wrapper>
);
export default feature;
