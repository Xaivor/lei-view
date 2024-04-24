import React, { type FC } from 'react';

interface Props {
  /**
   * @description 图标名称
   * @default "bell"
   */
  name: string;
  /**
   * @description 图标大小
   * @default "32"
   */
  size?: number;
  /**
   * @description 图标颜色
   * @default "--"
   */
  color?: string;
  /**
   * @description 图标内嵌样式
   * @default "--"
   */
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Icon: FC<Props> = ({
  name = 'bell',
  size = 32,
  color,
  style,
  onClick,
}) => {
  const getClassName = () => `iconfont-lei icon-${name}`;
  const getStyle = () => {
    const thisStyle = {
      fontSize: size + 'px',
      ...style,
    };

    color && (thisStyle.color = color);
    return thisStyle;
  };

  return (
    <i className={getClassName()} style={getStyle()} onClick={onClick}></i>
  );
};

export default Icon;
