# Icon 图标

直接使用 antd 图标库，提供了一套常用的图标集合。

## 基本使用

- 可以使用 `<Icon />` 组件，传入 `name` 属性即可。
- 也可直接使用类名，传入 `iconfont-lei icon-[name]` 属性即可。

```jsx
import { Icon, Button } from 'lei-view';

const marginLeft = { marginLeft: '10px' }

export default () => <>
   <Icon name="USB" />
   <Icon style={marginLeft} name="like" />
   <Icon style={marginLeft} name="calendar" />
   <i className="iconfont-lei icon-search" style={{...marginLeft, fontSize: '32px'}}></i>
   <Button type="primary" style={marginLeft} icon='search'>搜索</Button>
</>
```

## 常用图标

<table border="1">
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-alert" style="font-size: 30px"></div>
      <div>alert</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-alert-fill" style="font-size: 30px"></div>
      <div>alert-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-audio" style="font-size: 30px"></div>
      <div>audio</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-audio-fill" style="font-size: 30px"></div>
      <div>audio-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-audiostatic" style="font-size: 30px"></div>
      <div>audiostatic</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-align-center" style="font-size: 30px"></div>
      <div>align-center</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-align-left" style="font-size: 30px"></div>
      <div>align-left</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-align-right" style="font-size: 30px"></div>
      <div>align-right</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-appstore" style="font-size: 30px"></div>
      <div>appstore</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-appstore-fill" style="font-size: 30px"></div>
      <div>appstore-fill</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-arrowdown" style="font-size: 30px"></div>
      <div>arrowdown</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-arrowleft" style="font-size: 30px"></div>
      <div>arrowleft</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-arrowright" style="font-size: 30px"></div>
      <div>arrowright</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-arrowup" style="font-size: 30px"></div>
      <div>arrowup</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-attachment" style="font-size: 30px"></div>
      <div>attachment</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-bell" style="font-size: 30px"></div>
      <div>bell</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-bell-fill" style="font-size: 30px"></div>
      <div>bell-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-bulb" style="font-size: 30px"></div>
      <div>bulb</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-bulb-fill" style="font-size: 30px"></div>
      <div>bulb-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-calendar" style="font-size: 30px"></div>
      <div>calendar</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-calendar-fill" style="font-size: 30px"></div>
      <div>calendar-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-camera" style="font-size: 30px"></div>
      <div>camera</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-camera-fill" style="font-size: 30px"></div>
      <div>camera-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-check" style="font-size: 30px"></div>
      <div>check</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-check-circle" style="font-size: 30px"></div>
      <div>check-circle</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-check-circle-fill" style="font-size: 30px"></div>
      <div>check-circle-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-check-square" style="font-size: 30px"></div>
      <div>check-square</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-check-square-fill" style="font-size: 30px"></div>
      <div>check-square-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-close" style="font-size: 30px"></div>
      <div>close</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-close-circle" style="font-size: 30px"></div>
      <div>close-circle</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-close-circle-fill" style="font-size: 30px"></div>
      <div>close-circle-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-close-square" style="font-size: 30px"></div>
      <div>close-square</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-close-square-fill" style="font-size: 30px"></div>
      <div>close-square-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-cloud-upload" style="font-size: 30px"></div>
      <div>cloud-upload</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-delete" style="font-size: 30px"></div>
      <div>delete</div> 
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <div class="iconfont-lei icon-download" style="font-size: 30px"></div>
      <div>download</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-edit" style="font-size: 30px"></div>
      <div>edit</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-edit-fill" style="font-size: 30px"></div>
      <div>edit-fill</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-edit-square" style="font-size: 30px"></div>
      <div>edit-square</div> 
    </td>
    <td style="text-align: center">
      <div class="iconfont-lei icon-exclaimination" style="font-size: 30px"></div>
      <div>exclaimination</div> 
    </td>
  </tr>
</table>

## 更多图标

[antd iconfont 图标库](https://www.iconfont.cn/collections/detail?cid=9402)
