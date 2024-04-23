
import React, { type FC, useState } from 'react';
import './index.scss'

interface Props {
  type: 'text' | 'password' | 'email' | 'number',
  value: string,
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  onChange?: (value: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
}

const Input: FC<Props> = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(props.value);

  const className = () => {
    let name = 'lei-input'

    isFocus && (name += ' focus')

    return name;
  }

  const focus = () => {
    !props.readonly && setIsFocus(true);
    props.onFocus && props.onFocus()
  }

  const blur = () => {
    !props.readonly && setIsFocus(false);
    props.onBlur && props.onBlur()
  }

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    props.onChange && props.onChange(event.target.value)
  }

  return (
    <div
      className={className()}
      onChange={changeValue}
      onFocus={focus}
      onBlur={blur}>
      <div className="align-center">
        <input
          type={props.type}
          value={value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readonly}
        />
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '请输入',
  value: '',
}

export default Input;
