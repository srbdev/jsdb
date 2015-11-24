
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const loadQuery = require('../../query_processor/loadQuery.js')

describe('LOAD query', () => {
  it('should return an error', () => {
    const packet = loadQuery.process('LOAD', 'LOAD')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })

  it('should return the correct error message', () => {
    const packet = loadQuery.process('LOAD', 'LOAD')
    packet.error.should.equal(true)
    packet.errorMessage.should.equal('LOAD command requires 1 argument')
  })

  it('should return a valid packet', () => {
    const packet = loadQuery.process('LOAD /home/srbdev/db.jsdb', 'LOAD')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('path')
    packet.component.should.equal('LOAD')
    packet.path.should.equal('/home/srbdev/db.jsdb')
  })
})