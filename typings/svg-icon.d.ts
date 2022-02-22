declare module 'svg-icon' {

  export declare type IconName = 'unknown';

  export interface IconProps {
    icon: IconName;
    className?: string;
    color?: string;
    size?: number;
    onClick?: React.MouseEventHandler<SVGElement>;
  }
  declare const BIcon: React.FC<IconProps>;
  export default BIcon;
}