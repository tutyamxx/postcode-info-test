const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing the API', () => {
    afterEach(() => chai.request(app).close());

    it('Should return a message that it is working with a status code of OK (200)', (done) => {
        chai.request(app).get('/').end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.a('object');
            expect(Object.keys(response.body).length).to.be.equal(2);
            expect(response.body).to.have.a.property('message').and.to.be.a('string').and.to.be.equal('Hello there!');

            done();
        });
    });

    it('Should return a JSON object described in README.md with a status code of OK (200)', (done) => {
        chai.request(app).get('/postcodeinfo/E1 6AN').end((err, response) => {
            expect(response).to.have.status(200);

            done();
        });
    });
});
