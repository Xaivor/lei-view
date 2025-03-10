# Select 选择器

当用户需要从一组预设数据中进行单选或多选时。

## 搜索模式

```jsx
import React from 'react';
import { Select } from 'lei-view';

export default () => {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Select
      showSearch
      options={[
        { value: '1', label: '北京' },
        { value: '2', label: '上海' }
      ]}
      placeholder="请输入关键词搜索"
    />
  );
}
```

## 禁用状态

```jsx
import React from 'react';
import { Select } from 'lei-view';

export default () => (
  <Select
    disabled
    options={[
      { value: '1', label: '不可选选项' }
    ]}
  />
)
```

## 单选模式

```jsx
import React from 'react';
import { Select } from 'lei-view';

export default () => {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Select
      options={[
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' }
      ]}
      onChange={handleChange}
    />
  );
}
```

## 多选模式

```jsx
import React from 'react';
import { Select } from 'lei-view';

export default () => {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Select
      mode="multiple"
      showSearch
      options={[
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' }
      ]}
      onChange={handleChange}
    />
  );
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
|------|-----|------|-------|
| options | 选项数据 | array | [] |
| value | 当前选中值 | string/array | - |
| onChange | 选择变化回调 | function | - |
| mode | 模式（single/multiple） | string | 'single' |
| placeholder | 占位文本 | string | '请选择' |
| disabled | 是否禁用 | boolean | false |
| showSearch | 显示搜索框 | boolean | false |
| className | 自定义容器类名 | string | - |
| popupClassName | 下拉菜单类名 | string | - |

## 注意事项

- 多选模式时value必须传入数组
- 搜索功能需要配合showSearch属性使用
- 可通过添加scss变量自定义主题色：
  
```scss
$select-primary-color: #1890ff;
```
