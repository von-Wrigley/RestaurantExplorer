import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript'; 
import prettier from 'eslint-config-prettier/flat';


const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs, 
  {

    files: ['**/*.{ts,tsx}'],
    rules: {

      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/indent': 'off',
    }
  },
  prettier,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;