const should = require('chai').should()
const insertQuery = require('../../query_processor/insertQuery.js')

describe('INSERT query', () => {
  it('should return an error', () => {

  })

  it('should return a syntax error', () => {

  })

  it('should return a valid packet', () => {
    let packet = insertQuery.process('INSERT INTO Table (columnOne,columnTwo,columnThree) VALUES(1,2,3)', 'INSERT')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('table')
    packet.should.include.keys('columns')
    packet.should.include.keys('values')
    packet.table.should.equal('Table')
    packet.columns.should.be.an('array')
    packet.columns.length.should.equal(3)
    packet.columns.should.eql(['columnOne', 'columnTwo', 'columnThree'])
    packet.values.should.be.an('array')
    packet.values.length.should.equal(3)
    packet.values.should.eql(['1', '2', '3' ])
  })

  it('should only accept a INSERT query', () => {
    const packet = insertQuery.process('BLAH this that', 'INSERT')
    packet.errorMessage.should.equal('[ERROR] invalid query for INSERT: BLAH')
  })

  it('should only accept a INSERT key', () => {
    const packet = insertQuery.process('INSERT INTO Table (column) VALUES(1)', 'TEST')
    packet.errorMessage.should.equal('[ERROR] invalid key for INSERT query: TEST')
  })
})