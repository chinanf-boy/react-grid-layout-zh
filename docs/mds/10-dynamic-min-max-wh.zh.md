RGL 示例 10 - 动态最小和最大宽度/高度

### React-Grid-Layout 演示 10 - 动态最小和最大宽度/高度

- [在 GitHub 上查看项目](https://github.com/STRML/react-grid-layout)
- [查看此示例的源代码](https://github.com/STRML/react-grid-layout/blob/master/test/examples/10-dynamic-min-max-wh.jsx)
- [**⇠**查看上一个示例：“最小和最大宽度/高度”](9-min-max-wh.html)
- [**⇢**查看下一个示例：“无垂直紧凑（自由移动）”](11-no-vertical-compact.html)

您的应用程序可能有更复杂的规则，来确定元素的最小和最大值。这个演示演示了如何使用`onResize`处理器，来完成这个。

在此网格中，如果高度\<3，则允许所有元素的最大宽度为 2; 如果高度 > = 3，则允许所有元素的最小宽度为 2。
