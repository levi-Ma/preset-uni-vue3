import all from '@hairy/eslint/all.js'
export default {
  ...all,
  rules: {
    'no-console': 'off'
  },
  extends: ['./.eslintrc-auto-import.json']
}
