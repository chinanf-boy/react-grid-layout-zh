# STRML/react-grid-layout [![explain]][source] [![translate-svg]][translate-list]

<!-- [![size-img]][size] -->

[explain]: http://llever.com/explain.svg
[source]: https://github.com/chinanf-boy/Source-Explain
[translate-svg]: http://llever.com/translate.svg
[translate-list]: https://github.com/chinanf-boy/chinese-translate-list
[size-img]: https://packagephobia.now.sh/badge?p=Name
[size]: https://packagephobia.now.sh/result?p=Name

「 React-Grid-Layout：网格布局(grid layout)系统，但专为 React 服务 」

[中文](./readme.md) | [english](https://github.com/STRML/react-grid-layout)

---

## 校对 ✅

<!-- doc-templite START generated -->
<!-- repo = 'STRML/react-grid-layout' -->
<!-- commit = '80873c88b32755bd0ae028df20edc955c2c55d3e' -->
<!-- time = '2019-02-02' -->

| 翻译的原文 | 与日期        | 最新更新 | 更多                       |
| ---------- | ------------- | -------- | -------------------------- |
| [commit]   | ⏰ 2019-02-02 | ![last]  | [中文翻译][translate-list] |

[last]: https://img.shields.io/github/last-commit/STRML/react-grid-layout.svg
[commit]: https://github.com/STRML/react-grid-layout/tree/80873c88b32755bd0ae028df20edc955c2c55d3e

<!-- doc-templite END generated -->

- [x] readme
- [x] 1.  [展示](./docs/mds/0-showcase.zh.md)
- [x] 2.  [基本](./docs/mds/1-basic.zh.md)
- [x] 3.  [没有 拖放/调整大小 (仅是 布局)](./docs/mds/2-no-dragging.zh.md)
- [x] 4.  [凌乱排版，自动更正](./docs/mds/3-messy.zh.md)
- [x] 5.  [在子级上，定义的布局](./docs/mds/4-grid-property.zh.md)
- [x] 6.  [静态元素](./docs/mds/5-static-elements.zh.md)
- [x] 7.  [添加/删除元素](./docs/mds/6-dynamic-add-remove.zh.md)
- [x] 8.  [将布局保存到本地存储](./docs/mds/7-localstorage.zh.md)
- [x] 9.  [将响应布局，保存到本地存储(LocalStorage)](./docs/mds/8-localstorage-responsive.zh.md)
- [x] 10. [最小和最大宽度/高度](./docs/mds/9-min-max-wh.zh.md)
- [x] 11. [动态的，最小和最大宽度/高度](./docs/mds/10-dynamic-min-max-wh.zh.md)
- [x] 12. [无垂直紧凑（自由移动）](./docs/mds/11-no-vertical-compact.zh.md)
- [x] 13. [防止碰撞](./docs/mds/12-prevent-collision.zh.md)
- [x] 14. [错误案例](./docs/mds/13-error-case.zh.md)
- [x] 15. [工具箱](./docs/mds/14-toolbox.zh.md)

### 贡献

欢迎 👏 勘误/校对/更新贡献 😊 [具体贡献请看](https://github.com/chinanf-boy/chinese-translate-list#贡献)

## 生活

[help me live , live need money 💰](https://github.com/chinanf-boy/live-need-money)

---

# React grid layout

[![travis build](https://travis-ci.org/STRML/react-grid-layout.svg?branch=master)](https://travis-ci.org/STRML/react-grid-layout)
[![CDNJS](https://img.shields.io/cdnjs/v/react-grid-layout.svg)](https://cdnjs.com/libraries/react-grid-layout)
[![npm package](https://img.shields.io/npm/v/react-grid-layout.svg?style=flat-square)](https://www.npmjs.org/package/react-grid-layout)
[![npm downloads](https://img.shields.io/npm/dt/react-grid-layout.svg?maxAge=2592000)]()

React-Grid-Layout 是一个非常类似[Packery](http://packery.metafizzy.co/)要么[Gridster](http://dsmorse.github.io/gridster.js/)的网格布局(grid layout)系统，但专为 React 服务。

与那些系统不同，它具有响应性，并支持断点(breakpoints)。断点布局可由用户提供或自动生成。

RGL（React-Grid-Layout 的缩写） 是 React-only，且不需要 jQuery。

![BitMEX UI](http://i.imgur.com/oo1NT6c.gif)

> GIF 来自[BitMEX.com](https://www.bitmex.com)的实际演示。

\[**[Demo](http://llever.com/react-grid-layout-zh/examples/0-showcase.zh.html)\|[Changelog](/CHANGELOG.md)\|[CodeSandbox 可编辑 DEmo](https://codesandbox.io/s/5wy3rz5z1x?module=%2Fsrc%2FShowcaseLayout.js)**]

## 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [演示](#%E6%BC%94%E7%A4%BA)
  - [使用 React-Grid-Layout 的项](#%E4%BD%BF%E7%94%A8-react-grid-layout-%E7%9A%84%E9%A1%B9)
- [特征](#%E7%89%B9%E5%BE%81)
- [安装](#%E5%AE%89%E8%A3%85)
- [用法](#%E7%94%A8%E6%B3%95)
  - [不使用 Browserify / Webpack 的用法](#%E4%B8%8D%E4%BD%BF%E7%94%A8-browserify--webpack-%E7%9A%84%E7%94%A8%E6%B3%95)
  - [响应用法](#%E5%93%8D%E5%BA%94%E7%94%A8%E6%B3%95)
  - [提供网格宽度](#%E6%8F%90%E4%BE%9B%E7%BD%91%E6%A0%BC%E5%AE%BD%E5%BA%A6)
  - [网格布局 Props](#%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80-props)
  - [响应式网格布局 Props](#%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80-props)
  - [网格项 Props](#%E7%BD%91%E6%A0%BC%E9%A1%B9-props)
- [帮助](#%E5%B8%AE%E5%8A%A9)
- [TODO 清单](#todo-%E6%B8%85%E5%8D%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 演示

1.  [展示](http://llever.com/react-grid-layout-zh/examples/0-showcase.zh.html)
2.  [基本](http://llever.com/react-grid-layout-zh/examples/1-basic.zh.html)
3.  [没有 拖放/调整大小 (仅是 布局)](http://llever.com/react-grid-layout-zh/examples/2-no-dragging.zh.html)
4.  [乱排版式，自动更正](http://llever.com/react-grid-layout-zh/examples/3-messy.zh.html)
5.  [在子级上，定义的布局](http://llever.com/react-grid-layout-zh/examples/4-grid-property.zh.html)
6.  [静态元素](http://llever.com/react-grid-layout-zh/examples/5-static-elements.zh.html)
7.  [添加/删除元素](http://llever.com/react-grid-layout-zh/examples/6-dynamic-add-remove.zh.html)
8.  [将布局保存到本地存储](http://llever.com/react-grid-layout-zh/examples/7-localstorage.zh.html)
9.  [将响应布局保存到本地存储(LocalStorage)](http://llever.com/react-grid-layout-zh/examples/8-localstorage-responsive.zh.html)
10. [最小和最大宽度/高度](http://llever.com/react-grid-layout-zh/examples/9-min-max-wh.zh.html)
11. [动态的，最小和最大宽度/高度](http://llever.com/react-grid-layout-zh/examples/10-dynamic-min-max-wh.zh.html)
12. [无垂直紧凑（自由移动）](http://llever.com/react-grid-layout-zh/examples/11-no-vertical-compact.zh.html)
13. [防止碰撞](http://llever.com/react-grid-layout-zh/examples/12-prevent-collision.zh.html)
14. [错误案例](http://llever.com/react-grid-layout-zh/examples/13-error-case.zh.html)
15. [工具箱](http://llever.com/react-grid-layout-zh/examples/14-toolbox.zh.html)

#### 使用 React-Grid-Layout 的项

- [BitMEX](https://www.bitmex.com/)
- [AWS CloudFront Dashboards](https://aws.amazon.com/blogs/aws/cloudwatch-dashboards-create-use-customized-metrics-views/)
- [Grafana](https://grafana.com/)
- [Metabase](http://www.metabase.com/)
- [HubSpot](http://www.hubspot.com)
- [ComNetViz](http://www.grotto-networking.com/ComNetViz/ComNetViz.zh.html)
- [Stoplight](https://app.stoplight.io)
- [Reflect](https://reflect.io)
- [ez-Dashing](https://github.com/ylacaute/ez-Dashing)
- [Kibana](https://www.elastic.co/products/kibana)
- [Graphext](https://graphext.com/)

_知道别的吗？创建个 PR，让我知道！_

## 特征

- 100％React - 没有 jQuery
- 与服务器呈现的应用程序，兼容
- 可拖动的小部件
- 可调整大小的小部件
- 静态小部件
- 可配置砌砖：水平，垂直或关闭
- 拖动和调整大小的边缘检查
- 可以添加或删除小部件，而无需重建网格
- 布局可以序列化和恢复
- 响应 breakpoints
- 每个响应 breakpoint 的单独布局
- 使用 CSS Transforms 放置的网格项
- 性能：[on](http://i.imgur.com/FTogpLp.jpg)/[off](http://i.imgur.com/gOveMm8.jpg)，注意（绿色）油漆所占的时间百分比

| 版本         | 兼容性            |
| ------------ | ----------------- |
| > = 0.11.3   | React 0.14 和 v15 |
| > = 0.10.0   | React 0.14        |
| 0.8。- 0.9.2 | React 0.13        |
| \<0.8        | React 0.12        |

## 安装

安装 [React-Grid-Layout package](https://www.npmjs.org/package/react-grid-layout)，使用[npm](https://www.npmjs.com/)：

```bash
npm install react-grid-layout
```

在您的应用程序中，包含以下样式表：

```
/node_modules/react-grid-layout/css/styles.css
/node_modules/react-resizable/css/styles.css
```

## 用法

像任何其他组件一样，使用 ReactGridLayout。以下示例将生成一个包含三个项的网格，其中：

- 用户将无法对`a`项拖动或调整大小
- `b`项将限制为最小宽度为 2 个网格块，最大宽度为 4 个网格块。
- 用户将能够对`c`项，自由拖动和调整其大小

```js
import GridLayout from 'react-grid-layout';

class MyFirstGrid extends React.Component {
  render() {
    // layout（布局） 为 一个具有多对象数组, 你可以看看Demo展示集合，里面有更完整的用法
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
    );
  }
}
```

您也可以直接在子(children)项上，设置布局属性：

```js
import GridLayout from 'react-grid-layout';

class MyFirstGrid extends React.Component {
  render() {
    return (
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>
          a
        </div>
        <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>
          b
        </div>
        <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>
          c
        </div>
      </GridLayout>
    );
  }
}
```

### 不使用 Browserify / Webpack 的用法

可用于`<script>`标签的模块，包括在[这里](/dist/react-grid-layout.min.js)。它使用 UMD shim，并排除`React`，因此必须通过 RequireJS 或提供`window.React`，才能在你应用中工作。

### 响应模式的用法

应用 RGL 的响应模式，请使用`<ResponsiveReactGridLayout>`元素：

```js
import {Responsive as ResponsiveGridLayout} from 'react-grid-layout';

class MyResponsiveGrid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = getLayoutsFromSomewhere();
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveGridLayout>
    );
  }
}
```

在响应模式下，您应该通过`layouts`属性提供至少一个断点（breakpoints）。

使用`layouts`时，最好提供尽可能多的断点，尤其是最大的断点。如果最大值已提供，RGL 将尝试插入其余部分。

你还需要提供一个`width`，在使用`<ResponsiveReactGridLayout>`时，建议你使用 HOC`WidthProvider`，按照以下说明。

目前，无法通过个别项的`data-grid`属性，提供响应映射，但快到了。

### 提供网格宽度

`<ResponsiveReactGridLayout>`和`<ReactGridLayout>`两者，都采取`width`，计算 drag 事件的位置。在简单的情况下，一个 HOC`WidthProvider`可在初始化和窗口 resize 事件时，自动确定宽度。

```js
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = getLayoutsFromSomewhere();
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveGridLayout>
    );
  }
}
```

这使您可以轻松更换`WidthProvider`，为您自己的 Provider HOC，如果您需要更复杂的逻辑的话。

`WidthProvider`接受一个 Props，`measureBeforeMount`。如果为`true`，`WidthProvider`将在安装(mount) children 之前，测量容器的宽度。如果您想完全消除 应用程序/组件 mount 上的，任何调整大小动画，请使用此选项。

有一个更复杂的布局？`WidthProvider` [是很简单的](https://github.com/STRML/react-grid-layout/blob/master/lib/components/WidthProvider.jsx)，并且只听监听`'resize'`的窗口事件。如果您需要更多功能和灵活性，请尝试使用[SizeMe React HOC](https://github.com/ctrlplusb/react-sizeme)，作为 WidthProvider 的替代品。

### 网格布局 Props

RGL 支持以下属性（请参阅，最终来源）：

```js
//
// 基础 props
//

// 设置 初始 width 在服务器端.
// 必须的，除非使用 HOC <WidthProvider> 或 类似的
width: number,

// 如果为 true ，容器高度会膨胀，并紧凑以适应内容物。
autoSize: ?boolean = true,

// 此布局中的列数。
cols: ?number = 12,

// 一个CSS选择器， 不能拖放
// 例如: draggableCancel:'.MyNonDraggableAreaClassName'
// 若你忘了加上 `.` ，那么就不会工作
draggableCancel: ?string = '',

// 一个CSS选择器， 能拖放处理.
// 例如: draggableHandle:'.MyDragHandleClassName'
// 若你忘了加上 `.` ，那么就不会工作
draggableHandle: ?string = '',

// 如果是 true, 这个布局 垂直紧凑
verticalCompact: ?boolean = true,

// 紧凑类型.
compactType: ?('vertical' | 'horizontal') = 'vertical';

// Layout 是由一定格式的对象所组成的数组:
// {x: number, y: number, w: number, h: number}
// layout的索引，必须匹配，用在每个组件项上的 key。
// 如果 你选择使用自定义的 keys, 你可以指定为，在 layout
// 数组中对象的 keys ，像这样( i 就是 key ):
// {i: string, x: number, y: number, w: number, h: number}
layout: ?array = null, // 如果 不提供, 那使用 children 的 data-grid props

// [x, y]项与项之间的 Margin ，px 单位.
margin: ?[number, number] = [10, 10],

// 容器 [x, y] 里面的 Padding ，px 单位.
containerPadding: ?[number, number] = margin,

// Rows 具有一个 静态 height, 但
// 如果你喜欢的话，你可以基于 breakpoints，改变它.
rowHeight: ?number = 150,

//
// 标志
//
isDraggable: ?boolean = true,
isResizable: ?boolean = true,
// 使用 CSS3 translate() 代替 position top/left.
// 会让性能提升 6 倍
useCSSTransforms: ?boolean = true,

// 若 true，当其被拖(放)起来时，网格项不会改变 position。
preventCollision: ?boolean = false;

//
// 回调函数
//

// 因为 回调函数， 所以你可以保存 layout.
// 在每次 drag 或 resize stop事件之后，用 (currentLayout) 回调。
onLayoutChange: (layout: Layout) => void,

//
// 所有下面的回调函数，都有同样的函数参数签名 (layout, oldItem, newItem, placeholder, e, element).
// 'start' 和 'stop' 函数会给它们的参数 'placeholder'， 传递 `undefined`。
//
type ItemCallback = (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) => void;

// 开始拖动时，调用。
onDragStart: ItemCallback,
// 每次拖动时，调用。
onDrag: ItemCallback,
// 拖动完成后，调用。
onDragStop: ItemCallback,
// 开始调整大小时，调用。
onResizeStart: ItemCallback,
// 当发生调整大小移动时，调用。
onResize: ItemCallback,
// 当调整大小完成后，调用。
onResizeStop: ItemCallback
```

### 响应式网格布局 Props

可以使用响应式网格布局。它支持上面的所有 Props，除了`layout`。新属性和更改是：

```js
// {name: pxVal}, 例如： {lg: 1200, md: 996, sm: 768, xs: 480}
// 断点名称是任意的，但必须在 cols和 layouts 对象中，匹配。
breakpoints: ?Object = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
#
// cols 的 #。这是一个断点 -> cols 的 map，例如：{lg: 12, md: 10, ...}
cols: ?Object = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},

// 布局是将断点，映射到布局的对象。
// 例如： {lg: Layout, md: Layout, ...}
layouts: {[key: $Keys<breakpoints>]: Layout}

//
// 回调
//

// 使用断点和新 # 列回调
onBreakpointChange: (newBreakpoint: string, newCols: number) => void,

// 回调，以便保存布局。
// 所有布局都由断点，打上key。
onLayoutChange: (currentLayout: Layout, allLayouts: {[key: $Keys<breakpoints>]: Layout}) => void,

// 当宽度更改时回调，以便根据需要，修改布局。
onWidthChange: (containerWidth: number, margin: [number, number], cols: number, containerPadding: [number, number]) => void;
```

### 网格项 Props

RGL 的网格项或布局项支持以下属性。初始化网格时，构建一个布局数组（如上面的第一个示例中，[所示](#用法)），或者将此对象附加到，每个子元素的`data-grid`属性（如第二个示例中，[所示](#用法)）。

请注意，如果提供的网格项不完整（缺少其中一个）`x, y, w, or h`），将抛出错误，以便更正您的布局。

如果没有为网格项，提供属性，则将生成宽度和高度为`1`的网格项。

您可以为每个层级，设置最小值和最大值。这是为了调整大小;如果禁用调整大小，它当然没有效果。如果您的最小值和最大值，重叠不正确，或者您的初始尺寸超出范围，则会引发错误。

`<GridItem>`直接定义的任何属性，优先于全局设置选项。例如，如果布局具有`isDraggable: false`属性，但网格项 Props 有 `isDraggable: true`，该项将是可拖动的。

```js
{

  // 一个 字符串，对应组件的 key
  i: string,

  // 在 grid 单元中的所有, 不是 像素(px)
  x: number,
  y: number,
  w: number,
  h: number,
  minW: ?number = 0,
  maxW: ?number = Infinity,
  minH: ?number = 0,
  maxH: ?number = Infinity,

  // 如果为 true, 等于`isDraggable: false, isResizable: false`.
  static: ?boolean = false,
  // 如果为 false, 则不能拖放 draggable. 被 `static` 覆盖.
  isDraggable: ?boolean = true,
  // 如果为 false, 则不能调整大小 resizable. 被 `static` 覆盖.
  isResizable: ?boolean = true
}
```

## 帮助

如果您有功能请求，请将其添加为问题或提出拉取请求。

如果您有错误报告，请在[CodeSandbox](https://codesandbox.io/s/5wy3rz5z1x?module=%2Fsrc%2FShowcaseLayout.js)重现该错误，帮助我们轻松识别它。

## TODO 清单

- [x] 基本网格布局
- [x] 流体（Fluid）网格布局
- [x] 网格砌砖
- [x] 可拖动的网格项
- [x] 拖动时，实时网格砌砖
- [x] 可调整大小的网格项
- [x] 每个响应断点的布局
- [x] children 自己，定义网格属性（`data-grid` key）
- [x] 静态元素
- [x] 可预测的本地存储恢复，每个项的保留 ID，即使＃项发生更改，也是如此
- [x] 每项，都有 最小/最大限制的 w/h
- [ ] 其他角落，可调整大小的控制
- [ ] 每个断点，可配置 w/h
