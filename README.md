# postcss-rgb-filter 


[PostCSS](https://github.com/postcss/postcss) plugin to convert rgb colors to css filters.

Full credit to [MultiplyByZer0 for this code](https://stackoverflow.com/a/43960991/604861). 
This PostCSS plugin just wraps that code.

Created to help [colour SVG background images](https://css-tricks.com/solved-with-css-colorizing-svg-backgrounds/).

For this code to work well the starting color of the icon SVG needs to be black. Also note filters are not supported 
in IE11, so the black icon will be the fallback.

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

If you use the [css variables](https://www.npmjs.com/package/postcss-css-variables) plugin and want to use a variable 
for the color value, make sure it also runs before this plugin.

If you prefer writing colours in hex format simple add a plugin like [postcss-rgb-plz](https://www.npmjs.com/package/postcss-rgb-plz)
and make sure it runs before this plugin.

If you use an autoprefixer plugin make sure it runs after this plugin, otherwise the prefixed value won't be converted.
