   RGL Example 3 - Messy

### React-Grid-Layout Demo 3 - Messy

*   [View project on GitHub](https://github.com/STRML/react-grid-layout)
*   [View this example's source](https://github.com/STRML/react-grid-layout/blob/master/test/examples/3-messy.jsx)
*   [**⇠** View the previous example: "No Dragging"](2-no-dragging.html)
*   [**⇢** View the next example: "Grid Item Properties"](4-grid-property.html)

This demo shows what happens when elements are placed randomly all over the layout.

RGL does not auto-pack in the same fashion as other projects, such as jQuery Masonry. Packing is only done in the vertical dimension. If objects all have the same width, they will be packed efficiently.

If a layout is fed to RGL that has items with incorrect dimensions (width too big, overlapping other elements, out of bounds, etc), they will be automatically corrected on startup. See the source of this demo, where elements are placed randomly in the layout.