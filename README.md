# RAKwireless Document Center [![Build Status](https://travis-ci.org/RAKwirelessDev/rakwireless-docs.svg?branch=master)](https://travis-ci.org/RAKwirelessDev/rakwireless-docs)
This is a [VuePress](https://vuepress.vuejs.org/) site which [Travis](hhttps://travis-ci.org/RAKwirelessDev/rakwireless-docs) automatically tests and builds to the [docs-deploy](https://github.com/RAKwirelessDev/rakwireless-docs/tree/docs-deploy) branch to be served via [Laravel Forge](https://forge.laravel.com/) as a static site.

# Documentation
Check out our docs at https://docs.rakwireless.com/.

# Install
```sh
# install globally
yarn global add vuepress # OR npm install -g vuepress

# upgrade dependencies
yarn upgrade

# start writing
vuepress dev docs

# build
vuepress build docs
```