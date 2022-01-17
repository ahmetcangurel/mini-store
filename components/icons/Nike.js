import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNike = (props) => (
  <Svg
    width={35}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.483.559c-3.134 3.68-6.091 8.579-3.48 10.834 2.532 2.186 5.695.892 7.852.03C11.012 10.558 34.852.205 34.852.205c.23-.115.188-.259-.1-.187-.116.03-25.954 7.032-25.954 7.032-3.28.92-7.018-1.086-4.315-6.492Z"
      fill="#000"
    />
  </Svg>
);

export default SvgNike;
