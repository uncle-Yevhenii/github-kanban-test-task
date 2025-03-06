import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier" // Інтеграція з Prettier
  ),
  {
    rules: {
      // Базові правила
      "no-console": ["warn", { allow: ["warn", "error"] }], // Забороняє console.log, але дозволяє console.warn та console.error
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Помилка при невикористаних змінних, крім тих що починаються з _
      "no-duplicate-imports": "error", // Забороняє дублювання імпортів

      // React специфічні правила
      "react/prop-types": "off", // Вимикаємо перевірку PropTypes оскільки використовуємо TypeScript
      "react/react-in-jsx-scope": "off", // Не потрібно в Next.js
      "react/jsx-curly-brace-presence": ["error", "never"], // Забороняє непотрібні фігурні дужки в JSX
      "react/self-closing-comp": "error", // Вимагає само-закриваючі теги

      // TypeScript специфічні правила
      "@typescript-eslint/no-explicit-any": "error", // Забороняє використання типу any
      "@typescript-eslint/explicit-module-boundary-types": "off", // Не вимагає явного означення типів для експортованих функцій
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Краща версія no-unused-vars для TypeScript

      // Import правила
      "import/order": [
        // Сортування імпортів
        "error",
        {
          groups: [
            "builtin", // Вбудовані модулі Node.js
            "external", // Зовнішні пакети
            "internal", // Внутрішні модулі
            ["parent", "sibling"], // Відносні імпорти
            "index", // Індексні файли
            "object", // Об'єктні імпорти
            "type", // Type імпорти
          ],
          "newlines-between": "always", // Розділяє групи імпортів пустими рядками
        },
      ],

      // Правила для хуків
      "react-hooks/rules-of-hooks": "error", // Перевіряє правила використання хуків
      "react-hooks/exhaustive-deps": "warn", // Перевіряє залежності в useEffect
    },
    settings: {
      "import/resolver": {
        typescript: {}, // Підтримка alias шляхів з tsconfig
      },
    },
  },
];

export default eslintConfig;
