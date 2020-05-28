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
    'a { filter: rgb(0, 92, 250) }',
    'a { filter: invert(25%) sepia(96%) saturate(4236%) hue-rotate(214deg) brightness(97%) contrast(107%) }'
  );
});
