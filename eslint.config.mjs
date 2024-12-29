import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the Next.js and TypeScript configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Disable the 'any' rule
      'prefer-const': 'off', // Disable the 'prefer-const' rule
      'prefer-spread': 'off', // Disable the 'prefer-spread' rule
      
    },
  },
];

export default eslintConfig;
