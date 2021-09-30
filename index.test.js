const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const should = chai.should()
const server = require('../app');

chai.use(chaiHttp)
describe('Bosh sahifani api/movies ni testdan otqazish', () => {
    it("Get orqali" , (done) =>{
        chai.request(server)
        .get("/api/movies")
        .end((err , res) =>{
            res.should.have.status(200)
            done()
        })
    })
});

























