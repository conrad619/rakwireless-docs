// var quickStartGuide = require('./sidebar/quickstart-guide')
// var faqs = require('./sidebar/faqs')
// var rui = require('./sidebar/rui')
//var usermanual = require('./sidebar/user-manual')
//var deploymentGuide = require('./sidebar/deployment-guide')
var devices = require('./sidebar/devices')
var root = require('./sidebar/root')

module.exports = {
  // ...quickStartGuide,
  // ...faqs,
  // ...rui,
  //...usermanual,
  //...deploymentGuide,
  ...devices,
  ...root
}