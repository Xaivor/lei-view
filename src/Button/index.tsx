import React, { type FC } from 'react';
import Icon from '../Icon';
import './index.scss';
import { Props } from './type';

const Button: FC<Props> = ({
  plain,
  disabled,
  round,
  link,
  size = 'middle',
  type = 'default',
  loading,
  loadingText = '加载中...',
  icon,
  children,
  onClick,
  style = {},
}) => {
  // 按钮Class
  const btnClass = (type?: string) => {
    let className = `lei-button type-${type} size-${size}`;

    plain && (className += ' plain');
    disabled && (className += ' disabled');
    round && (className += ' round');
    link && (className += ' link');

    return className;
  };

  // 点击事件
  const handleClick = () => (disabled ? undefined : onClick);

  return (
    <div className={btnClass(type)} onClick={handleClick()} style={style}>
      {loading ? (
        <div className="flex_center">
          <div className="button-loading"></div>
          <div>{loadingText}</div>
        </div>
      ) : (
        <div className="flex_center">
          {icon && (
            <Icon
              name={icon}
              size={16}
              style={{ marginRight: children ? '5px' : '0' }}
            />
          )}
          {children && <div>{children}</div>}
        </div>
      )}
    </div>
  );
};

export default Button;
