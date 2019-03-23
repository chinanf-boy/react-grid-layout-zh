   RGL Example 8 - Responsive with LocalStorage

### React-Grid-Layout Demo 8 - Responsive with LocalStorage

*   [View project on GitHub](https://github.com/STRML/react-grid-layout)
*   [View this example's source](https://github.com/STRML/react-grid-layout/blob/master/test/examples/8-localstorage-responsive.jsx)
*   [**⇠** View the previous example: "LocalStorage"](7-localstorage.html)
*   [**⇢** View the next example: "Minimum and Maximum Width/Height"](9-min-max-wh.html)

This simple demo synchronizes to localStorage for each responsive breakpoint.

Try moving and resizing elements, changing window width, moving some more, and refreshing.

Each breakpoint has a separate layout. The `onLayoutChange` callback calls back with a hash of breakpoints to layouts, which is then synchronized to localStorage.