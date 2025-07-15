import React from "react";
import { MyIconProps } from "./icon-interface";

const MetaLogo: React.FC<MyIconProps> = ({
  width = 32,
  height = 31,
  strokeWidth = 1,
  fill = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={strokeWidth}
  >
    <g id="Logo">
      <g id="v">
        <path
          d="M7.29412 0H0L10.5882 18.6745H21.4118L32 0H24.7059L16 14.656L7.29412 0Z"
          fill={fill}
        />
        <path d="M20.4706 21.5112H11.7647L16 31L20.4706 21.5112Z" fill={fill} />
      </g>
    </g>
  </svg>
);
MetaLogo.displayName = "meta-logo";
export default MetaLogo;
