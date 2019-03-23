'use strict';

module.exports = [
  {
    title: '展示',
    source: 'showcase',
    paragraphs: [
      'React-Grid-Layout 是 React 的网格布局系统。它具有自动打包，可拖动和可调整大小的小部件，静态小部件，一个流畅的(fluid)布局，以及每个响应断点的单独布局等功能。',
      '试试看！拖动一些框，调整它们大小，然后调整窗口大小，以查看响应断点。'
    ]
  },
  {
    title: '基本',
    source: 'basic',
    paragraphs: [
      '尝试拖动元素。',
      '这是一个基本的，无响应的布局，具有拖动和调整大小。用法很简单。'
    ]
  },
  {
    title: '无拖动',
    source: 'no-dragging',
    paragraphs: ['此特定示例，已关闭拖动和调整大小。']
  },
  {
    title: '凌乱',
    source: 'messy',
    paragraphs: [
      '该演示展示了，在整个布局中随机放置元素时，会发生什么。',
      'RGL 不会像其他项目一样自动砌砖，例如 jQuery Masonry。砌砖，仅在垂直方向上进行。如果对象都具有相同的宽度，则它们将被有效地打包。',
      '如果一个具有不正确尺寸的布局喂给RGL（宽度太大，与其他元素重叠，超出范围等），则它们将在启动时，自动更正。请参阅此演示的源代码，其中元素随机放置在布局中。'
    ]
  },
  {
    title: '网格项属性',
    source: 'grid-property',
    paragraphs: ['此演示指定的布局，使用在网格项本身上的`data-grid`属性。']
  },
  {
    title: '静态元素',
    source: 'static-elements',
    paragraphs: [
      '此演示将项目设置为`static`。静态元素无法移动或调整大小。其他元素围绕静态元素移动。'
    ]
  },
  {
    title: '动态添加/删除',
    source: 'dynamic-add-remove',
    paragraphs: [
      '此演示显示了动态添加和删除项时会，发生什么。',
      '您可以通过单击“x”来删除项，然后使用`Add item`按钮，添加新项。',
      '为了进一步说明 RGL 的容量，这个特定的例子是响应式的。尝试调整窗口大小。'
    ]
  },
  {
    title: 'LocalStorage',
    source: 'localstorage',
    paragraphs: [
      '这个简单的演示， 同步 localStorage 。',
      '尝试移动和调整元素大小，然后重新加载。'
    ]
  },
  {
    title: '响应 LocalStorage',
    source: 'localstorage-responsive',
    paragraphs: [
      '这个简单的演示，帮每个响应断点，同步到 localStorage。',
      '尝试移动和调整元素大小，更改窗口宽度，移动更多元素和刷新。',
      '每个断点都有一个单独的布局。该`onLayoutChange`回调，使用断点的哈希值回调给布局，然后将其同步到 localStorage。'
    ]
  },
  {
    title: '最小和最大宽度/高度',
    source: 'min-max-wh',
    paragraphs: [
      '您可以使用`minW`，`maxW`，`minH`，和`maxH`属性，在网格项上，设置最小和最大尺寸。',
      '在此演示中，将自动生成最小和最大尺寸。尝试调整以下项的大小。',
      '如果您的最小和最大值发生碰撞：例如 min > max，或者初始尺寸超出范围，则会引发错误。'
    ]
  },
  {
    title: '动态最小和最大宽度/高度',
    source: 'dynamic-min-max-wh',
    paragraphs: [
      '您的应用程序可能有更复杂的规则，来确定元素的最小和最大值。这个演示演示了如何使用`onResize`处理器，来完成这个。',
      '在此网格中，如果高度 <3，则允许所有元素的最大宽度为 2; 如果高度 > = 3，则允许所有元素的最小宽度为 2。'
    ]
  },
  {
    title: '无垂直紧凑（自由移动）',
    source: 'no-vertical-compact',
    paragraphs: [
      '您可能希望关闭垂直紧凑，以便将项目放置在网格中的任何位置。设置属性`verticalCompact`为`false`达到这个效果。'
    ]
  },
  {
    title: '防止碰撞',
    source: 'prevent-collision',
    paragraphs: [
      '您可能希望关闭重新排列，以便在拖动时，周围的项不会移动。设置属性`preventCollision`为`true`达到这个效果。将`verticalCompact`设为`false`，会特别有用。'
    ]
  },
  {
    title: '错误情况',
    source: 'error-case',
    paragraphs: [
      '这是额外测试用例，于 2017 年 11 月修复的碰撞错误。当您将 1 拖过 2 时，它不应超过 3。'
    ]
  },
  {
    title: '工具箱',
    source: 'toolbox',
    paragraphs: ['这演示了如何实现工具箱，来添加和删除小部件。']
  }
];
