module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jasmine": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ]
    },
    "settings": {
        "react": {
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.0" // React version, default to the latest React stable release
        }
    }
};