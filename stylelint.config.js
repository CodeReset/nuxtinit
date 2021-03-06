module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands", "after-comment"],
        message: "Пустая строка перед комментарием"
      }
    ],
    "comment-whitespace-inside": [
      "always",
      {
        except: ["first-nested"],
        message: "Требуются пробелы вначале и в конце комментария"
      }
    ],
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
        message: "Пустая строка перед правилом"
      }
    ],
    "color-hex-case": [
      "lower",
      {
        message: "HEX цвета следует набирать строчными буквами"
      }
    ],
    "color-named": [
      "never",
      {
        message: "Цвета не следует указывать ключевыми словами"
      }
    ],
    "color-no-invalid-hex": [
      true,
      {
        message: "Правильные значения HEX цветов"
      }
    ],
    "font-weight-notation": [
      "numeric",
      {
        message: "Плотность шрифта следует указывать цифровым значением"
      }
    ],
    "function-calc-no-unspaced-operator": [
      true,
      {
        message: "В функции calc() необходимы пробелы вокруг операторов"
      }
    ],
    "function-linear-gradient-no-nonstandard-direction": [
      true,
      {
        message: "Стандартный синтаксис градиентов"
      }
    ],
    "number-leading-zero": [
      "always",
      {
        message: "Необходимо явно указывать нуль перед точкой"
      }
    ],
    "length-zero-no-unit": [
      true,
      {
        message: "Нуль требует указания единиц измерения"
      }
    ],
    "unit-case": [
      "lower",
      {
        message: "Единицы измерения следует указывать строчными буквами"
      }
    ],
    "unit-no-unknown": [
      true,
      {
        message: "Неизвестная единица измерения"
      }
    ],
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: ["$font-family_sans", "$font-family_serif"],
        message: "Значения свойств следует указывать строчными буквами"
      }
    ],
    "value-list-comma-newline-after": [
      "never-multi-line",
      {
        message: "Значения свойств на одной строке"
      }
    ],
    "value-list-comma-space-after": [
      "always",
      {
        message: "При перечислении значениий необходим пробел после запятой"
      }
    ],
    "property-case": [
      "lower",
      {
        message: "Свойства следует набирать строчными буквами"
      }
    ],
    "declaration-bang-space-after": [
      "never",
      {
        message: "Без пробела после восклицательного знака"
      }
    ],
    "declaration-bang-space-before": [
      "always",
      {
        message: "Пробел перед восклицательным знаком"
      }
    ],
    "declaration-colon-newline-after": [
      "always-multi-line",
      {
        message: "Каждое значение свойства на новой строке"
      }
    ],
    "declaration-colon-space-after": [
      "always-single-line",
      {
        message: "Пробел после двоеточия"
      }
    ],
    "declaration-colon-space-before": [
      "never",
      {
        message: "Без пробела перед двоеточием"
      }
    ],
    "declaration-block-no-duplicate-properties": [
      true,
      {
        message: "Правила не должны дублироваться"
      }
    ],
    "declaration-block-no-shorthand-property-overrides": [
      true,
      {
        message:
          "Это свойство неочивидно переписывает другое для этого селектора"
      }
    ],
    "declaration-block-semicolon-newline-after": [
      "always",
      {
        message: "Перенос строки после точки с запятой"
      }
    ],
    "declaration-block-single-line-max-declarations": [
      1,
      {
        message: "Одно правило на строку"
      }
    ],
    "declaration-block-trailing-semicolon": [
      "always",
      {
        message: "Точка запятой после каждого правила"
      }
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: ["if", "else"],
        message: "Перенос строки после закрывающей фигурной скобки"
      }
    ],
    "block-closing-brace-newline-before": [
      "always",
      {
        message: "Перенос строки перед закрывающей фигурной скобки"
      }
    ],
    "block-opening-brace-newline-after": [
      "always",
      {
        message: "Перенос строки после открывающей фигурной скобки"
      }
    ],
    "block-opening-brace-space-before": [
      "always",
      {
        message: "Пробел перед открывающей фигурной скобкой"
      }
    ],
    "selector-attribute-brackets-space-inside": [
      "never",
      {
        message: "Без пробелов в селекторе атрибута"
      }
    ],
    "selector-attribute-operator-space-after": [
      "never",
      {
        message: "Без пробелов в селекторе атрибута"
      }
    ],
    "selector-attribute-operator-space-before": [
      "never",
      {
        message: "Без пробелов в селекторе атрибута"
      }
    ],
    "selector-combinator-space-after": [
      "always",
      {
        message: "Пробел перед комбинирующим селектором"
      }
    ],
    "selector-combinator-space-before": [
      "always",
      {
        message: "Пробел после комбинирующего селектора"
      }
    ],
    "selector-max-compound-selectors": [
      6,
      {
        message: "Максимальная сложность составных селекторов"
      }
    ],
    "selector-pseudo-class-case": [
      "lower",
      {
        message: "Псевдоклассы следует набирать строчными буквами"
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        message: "Неизвестный псевдокласс"
      }
    ],
    "selector-pseudo-class-parentheses-space-inside": [
      "never",
      {
        message: "Без пробелов внутри скобок псевдокласс"
      }
    ],
    "selector-pseudo-element-case": [
      "lower",
      {
        message: "Псевдоэлементы следует набирать строчными буквами"
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["/^v-deep/"],
        message: "Неизвестный псевдоэлемент"
      }
    ],
    "selector-type-case": [
      "lower",
      {
        message: "Селекторы следует набирать строчными буквами"
      }
    ],
    "selector-type-no-unknown": [
      true,
      {
        message: "Неизвестный селектора"
      }
    ],
    "selector-max-empty-lines": [
      0,
      {
        message: "Без пустых строк в селекторах"
      }
    ],
    "selector-list-comma-newline-after": [
      "always",
      {
        message: "Перенос строки после запятой в перечислении селекторов"
      }
    ],
    "media-feature-colon-space-after": [
      "always",
      {
        message: "Пробел после двоеточия в медиа-запросах"
      }
    ],
    "media-feature-colon-space-before": [
      "never",
      {
        message: "Пробел после двоеточия в медиа-запросах"
      }
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["import", "include", "else"],
        message: "Пустая строка перед @-директивой"
      }
    ],
    "at-rule-name-case": [
      "lower",
      {
        message: "@-директивы следует набирать строчными буквами"
      }
    ],
    "at-rule-name-space-after": [
      "always",
      {
        message: "Пробел после @-директивы"
      }
    ],
    "at-rule-semicolon-newline-after": [
      "always",
      {
        message: "Перенос строки после @-директивы"
      }
    ],
    "comment-no-empty": [
      true,
      {
        message: "Комментарий не должен быть пустым"
      }
    ],
    "no-invalid-double-slash-comments": [
      true,
      {
        message: "Комментарий не должен указываться через двойной слэш"
      }
    ],
    "block-no-empty": [
      true,
      {
        message: "Блок не должен быть пустым"
      }
    ],
    "no-descending-specificity": [
      true,
      {
        message:
          "Не стоит переписывать селекторы с меньшей специфичностью селекторами с большей"
      }
    ],
    "no-duplicate-at-import-rules": [
      true,
      {
        message: "Импорты не должны дублироваться"
      }
    ],
    indentation: [
      2,
      {
        message: "Отступ в 2 пробела"
      }
    ],
    "max-empty-lines": [
      2,
      {
        message: "Максимум 2 пустые строки"
      }
    ],
    "max-nesting-depth": [
      4,
      {
        message: "Максимальная глубина вложенности - 4"
      }
    ],
    "no-duplicate-selectors": [
      true,
      {
        message: "Селекторы не должны дублироваться"
      }
    ],
    "no-eol-whitespace": [
      true,
      {
        message: "Без пробелов на конце строки"
      }
    ],
    "no-empty-source": [
      true,
      {
        message: "Не должно быть пустых мест"
      }
    ],
    "no-extra-semicolons": [
      true,
      {
        message: "Только одна точка с запятой в конце строки"
      }
    ],
    "declaration-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-declaration", "after-comment"],
        message: "Пустая строка перед комментарием"
      }
    ]
  }
};
