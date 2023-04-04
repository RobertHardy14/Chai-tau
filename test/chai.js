const chai = require('chai')

//expect

const expect = chai.expect

//expect API example - equals with failed test 

let a = 1, b = 1
expect(a).to.be.equals(b, "a and b are not equal");


//expect - object/string/boolean
function myObj() {
    return {
        a: 100,
        b: 'hello'
    }
}

x = new myObj(), y = new myObj()
expect(x).to.be.an('Object')
//expect(x).to.be.equals(y, 'x and y are not equal')

// expect - deep equal or deep equals

//expect(x).to.be.deep.equals(y, 'x and y are not equal')
expect(x).to.be.an('Object').and.to.be.deep.equals(y)

//arrays

let number = [1, 2, 3, 0]
expect(number).to.be.an('array').that.includes(3)

//should()

const should = chai.should()

//should - simple comparison

a.should.be.equals(b)

//should - object comparison with deep.equal or deep.equals

x.should.be.deep.equals(y, 'x and y are not equal');

//should - chaining expressions

(x).should.be.an('object').and.to.be.deep.equals(y);

//should - arrays
(number).should.be.an('array').that.includes(3)
chai.assert.isArray(number, 'number is not an array')

//Assert - TDD style 
const assert = chai.assert

//assert - simple comparison
assert.equal(a, b, 'a and b are not equal')

//assert - object comparison
assert.deepEqual(x, y, 'x and y are not equal')

//assert - arrays
assert.isArray(number, 'number is not an array')