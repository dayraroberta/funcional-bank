const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Index', () => {
    describe('/GET para testar se a API está running', () => {
        it('Testando server', (done) => {
            chai.request('http://localhost:3000')
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();  
        })
    })
});

describe('Conta', () => {
    describe('/POST Conta bancária do usuário', () => {
        it('Testando criar usuário e conta bancária', (done) => {
            const user = {
                name: 'José',
                lastname: 'da Silva',
                cpf: '4536535530',
                birthday: '1968-05-12',
                password: '1234',
            }
            chai.request('http://localhost:3000')
                .post('/account/criar')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    describe('/POST Conta bancária do usuário', () => {
        it('Testando pedir o campo name obrigatório', (done) => {
            const user = {
                name: '',
                lastname: 'da Silva',
                cpf: '4536535530',
                birthday: '1968-05-12',
                password: '1234',
            }
            chai.request('http://localhost:3000')
                .post('/account/criar')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(422);
                });
            done();
        });
    });
    describe('/POST Conta bancária do usuário', () => {
        it('Testando pedir o campo lastname obrigatório', (done) => {
            const user = {
                name: 'João',
                lastname: '',
                cpf: '4536535530',
                birthday: '1968-05-12',
                password: '1234',
            }
            chai.request('http://localhost:3000')
                .post('/account/criar')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(422);
                });
            done();
        });
    });
    describe('/POST Conta bancária do usuário', () => {
        it('Testando pedir o campo cpf obrigatório', (done) => {
            const user = {
                name: 'João',
                lastname: 'Silva',
                cpf: '',
                birthday: '1968-05-12',
                password: '1234',
            }
            chai.request('http://localhost:3000')
                .post('/account/criar')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(422);
                });
            done();
        });
    });
    describe('/POST Conta bancária do usuário', () => {
        it('Testando pedir o campo birthday obrigatório', (done) => {
            const user = {
                name: 'João',
                lastname: 'Silva',
                cpf: '33556615563',
                birthday: '',
                password: '1234',
            }
            chai.request('http://localhost:3000')
                .post('/account/criar')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(422);
                });
            done();
        });
    });
    describe('/POST Conta bancária do usuário', () => {
        it('Testando pedir o campo password obrigatório', (done) => {
            const user = {
                name: 'João',
                lastname: 'Silva',
                cpf: '33556615563',
                birthday: '',
                password: '',
            }
            chai.request('http://localhost:3000')
                .post('/account/criar')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(422);
                });
            done();
        });
    });
});