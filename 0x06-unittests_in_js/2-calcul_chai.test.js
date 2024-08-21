const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 6 for SUM when inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 for SUBTRACT when inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.333... for DIVIDE when inputs are 1.4 and 2.6', () => {
    expect(calculateNumber('DIVIDE', 1.4, 2.6)).to.be.closeTo(1 / 3, 0.0001);
  });

  it('should return Error for DIVIDE when rounded b is 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
  });

  it('should return 6 for SUM when inputs are 1.5 and 3.7', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it('should throw an error for an invalid operation type', () => {
    expect(() => {
      calculateNumber('MULTIPLY', 1, 3);
    }).to.throw('Invalid operation type');
  });
});
