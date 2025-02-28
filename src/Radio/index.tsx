import React, { type FC } from 'react';

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
}> = ({ options = [] }) => {
  return(
    <div>
      {options.map((item) => (
        <div key={item.value}>{item.label}</div>
      ))}
    </div>
  )
};


export default Radio;