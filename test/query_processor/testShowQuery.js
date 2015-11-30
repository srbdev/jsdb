
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const showQuery = require('../../query_processor/showQuery.js')

describe('SHOW query', () => {
  it('should return an error', () => {
    const packet = showQuery.process('SHOW', 'SHOW')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })

  it('should return the correct error message', () => {
    let packet = showQuery.process('SHOW', 'SHOW')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
    packet.errorMessage.should.be.a('string')
    packet.errorMessage.should.equal('SHOW command requires 1 argument')

    packet = showQuery.process('SHOW pikachus', 'SHOW')
    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
    packet.errorMessage.should.be.a('string')
    packet.errorMessage.should.equal('Invalid type \'PIKACHUS\' for the SHOW command')
  })

  it('should return a valid packet', () => {
    let packet = showQuery.process('SHOW TABLES', 'SHOW')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.component.should.equal('SHOW')
    packet.type.should.equal('TABLES')

    packet = showQuery.process('SHOW DATABASES', 'SHOW')
    packet.component.should.equal('SHOW')
    packet.type.should.equal('DATABASES')

    packet = showQuery.process('SHOW tables', 'SHOW')
    packet.component.should.equal('SHOW')
    packet.type.should.equal('TABLES')

    packet = showQuery.process('SHOW databases', 'SHOW')
    packet.component.should.equal('SHOW')
    packet.type.should.equal('DATABASES')
  })

  it('should only accept a SHOW query', () => {
    const packet = showQuery.process('BLAH this', 'SHOW')
    packet.errorMessage.should.equal('[ERROR] invalid query for SHOW: BLAH')
  })

  it('should only accept a SHOW key', () => {
    const packet = showQuery.process('SHOW TABLES', 'TEST')
    packet.errorMessage.should.equal('[ERROR] invalid key for SHOW query: TEST')
  })
})