module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    globals: {
      defineProps: 'readonly', // 👈 This is the key fix
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly'
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off'
    },
  }
  