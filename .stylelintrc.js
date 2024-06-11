module.exports = {
    'extends': [
        'stylelint-config-recommended-scss',
        'stylelint-config-sass-guidelines',
        'stylelint-config-standard',
    ],
    'plugins': [
        'stylelint-scss'
    ],
    // Ignore anything that isn't one of these file types
    'ignoreFiles': ['**/!(*.{css,scss,sass})'],
    'rules': {
        // Line Spacing
        'rule-empty-line-before': [
            'always-multi-line',
            {
                'ignore': [
                    'after-comment',
                    'first-nested',
                    'inside-block'
                ]
            }
        ],
        // Selector rules
        'selector-no-qualifying-type': [
            true,
            {
                'ignore': [
                    'attribute',
                    'class'
                ]
            }
        ],
        'selector-max-id': 2,
        'selector-max-compound-selectors': 6,
        'selector-pseudo-element-colon-notation': 'single',
        'no-descending-specificity': [
            true,
            {
                'ignore': [
                    'selectors-within-list'
                ]
            }
        ],
        'max-nesting-depth': [
            4,
            {
                'ignore': [
                    'blockless-at-rules',
                    'pseudo-classes'
                ]
            }
        ],
        // Color rules
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'number-max-precision': 5,
        'color-named': [
            'never',
            {
                'ignore': [
                    'inside-function'
                ]
            }
        ],
        // Common rules
        'function-url-quotes': 'always',
        'import-notation': 'string',
        'annotation-no-unknown': [
            true,
            {
                'ignoreAnnotations': [
                    'default'
                ]
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                // Allow sass at-rules - see https://sass-lang.com/documentation/at-rules/
                'ignoreAtRules': [
                    'at-root',
                    'debug',
                    'each',
                    'else',
                    'error',
                    'extend',
                    'for',
                    'forward',
                    'function',
                    'if',
                    'import',
                    'include',
                    'mixin',
                    'return',
                    'use',
                    'warn',
                    'while',
                ]
            }
        ],
        'comment-no-empty': true,
        'declaration-block-no-duplicate-properties': true,
        'no-irregular-whitespace': true,
        'block-no-empty': [
            true,
            {
                'ignore': [
                    'comments'
                ]
            }
        ],
        'font-family-name-quotes': 'always-unless-keyword',
        // Turn off rules
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'function-no-unknown': null,
        'property-no-vendor-prefix': null,
        'value-no-vendor-prefix': null,
        'font-family-no-missing-generic-family-keyword': null,
        'scss/dollar-variable-colon-space-after': null,
        'scss/no-global-function-names': null,
        'value-keyword-case': null,
        'media-query-no-invalid': null,
        'selector-id-pattern': null,
        'keyframes-name-pattern': null,
        'scss/dollar-variable-pattern': null,
        'scss/at-extend-no-missing-placeholder': null,
        'no-descending-specificity': null,
    }
};
