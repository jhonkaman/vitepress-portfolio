# Kitchen Sink

## Custom Container

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

```js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World"); // [!code focus]
}
```

```js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World"); // [!code --]
  console.log("Hello John"); // [!code ++]
}
```

```js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World") // [!code warning]
}
```

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

<<< @/example.js

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
