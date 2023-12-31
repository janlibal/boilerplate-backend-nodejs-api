import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'

import createServer from '../../src/utils/server'


const request = require('supertest')(createServer);
const should = chai.should()
chai.use(chaiHttp)



describe("GET /api/v1/test",  () => {
  it('GET /api/v1/test ', (done) => {
    request
      .get('/api/v1/test')
      .expect(200)
      .expect((res: { body: { status: string, message: string } }) => expect(res.body.status, res.body.message).to.be.string)
      .end((err: any) => {
        if (err) return done(err)
        done()
      })
  })
})


/*import chai from 'chai'
import chaiHttp from 'chai-http'

import createServer from '../../src/utils/server'

const should = chai.should()
chai.use(chaiHttp)


describe('GET /api/v1/test', () => {
  it('should check test route', (done) => {
    chai.request(createServer)
    .get('/api/v1/test')
    .end((err, res) => {
      res.status.should.equal(200)
      res.type.should.equal('application/json')
      res.body.status.should.eql('success')
      res.body.should.include.keys(
        'status', 'message'
      )
      done()
    })
  })
})*/