import React, { type FC } from 'react';
import './index.less'; // 引入样式

interface Props {
  /**
   * @description 类型
   * @default "default"
   */
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  /**
   * @description 尺寸
   * @default "middle"
   */
  size?: 'mini' | 'middle' | 'large';
  /**
   * @description 是否为朴素按钮
   * @default "--"
   */
  plain?: boolean;
  /**
   * @description 是否为禁用状态
   * @default "--"
   */
  disabled?: boolean;
  /**
   * @description 是否为圆角按钮
   * @default "--"
   */
  round?: boolean;
  /**
   * @description 是否为加载中状态
   * @default "false"
   */
  loading?: boolean;
  /**
   * @description 加载显示的文字
   * @default "加载中..."
   */
  "loading-text"?: string;
  /**
   * @description 是否为链接按钮
   * @default "--"
   */
  link?: boolean;
  /**
   * @description 子元素
   * @default "--"
   */
  children?: React.ReactNode;
  /**
   * @description 点击事件
   * @default "--"
   */
  onClick?: () => void;
}


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
  const onClick = () => props.disabled ? undefined : props.onClick

  return (
    <div className={btnClass(props.type)} onClick={onClick}>
      {
        props.loading ?
          <div className="flex_center">
            <div className="button-loading"></div>
            <div>{props["loading-text"]}</div>
          </div> :
          props.children
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
