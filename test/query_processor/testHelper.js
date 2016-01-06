const should = require('chai').should()
const helper = require('../../query_processor/_helper.js')

describe('Query helper', () => {
  it('should return a custom error message', () => {
    const e = helper.error('custom message')
    e.should.be.an('object')
    e.should.include.keys('error')
    e.should.include.keys('errorMessage')
    e.error.should.be.equal(true)
    e.errorMessage.should.equal('custom message')
  })

  it('should return a syntax error message', () => {
    const e = helper.syntaxError()
    e.should.be.an('object')
    e.should.include.keys('error')
    e.should.include.keys('errorMessage')
    e.error.should.be.equal(true)
    e.errorMessage.should.equal('[ERROR] syntax error')
  })
})