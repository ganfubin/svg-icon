import React from "react";

export type IconName = 'unknown';

export interface IconProps {
  icon: IconName,
  className?: string,
  color?: string,
  size?: number,
  onClick?: React.MouseEventHandler<SVGElement>
}