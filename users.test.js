import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should();
chai.use(chaiHttp);

describe('Users', () => {
  describe('/GET users', () => {
    it('it should GET all users', async () => {
      const res = await chai.request(server).get('/users');
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message').eql('Users listing');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
    });
  });
});