const expect = require('chai').expect;
const calculator = require('../calculator');
console.log(calculator);

describe('calculator', ()=> {
  it('exists', ()=> {
    expect(calculator).to.be.ok;
  });

  describe('add', ()=> {
    it('can add 1 and 1', ()=> {
      expect(calculator.add(1, 1)).to.equal(2);
    });
  });
});
