# Input 输入框

通过鼠标或键盘输入字符

## 基本用法

```jsx
import { Input } from 'lei-view';

export default () => <>
   <Input />
</>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

```jsx
import { Input } from 'lei-view';

export default () => <>
   <Input disabled />
</>
```

## 只读状态

通过 `readonly` 属性指定是否只读 input 组件

```jsx
import { Input } from 'lei-view';

export default () => <>
   <Input readonly value='123' />
</>
```

## Input API 

### Input 属性
| 参数        | 说明       | 类型      | 默认值  |
| ----------- | ---------- | --------- | ------- |
| value       | 输入框的值 | `string`  | --      |
| disabled    | 是否禁用   | `boolean` | `false` |
| readonly    | 是否只读   | `boolean` | `false` |
| placeholder | 占位文本   | `string`  | --      |

### Input 事件
| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| change   | 输入框值改变时触发   | `value`  |
| focus    | 输入框获得焦点时触发 | --       |
| blur     | 输入框失去焦点时触发 | --       |