   RGL Example 10 - Dynamic Minimum and Maximum Width/Height

### React-Grid-Layout Demo 10 - Dynamic Minimum and Maximum Width/Height

*   [View project on GitHub](https://github.com/STRML/react-grid-layout)
*   [View this example's source](https://github.com/STRML/react-grid-layout/blob/master/test/examples/10-dynamic-min-max-wh.jsx)
*   [**⇠** View the previous example: "Minimum and Maximum Width/Height"](9-min-max-wh.html)
*   [**⇢** View the next example: "No Vertical Compacting (Free Movement)"](11-no-vertical-compact.html)

Your application may have more complex rules for determining an element's mins and maxes. This demo demonstrates how to use the \`onResize\` handler to accomplish this.

In this grid, all elements are allowed a max width of 2 if the height < 3, and a min width of 2 if the height >= 3.