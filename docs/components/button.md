# Button

常用的操作按钮

## 基础用法

使用 `type`、`plain`、`round` 来定义按钮的样式。

```jsx
import { Button } from 'lei-view';

const marginBottom = { marginBottom: '10px' };

export default () => <>
  <div style={marginBottom}>
    <Button >default</Button>
    <Button type="primary">primary</Button>
    <Button type="danger">danger</Button>
    <Button type="info">info</Button>
    <Button type="success">success</Button>
  </div>

  <div style={marginBottom}>
    <Button plain>plain</Button>
    <Button type="primary" plain>primary</Button>
    <Button type="danger" plain>danger</Button>
    <Button type="info" plain>info</Button>
    <Button type="success" plain>success</Button>
  </div>

  <div>
    <Button round>round</Button>
    <Button type="primary" round>primary</Button>
    <Button type="danger" round>danger</Button>
    <Button type="info" round>info</Button>
    <Button type="success" round>success</Button>
  </div>
</>
```

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```jsx
import { Button } from 'lei-view';

const marginBottom = { marginBottom: '10px' };

export default () => <>
  <div style={marginBottom}>
    <Button disabled>default</Button>
    <Button type="primary" disabled>primary</Button>
    <Button type="danger" disabled>danger</Button>
    <Button type="info" disabled>info</Button>
    <Button type="success" disabled>success</Button>
  </div>

  <div style={marginBottom}>
    <Button plain disabled>plain</Button>
    <Button type="primary" plain disabled>primary</Button>
    <Button type="danger" plain disabled>danger</Button>
    <Button type="info" plain disabled>info</Button>
    <Button type="success" plain disabled>success</Button>
  </div>
</>
```

## 链接按钮

你可以使用 `link` 属性来定义按钮是否为链接按钮。

```jsx
import { Button } from 'lei-view';

const marginBottom = { marginBottom: '10px' };

export default () => <>
  <div style={marginBottom}>
    <Button link>default</Button>
    <Button type="primary" link>primary</Button>
    <Button type="danger" link>danger</Button>
    <Button type="info" link>info</Button>
    <Button type="success" link>success</Button>
  </div>
</>

```

## 加载状态

你可以使用 `loading` 属性来定义按钮是否处于加载状态。

使用 `loading` 属性来控制按钮是否处于加载状态。 该属性接受一个 `Boolean` 类型的值。

```jsx
import { Button } from 'lei-view';

const marginBottom = { marginBottom: '10px' };

export default () => {
  return <>
    <div style={marginBottom}>
      <Button loading>default</Button>
      <Button type="primary" loading>primary</Button>
      <Button type="danger" loading>danger</Button>
      <Button type="info" loading>info</Button>
      <Button type="success" loading>success</Button>
    </div>

    <div style={marginBottom}>
      <Button plain loading>plain</Button>
      <Button type="primary" plain loading>primary</Button>
      <Button type="danger" plain loading>danger</Button>
      <Button type="info" plain loading>info</Button>
      <Button type="success" plain loading>success</Button>
    </div>

      <div style={marginBottom}>
        <Button link loading>default</Button>
        <Button type="primary" link loading>primary</Button>
        <Button type="danger" link loading>danger</Button>
        <Button type="info" link loading>info</Button>
        <Button type="success" link loading>success</Button>
      </div>
  </>
}

```
你还可以使用 `loading-text` 属性来定义加载状态下的按钮文字。

```jsx
import { useState } from 'react';
import { Button } from 'lei-view';

const marginBottom = { marginBottom: '10px' };

export default () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if(loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return <>
    <div style={marginBottom}>
      <Button 
        plain 
        loading={loading} 
        loading-text="提交中..."
        onClick={() => handleClick()}
        >点我提交</Button>
      <Button 
        type="primary"
        loading={loading} 
        loading-text="上传中..."
        onClick={() => handleClick()}
        >点我上传</Button>
    </div>
  </>
}
```

## 按钮尺寸
目前支持三种尺寸：`mini`、`middle`、`large`。

默认值为 `middle`。

使用 `size` 属性来定义按钮的尺寸。

```jsx
import { Button } from 'lei-view';

const marginBottom = { marginBottom: '10px' };

export default () => <>
  <div style={marginBottom}>
    <Button size="mini" type="primary">mini</Button>
    <Button size="middle" type="primary">middle</Button>
    <Button size="large" type="primary">large</Button>
  </div>
</>
```

## Button API

### Button 属性

| 参数         | 说明                 | 类型    | 可选值                                                   | 默认值      |
| ------------ | -------------------- | ------- | -------------------------------------------------------- | ----------- |
| type         | 按钮类型             | string  | `default`  `primary` `success` `info` `warning` `danger` | `default`   |
| plain        | 是否为朴素按钮       | boolean | --                                                       | `false`     |
| round        | 是否为圆角按钮       | boolean | --                                                       | `false`     |
| link         | 是否为链接按钮       | boolean | --                                                       | `false`     |
| disabled     | 是否为禁用状态       | boolean | --                                                       | `false`     |
| loading      | 是否为加载状态       | boolean | --                                                       | `false`     |
| loading-text | 加载状态下的按钮文字 | string  | --                                                       | `加载中...` |
| size         | 按钮尺寸             | string  | `mini` `middle` `large`                                  | `middle`    |

### Button 事件

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| click  | 点击按钮触发的事件 | --       |

### Button 插槽

| 插槽名称 | 说明             |
| -------- | ---------------- |
| default  | 自定义按钮组内容 |
