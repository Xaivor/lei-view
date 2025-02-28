# Radio 单选框

## 基本用法

```jsx
import {Radio} from 'lei-view'

const options = [
  {
    label: "选项一",
    value: "1"
  },
    {
    label: "选项二",
    value: "2"
  },
    {
    label: "选项三",
    value: "3"
  },
]

export default () => (
  <>
    <Radio options={options} />
  </>
);
````

## Radio API