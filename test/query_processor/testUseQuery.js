
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const useQuery = require('../../query_processor/useQuery.js')

describe('USE query', () => {
  it('should return an error', () => {
    const packet = useQuery.process('USE', 'USE')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })

  it('should return the correct error message', () => {
    const packet = useQuery.process('USE', 'USE')
    packet.error.should.equal(true)
    packet.errorMessage.should.equal('USE command requires 1 argument')
  })

  it('should return a valid packet', () => {
    const packet = useQuery.process('USE db', 'USE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('name')
    packet.component.should.equal('USE')
    packet.name.should.equal('db')
  })
})