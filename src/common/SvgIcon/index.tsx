import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/assets/${src}`} alt={src} width={width} height={height}/>
);
