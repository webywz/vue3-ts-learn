module.exports = {
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/base',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	parser: 'vue-eslint-parser',
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/html-closing-bracket-newline': 'off'
	}
}
