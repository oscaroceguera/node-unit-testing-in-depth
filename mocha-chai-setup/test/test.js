const assert = require('assert')

describe('file to be tested', () => {
  context('function to be tested', () => {
    before(() => {
      console.log('====== before')
    })
    after(() => {
      console.log('====== after')
    })
    beforeEach(() => {
      console.log('----BeforeEach')
    })
    afterEach(() => {
      console.log('---AfterEach')
    })
    it('should do something', () => {
      assert.equal(1, 1)
    })
    it('shhould do something else', () => {
      assert.deepEqual({ name: 'joe' }, { name: 'joe'})
    })
    it('this is a pending test')
  })
})