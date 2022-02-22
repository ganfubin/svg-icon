import React, {forwardRef} from 'react';
import styled from 'styled-components';
import './loadIcon';

interface SvgWrapProps {
  color: string,
  fontSize: number
}

const SvgWarp = styled.svg<SvgWrapProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  
`

/**
 * icon 对应名称
 */
export type IconName = 'unknown';

export interface IconProps {
  icon: IconName,
  className?: string,
  color?: string,
  size?: number,
  onClick?: React.MouseEventHandler<SVGElement>
}

const SvgIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <SvgWarp ref={ref} onClick={props.onClick} className={`${props.className ?? ''}`} color={props.color!} fontSize={props?.size || 14}>
      <use href={`#icon-${props.icon}`}/>
    </SvgWarp>
  )
})

export default SvgIcon