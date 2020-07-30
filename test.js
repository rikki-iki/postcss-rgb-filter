const test = require('ava');
const postcss = require('postcss');
const plugin = require('./index');

// Function helper to make our tests cleaner
// This runs our plugin
function run(t, input, output, opts = {}){
  return postcss([ plugin(opts) ]).process(input)
    .then( result => {
      t.is(result.css, output);
      t.is(result.warnings().length, 0);
    });
}

// This test passed.
test('convert filter rgb() to acceptable values', t => {
  return run(
    t,
    'a { filter: rgb(0, 0, 0) }',
    'a { filter: invert(0%) sepia(100%) saturate(7461%) hue-rotate(347deg) brightness(105%) contrast(111%) }'
  );
});
