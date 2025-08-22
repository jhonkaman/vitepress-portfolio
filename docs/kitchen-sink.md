# Kitchen Sink

## Custom Containers

::: info
This is an info box.
:::

::: details
This is a details block.
:::

#### Custom Titles

::: info STOP
Danger zone, do not proceed
:::

::: details Click me to toggle
This is a details block.
:::

::: details Click me to toggle {open}
This is a details block.
:::

## Code Blocks

### Focus

```js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World"); // [!code focus]
}
```

### Diffs

```js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World"); // [!code --]
  console.log("Hello John"); // [!code ++]
}
```

### Errors and warnings

```js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World") // [!code warning]
}
```

### Line Numbers

```js:line-numbers
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World")
}
```

```js:line-numbers=10
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World")
}
```

### Imports

<<< @/example.js

### Code Groups

::: code-group
```css [main.css]
p {
  color: red;
}
```

```js [main.js]
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World")
}
```
:::
