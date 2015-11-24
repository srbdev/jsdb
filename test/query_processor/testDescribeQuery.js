
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const describeQuery = require('../../query_processor/describeQuery.js')

describe('DESCRIBE query', () => {
  it('should return an error', () => {
    const packet = describeQuery.process('DESCRIBE', 'DESCRIBE')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })

  it('should return the correct error message', () => {
    const packet = describeQuery.process('DESCRIBE', 'DESCRIBE')
    packet.error.should.equal(true)
    packet.errorMessage.should.equal('DESCRIBE command requires 2 arguments')
  })

  it('should return a valid packet', () => {
    const packet = describeQuery.process('DESCRIBE DATABASE db', 'DESCRIBE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.should.include.keys('name')
    packet.component.should.equal('DESCRIBE')
    packet.type.should.equal('DATABASE')
    packet.name.should.equal('db')
  })
})