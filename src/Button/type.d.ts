export interface Props {
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
  loadingText?: string;
  /**
   * @description 图标name
   * @default "--"
   */
  icon?: string;
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
   * @description 内嵌样式
   * @default "--"
   */
  style?: React.CSSProperties;
  /**
   * @description 点击事件
   * @default "--"
   */
  onClick?: () => void;
}
