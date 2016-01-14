const should = require('chai').should()
const jsdb = require('../../jsdb.js')

describe('create()', () => {
  it('should create a database', () => {
    const db = jsdb.create('test')

    db.should.be.an('object')
    db.should.include.keys('name')
    db.should.include.keys('tables')
    db.should.include.keys('_createdAt')
    db.should.include.keys('_modified')
    db.should.include.keys('_path')

    db.name.should.equal('test')
    db.tables.should.be.an('object')
    db._modified.should.equal(true)
    should.not.exist(db._path)

    const ram = jsdb.ram()

    ram.should.be.an('object')
    ram.should.include.keys('databases')
    ram.should.include.keys('currentDatabase')
    ram.databases.should.include.keys('test')
  })
})