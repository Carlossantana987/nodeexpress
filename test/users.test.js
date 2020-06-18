import {expect, server, BASE_URL } from './setup'


describe('users', () => {
    it('get users', done => {
        server
            .get(`${BASE_URL}/users`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.users).to.be.instanceOf(Array);
                res.body.users.forEach(m => {
                    expect(m).to.have.property('firstName');
                    expect(m).to.have.property('lastName');
                });
                done();
            })
    })