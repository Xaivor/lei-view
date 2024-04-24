import React, { useState, type FC } from 'react';
import Icon from '../Icon';
import './index.scss';
import { Props } from './type';

const Input: FC<Props> = ({
  type = 'text',
  value = '',
  icon,
  iconPosition = 'left',
  placeholder = '请输入',
  clearable,
  disabled,
  readonly,
  style,
  inputStyle,
  onChange,
  onFocus,
  onBlur,
  onClear,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const className = () => {
    let name = 'lei-input';

    isFocus && (name += ' focus');
    disabled && (name += ' disabled');

    return name;
  };

  const focus = () => {
    if (!readonly) {
      setIsFocus(true);
      onFocus && onFocus();
    }
  };

  const blur = () => {
    if (!readonly) {
      setIsFocus(false);
      onBlur && onBlur();
    }
  };

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const clearValue = () => {
    if (readonly || !inputValue) return;
    setInputValue('');
    onClear && onClear();
  };

  const InputIcon = () =>
    icon && (
      <Icon
        name={icon}
        size={16}
        style={
          iconPosition === 'left'
            ? { marginRight: '6px' }
            : { marginLeft: '6px' }
        }
      />
    );

  return (
    <div className={className()} style={style}>
      <div className="align-center">
        {iconPosition === 'left' && <InputIcon />}
        <input
          type={type}
          style={inputStyle}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          onChange={changeValue}
          onFocus={focus}
          onBlur={blur}
        />
        {clearable && (
          <Icon
            name="close-circle"
            size={16}
            style={{
              opacity: inputValue ? 1 : 0,
              marginLeft: '6px',
              cursor: inputValue ? 'pointer' : '',
            }}
            onClick={clearValue}
          />
        )}
        {iconPosition === 'right' && <InputIcon />}
      </div>
    </div>
  );
};

export default Input;
