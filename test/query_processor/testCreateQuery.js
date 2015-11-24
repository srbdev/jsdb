
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const createQuery = require('../../query_processor/createQuery.js')

describe('CREATE query', () => {
  it('should return an error', () => {
    const packet = createQuery.process('CREATE', 'CREATE')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })

  it('should return the correct error message', () => {
    const packet = createQuery.process('CREATE', 'CREATE')
    packet.error.should.equal(true)
    packet.errorMessage.should.equal('CREATE command requires 2 arguments')
  })

  it('should return a valid packet', () => {
    const packet = createQuery.process('CREATE DATABASE db', 'CREATE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.should.include.keys('name')
    packet.component.should.equal('CREATE')
    packet.type.should.equal('DATABASE')
    packet.name.should.equal('db')
  })
})