
/* jshint esnext: true, asi: true */

const should = require('chai').should()
const useQuery = require('../../query_processor/useQuery.js')

describe('USE query', () => {
  it('should return an error', () => {
    let packet = useQuery.process('USE')

    packet.should.be.an('object')
    packet.should.include.keys('error')
    packet.should.include.keys('errorMessage')
  })
})