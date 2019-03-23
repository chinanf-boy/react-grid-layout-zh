RGL示例8  - 响应LocalStorage

### React-Grid-Layout演示8  - 响应LocalStorage

-   [在GitHub上查看项目](https://github.com/STRML/react-grid-layout)
-   [查看此示例的源代码](https://github.com/STRML/react-grid-layout/blob/master/test/examples/8-localstorage-responsive.jsx)
-   [**⇠**查看上一个示例：“LocalStorage”](7-localstorage.html)
-   [**⇢**查看下一个示例：“最小和最大宽度/高度”](9-min-max-wh.html)

这个简单的演示为每个响应断点同步到localStorage。

尝试移动和调整元素大小，更改窗口宽度，移动更多元素和刷新。

每个断点都有一个单独的布局。该`onLayoutChange`回调使用断点的哈希值回调给布局，然后将其同步到localStorage。
