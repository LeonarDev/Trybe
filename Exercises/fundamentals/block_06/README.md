# Block 06: HTML and CSS: Forms, Flexbox and Responsive Web Design

- (6.1) [HTML & CSS - Forms](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_06/6.1)
- (6.2) [JavaScript Libraries and CSS Frameworks](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_06/6.2)
- (6.3) [CSS Flexbox - Part 1](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_06/6.3)
- (6.4) [CSS Flexbox - Part 2](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_06/6.4)
- (6.5) [Responsive CSS - Mobile First](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_06/6.5)
- (6.6) [Project - Facebook Homepage](https://github.com/LeonarDev/Trybe/tree/main/Projects)

<br>

## Flexbox;

The first step to start using Flexbox is to create a **Flex container**. Child elements of a Flex container are called **Flex items** and are arranged within it using the Flexbox properties. Some of the Flexbox properties are applied to the container, and others to its items.
A Flex container is created by using the `display` property of an element with the `flex` value:

```css
.flex-container {
  display: flex;
}
```

The `flex-direction` property is the one that **defines the direction of the flex items** and modifies who the Main Axis is. *By default, this property is `row`*, so the elements are next to each other. The other values that this property has are:
- `row-reverse`, the items are in reverse line
- `column` where the items are in a single column, one underneath the other
- `column-reverse` in which the items are also a underneath the other, but in reverse order.

The `flex-wrap` property defines whether the items should break the line or not, and *by default this property is `nowrap`*, that is, the items do not break the line. The values that cause the line to break are:
- `wrap`, which breaks the line
- `wrap-reverse`, which breaks the line in the opposite direction.

In turn, `flex-flow` is a **shortcut to the flex-direction and flex-wrap properties**, the first value it receives is the flex-direction and the second is the flex-wrap.

<br>

<img src="https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-1/images/css_flexbox_axes.png">

<br>

`Justify-content` **aligns the flex items** in the container according to the direction. This property has this values:
- `flex-start` that aligns the items to the beginning of the container 
- `flex-end` that aligns the items to the end of the container
- `center` that aligns the items to the center of the container
- `space-between` creates equal spacing between the elements, keeping the first glued at the beginning and the last at the end
- `space-around` also creates a spacing between the elements, but the spacing in the middle is twice as large as the beginning and end.

<br>

The `align-items` property **aligns the flex items** according to the **cross-axis**. The values that this property accepts are:
- `stretch` which is its default value and causes the flex items to grow equally
- `flex-start` aligns the items at the beginning
- `flex-end` aligns the items at the end
- `center` aligns the items at the center
- `baseline` which aligns the items according to the typography baseline.

<br>

The `align-content` property **aligns the container lines** in relation to the **cross-axis**, and this property *only works if there are more than one line of flex items*. The alignment options that align-content presents are:
- `stretch` its default value that makes flex items grow equally vertically
- `flex-start` aligns all lines of items to the beginning
- `flex-end` which aligns all lines of items at the end 
- `center` that aligns all the lines to the center
- `space-between` which creates an equal spacing between the lines, keeping the first glued at the top and the last at the bottom
- `space-around` which also creates a spacing between the lines, but the spacing in the middle is twice as large as the top and bottom

<br>

The `align-self` property allows us to use the same alignment values learned previously (`flex-start, flex-end, stretch, baseline, center`), but **only for one item**. Thus, we can create a new class, pseudo-class or id for an item and edit its position individually, making it, unlike the others, be at the beginning or at the end of the container, centralized, as you prefer.
For more details, watch [this video](https://www.linkedin.com/learning/responsive-layout/aligning-individual-flex-items).

<br>

The `order` property allows us to **order items** from a given container. This property **is particular to each item** and, when used, will cause flexbox to display them in ascending order.
By default, the order property, implicitly, **has a value of 0**, this means that if only one item out of 5 in a container receives the order: 1 property, all the others will be ordered in the way they were built in HTML, while this will be positioned after the others.
It is interesting to draw attention to the fact that the property accepts negative values.

<br>

`flex-grow, flex-shrink, flex-basis`: This three properties must be exposed together. 
- `flex-basis` has the function of defining the base size of an item in the container. The default value of this property is `auto` - maintaining the flexibility of the item according to the size of the container.
If the container does not have enough space to properly dispose of all items, 
- The `flex-shrink` property appears to guarantee how much one item will be compressed compared to the others.
- Finally, ``flex-grow`` defines how much space will be occupied by an item.

<br>



## Content Links

- [A step-by-step guide to getting started with HTML forms](https://www.freecodecamp.org/news/a-step-by-step-guide-to-getting-started-with-html-forms-7f77ae4522b5/)
- [CSS Tricks: A Complete Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Game - Flexbox Froggy](https://flexboxfroggy.com/)
- [Flexbox Game - Flexbox Defense ](http://www.flexboxdefense.com/)
- [Flexbox Game - Flexyboxes](https://the-echoplex.net/flexyboxes/)
- [Playground: Properties for the flex container](https://codepen.io/enxaneta/full/adLPwv)
- [Flexbox Guide Origamid](https://origamid.com/projetos/flexbox-guia-completo/)
