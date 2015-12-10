
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
    let packet = createQuery.process('CREATE', 'CREATE')
    packet.error.should.equal(true)
    packet.errorMessage.should.equal('CREATE command requires 2 arguments')

    packet = createQuery.process('CREATE TABLE Test (test, foo, bar', 'CREATE')
    packet.error.should.be.equal(true)
    packet.errorMessage.should.equal('CREATE command is missing a parenthesis')

    packet = createQuery.process('CREATE TABLE Test test, foo, bar)', 'CREATE')
    packet.error.should.be.equal(true)
    packet.errorMessage.should.equal('CREATE command is missing a parenthesis')

    packet = createQuery.process('CREATE TABLE Test )test, foo, bar(', 'CREATE')
    packet.error.should.be.equal(true)
    packet.errorMessage.should.equal('CREATE command has parentheses out of order')

    packet = createQuery.process('CREATE TABLE Test ()', 'CREATE')
    packet.error.should.be.equal(true)
    packet.errorMessage.should.equal('CREATE command requires column names')

    packet = createQuery.process('CREATE TABLE Test (,,)', 'CREATE')
    packet.error.should.be.equal(true)
    packet.errorMessage.should.equal('CREATE command requires column names')
  })

  it('should return a valid packet', () => {
    let packet = createQuery.process('CREATE DATABASE db', 'CREATE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.should.include.keys('name')
    packet.component.should.equal('CREATE')
    packet.type.should.equal('DATABASE')
    packet.name.should.equal('db')

    packet = createQuery.process('CREATE TABLE Users (name, phone, age, sex)', 'CREATE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.should.include.keys('name')
    packet.should.include.keys('columns')
    packet.component.should.equal('CREATE')
    packet.type.should.equal('TABLE')
    packet.name.should.equal('Users')
    packet.columns.should.be.an('array')
    // .eql deeply compares the values...
    packet.columns.should.eql(['name', 'phone', 'age', 'sex'])
  })

  it('should be case insensitive', () => {
    const packet = createQuery.process('create database db', 'CREATE')
    packet.should.be.an('object')
    packet.should.include.keys('component')
    packet.should.include.keys('type')
    packet.should.include.keys('name')
    packet.component.should.equal('CREATE')
    packet.type.should.equal('DATABASE')
    packet.name.should.equal('db')
  })

  it('should only accept a CREATE query', () => {
    const packet = createQuery.process('BLAH this that', 'CREATE')
    packet.errorMessage.should.equal('[ERROR] invalid query for CREATE: BLAH')
  })

  it('should only accept a CREATE key', () => {
    const packet = createQuery.process('CREATE DATABASE db', 'TEST')
    packet.errorMessage.should.equal('[ERROR] invalid key for CREATE query: TEST')
  })
})