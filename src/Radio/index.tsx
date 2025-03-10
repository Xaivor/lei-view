import React, { useEffect, useMemo, useState, type FC } from 'react';
import './index.scss';

interface OptionItem {
  label: string;
  value: string;
}
const Radio: FC<{
  /**
   * @description 选项
   * @default "[]"
   */
  options?: OptionItem[];
  /**
   * @description 当前选中的值
   */
  value?: string;
  /**
   * @description 变化时回调函数
   */
  onChange?: (value: string) => void;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 显示形态
   * @default 'default'
   */
  optionType?: 'button' | 'default';
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
}> = ({
  options = [],
  value,
  onChange,
  disabled = false,
  optionType = 'default',
  style = {},
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (val: string) => {
    if (disabled) return;
    setCurrentValue(val);
    onChange?.(val);
  };

  const radioClass = useMemo(() => {
    let radioClass = '';

    radioClass += `radio-${optionType}`;
    radioClass += disabled ? ' disabled' : '';

    return radioClass;
  }, [optionType, disabled]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className="radio-group" style={style}>
      {options.map((item) => {
        return (
          <label
            key={item.value}
            onClick={() => handleChange(item.value)}
            className={`${radioClass} ${
              currentValue === item.value && 'active'
            }`}
          >
            {optionType === 'default' && <div className="radio-dot"></div>}
            {item.label}
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
