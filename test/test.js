const expect = require('chai').expect;
const giggle = require('../crazy');
const _ = require('lodash');

describe('Flattening the arrays', () => {
    it('should flat array on a depth of 1', () => {
        const data = [1, [2, [3, [4]], 5]];
        const result1 = _.flatten(data, 1).length;
        
        const result2 = giggle(data);

        expect(result2).to.be.equal(result1);
    })
})