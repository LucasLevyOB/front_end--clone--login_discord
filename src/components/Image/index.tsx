import React from "react";
import { StyledImg } from "./StyledImg";

type Props = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
};

const Image = ({ src, alt, style }: Props) => {
  return <StyledImg src={src} alt={alt} style={style} />;
};

export default Image;
