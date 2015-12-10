
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const create = require('../../database/createComponent.js')

let ram = null

describe('CREATE component', () => {
  beforeEach(() => {
    ram = { databases: {}, currentDatabase: null }
  })

  it('should create a database and a table', () => {
    const qd = { component: 'CREATE', type: 'DATABASE', name: 'db' }
    let msg = create.run(ram, qd)
    // forcing the use of the new db
    ram.currentDatabase = ram.databases.db

    msg.should.equal('Database db successfully created!')
    ram.databases.should.include.keys('db')
    ram.currentDatabase.name.should.equal('db')
    ram.databases.db.should.be.an('object')

    const qt = { component: 'CREATE', type: 'TABLE', name: 'Users', columns: [ 'name', 'phone', 'age', 'sex' ] }
    msg = create.run(ram, qt);

    msg.should.equal('Table Users successfully created for database db')
    ram.currentDatabase.tables.should.include.keys('Users')
    ram.databases.db.tables.should.include.keys('Users')

    const table = ram.currentDatabase.tables.Users
    table.name.should.equal('Users')
    table.columns.should.eql(['_id', 'name', 'phone', 'age', 'sex'])
    table.data.length.should.equal(0)
  })
})