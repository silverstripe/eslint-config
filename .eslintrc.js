// turn these back on progressively
const todo = {
  'react/jsx-filename-extension': [
    // most disruptive with the file renames
    'off'
  ],
  'react/require-default-props': [
    // very useful for future development and generating test/storybook mocks
    'off'
  ],
  'react/prop-types': [
    // useful for getting a clear indication of a component's signature
    'off',
    {
      // shouldn't need to define children, also ineffective to use `PropTypes.node` as it still fails for stateless components
      ignore: ['children']
    }
  ],
  'comma-dangle': [
    'off'
  ],
  'arrow-parens': [
    'off'
  ],
  'react/no-find-dom-node': [
    // can use refs instead
    'off',
  ],
  'react/default-props-match-prop-types': [
    'off'
  ],
  'default-param-last': [
    'off'
  ],
  'no-param-reassign': [
    'off'
  ],
  'no-unused-vars': [
    'error',
    {
      'vars': 'local',
      'ignoreRestSiblings': true
    }
  ],
  'implicit-arrow-linebreak': [
    'off'
  ],
  'no-redeclare': [
    'off'
  ],
  'no-restricted-globals': [
    'off'
  ],
  'function-paren-newline': [
    'off'
  ],
  'object-curly-newline': [
    'off'
  ],
  'prefer-object-spread': [
    'off'
  ],
  'operator-linebreak': [
    'off'
  ],
  'no-else-return': [
    'off'
  ],
  'function-call-argument-newline': [
    'off'
  ],
  'lines-between-class-members': [
    'error',
    'always',
    {
      'exceptAfterSingleLine': true
    }
  ],
  'react/jsx-curly-newline': [
    'off'
  ],
  'react/jsx-wrap-multilines': [
    'off'
  ],
  'react/jsx-tag-spacing': [
    'off'
  ],
  'react/jsx-one-expression-per-line': [
    'off'
  ],
  'react/jsx-closing-tag-location': [
    'off'
  ],
  'react/forbid-foreign-prop-types': [
    'off'
  ],
};

module.exports = {
  'extends': 'airbnb',
  'env': {
    'jasmine': true,
    'browser': true
  },
  'root': true,
  'rules': Object.assign({},
    todo,
    {
      "max-len": [
        "error",
        {
          "code": 200,
        }
      ],
      // turned off otherwise non-admin modules will complain about importing components from admin
      // via the novel silverstripe js component sharing setup
      'import/no-extraneous-dependencies': [
        'off'
      ],
      // turned off because the PHP side returns dangling properties which trigger this...
      // could revise later and add exceptions for PHP data
      'no-underscore-dangle': [
        'off',
        {
          'allow': [
            '_t'
          ],
          'allowAfterThis': true
        }
      ],
      // increased to error because it's strongly discouraged
      'react/no-danger': [
        'error'
      ],
      'no-plusplus': [
        'error',
        {
          'allowForLoopAfterthoughts': true
        }
      ],
      'react/no-unused-prop-types': [
        // we want to capture prop types that aren't used
        'error'
      ],
      // May revise this when as we get more cleanup done
      'react/forbid-prop-types': [
        'off'
      ],
      'react/prefer-stateless-function': [
        'error',
        { 'ignorePureComponents': true }
      ],
      'import/prefer-default-export': [
        'off'
      ],
      'class-methods-use-this': [
        'off'
      ],
      // this one makes no sense in some regex contexts
      'no-useless-escape': [
        'off'
      ],
      'jsx-a11y/iframe-has-title': [
        'off'
      ],
      'jsx-a11y/anchor-has-content': [
        'off'
      ],
      'jsx-a11y/control-has-associated-label': [
        'off'
      ],
      'jsx-a11y/click-events-have-key-events': [
        'off'
      ],
      'jsx-a11y/no-static-element-interactions': [
        'off'
      ],
      'jsx-a11y/anchor-is-valid': [
        'off'
      ],
      'no-prototype-builtins': [
        'off'
      ],
      'prefer-destructuring': [
        'off'
      ],
      'prefer-promise-reject-errors': [
        'off'
      ],
      'no-promise-executor-return': [
        'off'
      ],
      'func-names': [
        'off'
      ],
      'react/destructuring-assignment': [
        'off'
      ],
      'react/jsx-props-no-spreading': [
        'off'
      ],
      'react/button-has-type': [
        'off'
      ],
      'react/sort-comp': [
        'off'
      ],
      'react/no-unused-class-component-methods': [
        'off'
      ],
      'react/function-component-definition': [
        'off'
      ],
      // raise warnings because it may cause weird bugs
      'react/jsx-no-constructed-context-values': [
        'warn'
      ],
      'react/no-unstable-nested-components': [
        'warn'
      ],
    }),
  'overrides': [
    {
      "files": ["*-test.js","*-story.js"],
      "rules": {
        "import/no-extraneous-dependencies": "off"
      }
    }
  ],
  'settings': {
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx'
        ],
        'moduleDirectory': [
          '.',
          'client/src',
          '../admin/client/src',
          '../admin/node_modules',
          'vendor/silverstripe/admin/client/src',
          'vendor/silverstripe/admin/node_modules',
          'node_modules'
        ]
      }
    }
  }
};