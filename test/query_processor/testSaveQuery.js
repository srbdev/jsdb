
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const saveQuery = require('../../query_processor/saveQuery.js')

describe('SAVE query', () => {
  it('should return an error', () => {
    const packet = saveQuery.process('SAVE', 'SAVE')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })

  it('should return the correct error message', () => {
    const packet = saveQuery.process('SAVE', 'SAVE')
    packet.error.should.equal(true)
    packet.errorMessage.should.equal('SAVE command requires 1 argument')
  })

  it('should return a valid packet', () => {
    const packet = saveQuery.process('SAVE db', 'SAVE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('name')
    packet.component.should.equal('SAVE')
    packet.name.should.equal('db')
  })

  it('should be case insensitive', () => {
    const packet = saveQuery.process('save db', 'SAVE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('name')
    packet.component.should.equal('SAVE')
    packet.name.should.equal('db')
  })

  it('should only accept a SAVE query', () => {
    const packet = saveQuery.process('BLAH this', 'SAVE')
    packet.errorMessage.should.equal('[ERROR] invalid query for SAVE: BLAH')
  })

  it('should only accept a SAVE key', () => {
    const packet = saveQuery.process('SAVE db', 'TEST')
    packet.errorMessage.should.equal('[ERROR] invalid key for SAVE query: TEST')
  })
})