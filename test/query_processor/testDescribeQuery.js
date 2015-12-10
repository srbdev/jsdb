
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

  it('should be case insensitive', () => {
    const packet = describeQuery.process('describe database db', 'DESCRIBE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.should.include.keys('name')
    packet.component.should.equal('DESCRIBE')
    packet.type.should.equal('DATABASE')
    packet.name.should.equal('db')
  })

  it('should only accept a DESCRIBE query', () => {
    const packet = describeQuery.process('BLAH this that', 'DESCRIBE')
    packet.errorMessage.should.equal('[ERROR] invalid query for DESCRIBE: BLAH')
  })

  it('should only accept a DESCRIBE key', () => {
    const packet = describeQuery.process('DESCRIBE DATABASE db', 'TEST')
    packet.errorMessage.should.equal('[ERROR] invalid key for DESCRIBE query: TEST')
  })
})