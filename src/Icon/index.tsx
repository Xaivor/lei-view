import React, { type FC } from 'react';

interface Props {
  name: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const Icon: FC<Props> = (props) => {
  const getClassName = () => `iconfont-lei icon-${props.name}`
  const getStyle = () => {
    const style = {
      fontSize: props.size + 'px',
      ...props.style
    }

    props.color && (style.color = props.color)
    return style
  }

  return (
    <i className={getClassName()} style={getStyle()}></i>
  );
}

Icon.defaultProps = {
  name: 'default',
  size: 32
};

export default Icon;
