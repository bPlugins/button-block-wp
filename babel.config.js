// Mirrors the default @wordpress/scripts babel setup, adding makepot so the
// editor bundle's strings are extracted from source. wp-cli's make-pot cannot
// parse build/index.js (the inlined Ace editor breaks its JS parser), so the
// JS POT is generated here during build and merged in the i18n-pot script.
module.exports = {
	presets: ['@wordpress/babel-preset-default'],
	plugins: [
		['@wordpress/babel-plugin-makepot', { output: 'languages/button-block-js.pot' }]
	]
};
