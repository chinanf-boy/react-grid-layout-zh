RGL 示例 8 - 响应 LocalStorage

### React-Grid-Layout 演示 8 - 响应 LocalStorage

- [在 GitHub 上查看项目](https://github.com/STRML/react-grid-layout)
- [查看此示例的源代码](https://github.com/STRML/react-grid-layout/blob/master/test/examples/8-localstorage-responsive.jsx)
- [**⇠**查看上一个示例：“LocalStorage”](7-localstorage.html)
- [**⇢**查看下一个示例：“最小和最大宽度/高度”](9-min-max-wh.html)

这个简单的演示，帮每个响应断点，同步到 localStorage。

尝试移动和调整元素大小，更改窗口宽度，移动更多元素和刷新。

每个断点都有一个单独的布局。该`onLayoutChange`回调，使用断点的哈希值回调给布局，然后将其同步到 localStorage。
