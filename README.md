# postcss-rgb-filter 


[PostCSS](https://github.com/postcss/postcss) plugin to convert rgb colors to css filters.

Full credit to [MultiplyByZer0 for this code](https://stackoverflow.com/a/43960991/604861). 
This PostCSS plugin just wraps that code.

Created to help [colour SVG background images](https://css-tricks.com/solved-with-css-colorizing-svg-backgrounds/).

```css
.foo {
  filter: rgb(0, 92, 250);
}
```
Converts to:
```css
.foo {
  filter: invert(25%) sepia(96%) saturate(4236%) hue-rotate(214deg) brightness(97%) contrast(107%);
}
```

## Install

```
npm i --save-dev postcss-rgb-filter
```

## Usage

```js
postcss([ require('postcss-rgb-filter') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

