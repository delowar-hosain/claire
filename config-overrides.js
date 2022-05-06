const {aliasWebpack, aliasJest} = require('react-app-alias')

const options = {
    app: 'src',
    "@/hooks/*": 'src/hooks',
    "@/components/*": 'src/components',
    "@/pages/*": 'src/pages',
    "@/context/*": "src/context",
    "@/config/*": "src/config",
    "@/services/*": "src/services",
    "@/interface/*": "src/interface",
    "@/layouts/*": "src/layouts",
}

module.exports = aliasWebpack(options)
module.exports.jest = aliasJest(options)