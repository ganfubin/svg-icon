import React from 'react';
import './loadIcon';
/**
 * icon 对应名称
 */
export declare type IconName = 'unknown';
export interface IconProps {
    icon: IconName;
    className?: string;
    color?: string;
    size?: number;
    onClick?: React.MouseEventHandler<SVGElement>;
}
declare const SvgIcon: React.FC<IconProps>;
export default SvgIcon;
