import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgShop = (props) => (
  <Svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.227 22.145a1.845 1.845 0 1 0 0-3.691 1.845 1.845 0 0 0 0 3.69Zm9.842 0a1.845 1.845 0 1 0 0-3.691 1.845 1.845 0 0 0 0 3.69Z"
      fill="currentColor"
    />
    <Path
      d="M1.23 0a1.23 1.23 0 0 0 0 2.46h.54a1.23 1.23 0 0 1 1.193.932l2.76 11.036a3.69 3.69 0 0 0 3.58 2.796h9.638a3.69 3.69 0 0 0 3.603-2.89l1.367-6.152a3.69 3.69 0 0 0-3.603-4.491H5.574l-.224-.895A3.69 3.69 0 0 0 1.77 0h-.54Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgShop;
