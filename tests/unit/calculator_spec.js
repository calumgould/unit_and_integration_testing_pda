var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5)
  })

  it('should be able to subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should be able to multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  })

  it('should be able to divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should be able to recognise when a number is clicked', function(){
    calculator.numberClick(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 7)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(7)
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(8)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 9)
  })

  it('should be able to clear running total without affecting the calculation', function(){
    calculator.numberClick(7)
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(8)
    calculator.operatorClick('=')
    calculator.clearClick()
    const previousTotal = calculator.previousTotal
    const runningTotal = calculator.runningTotal
    assert.strictEqual(previousTotal, 9)
    assert.strictEqual(runningTotal, 0)
  })

});
