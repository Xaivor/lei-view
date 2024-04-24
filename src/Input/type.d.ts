export interface Props {
  /**
   * @description 输入框类型
   * @default "text"
   */
  type: 'text' | 'password' | 'email' | 'number';
  /**
   * @description 输入框值
   * @default "''"
   */
  value: string;
  /**
   * @description 输入框占位符
   * @default "请输入"
   */
  placeholder?: string;
  /**
   * @description 图标类型
   * @default "--"
   */
  icon?: string;
  /**
   * @description 图标前置或后置
   * @default "left"
   */
  iconPosition?: 'left' | 'right';
  /**
   * @description 是否展示清除按钮
   * @default "false"
   */
  clearable?: boolean;
  /**
   * @description 是否禁用
   * @default "false"
   */
  disabled?: boolean;
  /**
   * @description 是否只读
   * @default "false"
   */
  readonly?: boolean;
  /**
   * @description 内嵌样式
   * @default "--"
   */
  style?: React.CSSProperties;
  /**
   * @description input内嵌样式
   * @default "--"
   */
  inputStyle?: React.CSSProperties;
  /**
   * @description 改值事件
   * @default "event"
   */
  onChange?: (value: string) => void;
  /**
   * @description 聚焦事件
   * @default "event"
   */
  onFocus?: () => void;
  /**
   * @description 失焦事件
   * @default "event"
   */
  onBlur?: () => void;
  /**
   * @description 清空事件
   * @default "event"
   */
  onClear?: () => void;
}
