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
      console.log('ENV', process.env.NODE_ENV)

      if (process.env.NODE_ENV === 'development') {
        console.log('DEVELOPMENT NODE')
      }
    })
    it('should do something else', () => {
      assert.deepEqual({ name: 'joe' }, { name: 'joe' })
    })
  })
})