# Radio 单选框

## 基本用法

```jsx
import { useState } from 'react';
import { Radio } from 'lei-view';

export default () => {
  const [value, setValue] = useState('A');
  return (
    <Radio
      value={value}
      onChange={setValue}
      options={[
        { label: '选项A', value: 'A' },
        { label: '选项B', value: 'B' },
        { label: '选项C', value: 'C' },
      ]}
    />
  );
};
```

## 按钮形态

```jsx
import { Radio } from 'lei-view';

export default () => (
  <Radio
    optionType="button"
    options={[
      { label: '北京', value: 'bj' },
      { label: '上海', value: 'sh' },
      { label: '广州', value: 'gz' },
    ]}
  />
);
```

## 禁用状态

```jsx
import { Radio } from 'lei-view';

export default () => (
  <>
    <Radio
      disabled
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]}
    />
    <Radio
      disabled
      optionType="button"
      style={{ marginLeft: '10px' }}
      options={[
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ]}
    />
  </>
);
```

## Radio API

| 参数       | 说明                                 | 类型                             | 默认值    |
| ---------- | ------------------------------------ | -------------------------------- | --------- |
| options    | 单选选项                             | {label: string, value: string}[] | []        |
| value      | 当前选中值                           | string                           | -         |
| onChange   | 变化时回调函数                       | (value: string) => void          | -         |
| disabled   | 禁用状态                             | boolean                          | false     |
| optionType | 显示形态，可选 'default' 或 'button' | 'default' \| 'button'            | 'default' |
