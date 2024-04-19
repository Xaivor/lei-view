import React, { type FC } from 'react';

const Radio: FC<{
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}> = ({ title }) => <h1>{title}</h1>;


export default Radio;