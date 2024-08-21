const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 6 for SUM when inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return -4 for SUBTRACT when inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.333... for DIVIDE when inputs are 1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.6), 1 / 3);
  });

  it('should return Error for DIVIDE when rounded b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
  });

  it('should return 6 for SUM when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('should throw an error for an invalid operation type', () => {
    assert.throws(() => {
      calculateNumber('MULTIPLY', 1, 3);
    }, Error, 'Invalid operation type');
  });
});
