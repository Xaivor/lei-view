import React, { type FC } from 'react';
import Icon from '../Icon'
import { Props } from './index.d'
import './index.scss';

const Button: FC<Props> = (props) => {
  // 按钮Class
  const btnClass = (type?: string) => {
    let className = `lei-button type-${type} size-${props.size}`

    props.plain && (className += ' plain');
    props.disabled && (className += ' disabled');
    props.round && (className += ' round');
    props.link && (className += ' link');

    return className;
  };

  // 点击事件
  const onClick = () => (props.disabled ? undefined : props.onClick)

  return (
    <div className={btnClass(props.type)} onClick={onClick()}>
      {
        props.loading ?
          <div className="flex_center">
            <div className="button-loading"></div>
            <div>{props["loading-text"]}</div>
          </div> :
          <div className="flex_center">
            {props.icon && <Icon name={props.icon} size={16} style={{ marginRight: '5px' }} />}
            <div>{props.children}</div>
          </div>
      }
    </div>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'middle',
  children: '按钮',
  "loading-text": '加载中...'
}

export default Button;
