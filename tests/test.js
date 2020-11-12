const assert = require('assert')
const request = require('supertest')
const app = require('../index')


describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond with Hello!', (done) => {
        request(app).get('/').expect('Hello!',done)
    })

})

describe('GET "/items"', () => {
    it('respond with /items', (done) => {
        let want= '[{"id":60160032,"name":"chanakan ngamsiri"},{"id":60160219,"name":"kanyaruk"}]'
        request(app).get('/items').expect(want,done)
    })
})