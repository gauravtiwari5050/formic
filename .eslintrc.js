module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]
    }
};