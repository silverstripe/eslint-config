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
  'indent': [
    'off'
  ],
  'react/no-find-dom-node': [
    // can use refs instead
    'off',
  ],
  'react/default-props-match-prop-types': [
    'off'
  ],
  'react/no-access-state-in-setstate': [
    'off'
  ],
  'default-param-last': [
    'off'
  ],
  'max-classes-per-file': [
    'off'
  ],
  'no-param-reassign': [
    'off'
  ],
  'no-unused-vars': [
    'off',
    {
      'vars': 'local',
      'ignoreRestSiblings': true
    }
  ],
  'implicit-arrow-linebreak': [
    'off'
  ],
  'no-param-reassign': [
    'off'
  ],
  'no-redeclare': [
    'off'
  ],
  'no-restricted-globals': [
    'off'
  ],
  'no-dupe-keys': [
    'off'
  ],
  // the following can be automatically fixed via the --fix option
  'import/order': [
    'off'
  ],
  'import/no-cycle': [
    'off'
  ],
  'function-paren-newline': [
    'off'
  ],
  'object-curly-newline': [
    'off'
  ],
  'no-multiple-empty-lines': [
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
  'no-unneeded-ternary': [
    'off'
  ],
  'semi-style': [
    'off'
  ],
  'lines-between-class-members': [
    'off'
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
  'react/jsx-fragments': [
    'off'
  ],
  'react/jsx-curly-brace-presence': [
    'off'
  ],
  'react/jsx-closing-tag-location': [
    'off'
  ],
  'react/jsx-no-useless-fragment': [
    'off'
  ],
  'react/no-unused-state': [
    'off'
  ],
  'react/forbid-foreign-prop-types': [
    'off'
  ],
  'react/no-deprecated': [
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
      'import/no-unresolved': [
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
        'off',
        { 'ignorePureComponents': true }
      ],
      'import/prefer-default-export': [
        'off'
      ],
      'import/first': [
        'off'
      ],
      'class-methods-use-this': [
        'off'
      ],
      // this one makes no sense in some regex contexts
      'no-useless-escape': [
        'off'
      ],
      // these accessibility rules will be a detriment to existing code/styles,
      // perhaps in the future
      'jsx-a11y/href-no-hash': [
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
      'react/no-array-index-key': [
        'off'
      ],
      'react/jsx-indent': [
        'off'
      ],
      'react/sort-comp': [
        'off'
      ],
      'react/no-unused-prop-types': [
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
