# Input 输入框

通过鼠标或键盘输入字符

## 基本用法

```jsx
import { Input } from 'lei-view';

export default () => (
  <>
    <Input inputStyle={{ width: '300px' }} />
  </>
);
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

```jsx
import { Input } from 'lei-view';

export default () => (
  <>
    <Input disabled />
  </>
);
```

## 只读状态

通过 `readonly` 属性指定是否只读 input 组件

```jsx
import { Input } from 'lei-view';

export default () => (
  <>
    <Input readonly value="123" />
  </>
);
```

## 带图标输入

使用 `icon` 属性指定输入框前置或后置图标

```jsx
import { Input } from 'lei-view';

export default () => (
  <>
    <Input icon="search" placeholder="输入搜索内容" />
    <Input
      style={{ marginLeft: '10px' }}
      icon="search"
      iconPosition="right"
      placeholder="请输入内容"
    />
  </>
);
```

## 带清除按钮

传入 `clearable` 来是否显示清除输入框图标按钮

```jsx
import { Input } from 'lei-view';

export default () => (
  <>
    <Input placeholder="输入搜索内容" clearable />
    <Input
      style={{ marginLeft: '10px' }}
      icon="search"
      iconPosition="right"
      placeholder="请输入内容"
      clearable
    />
  </>
);
```

## Input API

### Input 属性

| 参数         | 说明                     | 类型            | 默认值  |
| ------------ | ------------------------ | --------------- | ------- |
| type         | 输入框值类型             | `string`        | `text`  |
| value        | 输入框的值               | `string`        | --      |
| icon         | 输入框前置或后置图标     | `string`        | --      |
| iconPosition | 输入框前置或后置图标位置 | `left \ right`  | `left`  |
| clearable    | 是否显示清除按钮         | `boolean`       | `false` |
| disabled     | 是否禁用                 | `boolean`       | `false` |
| readonly     | 是否只读                 | `boolean`       | `false` |
| placeholder  | 占位文本                 | `string`        | --      |
| inputStyle   | 输入框样式               | `CSSProperties` | --      |
| inputStyle   | 输入框 input 样式        | `CSSProperties` | --      |

### Input 事件

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| change   | 输入框值改变时触发   | `value`  |
| focus    | 输入框获得焦点时触发 | --       |
| blur     | 输入框失去焦点时触发 | --       |
| clear    | 输入框清空值时触发   | --       |
