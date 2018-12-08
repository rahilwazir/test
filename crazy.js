const _ = require('lodash');

function giggle($arr) {
    return _.flattenDepth($arr, 1).length;
}

module.exports = giggle;
