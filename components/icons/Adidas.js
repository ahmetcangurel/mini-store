import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

const SvgAdidas = (props) => (
  <Svg
    width={47}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className=""
    {...props}
  >
    <Path fill="url(#Adidas_svg__a)" fillOpacity={0.4} d="M0 0h47v29H0z" />
    <Defs>
      <Pattern
        id="Adidas_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#Adidas_svg__b"
          transform="matrix(.00155 0 0 .00251 0 -.008)"
        />
      </Pattern>
      <Image
        id="Adidas_svg__b"
        width={645}
        height={404}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default SvgAdidas;