const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const logger = require('./config/logger');
const Bill = require('./models/bill.model');
const Customer = require('./models/customer.model');
const Order = require('./models/order.model');
const Product = require('./models/product.model');
const User = require('./models/user.model');
const { response } = require('express');

describe('REST API integration tests', () => {

    const insertUsers = [
        {
            id: '61197f10ebe41f12a013d961',
            firstName: 'Magyar',
            lastName: 'István',
            email: 'magyar@gmail.com',
            active: true,
            password: 'magyar',
            role: 3
          },
        {
            id: '61197f10ebe41f12a013d962',
            firstName: 'Vitéz',
            lastName: 'Viola',
            email: 'vitez@gmail.com',
            active: true,
            password: 'vitez',
            role: 3
          },
        {
            id: '61197f10ebe41f12a013d963',
            firstName: 'Kérő',
            lastName: 'Károly',
            email: 'kero@gmail.com',
            active: true,
            password: 'kero',
            role: 2
          }
    ];

    beforeEach(done => {
        // const { username, password, host } = config.get('database');
        // const { host } = config.get('database');

        // {
        //     "database": {
        //         "username": "NodeUser",
        //         "password": "y4iVtgYt6N5oeOHY",
        //         "host": "cluster0.td68u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        //     }
        // }
        

        const { databasename, host } = config.get('database');
        mongoose
            .connect(`mongodb://${host}/${databasename}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        // mongoose
        //     .connect(`mongodb+srv://NodeUser:y4iVtgYt6N5oeOHY@cluster0.td68u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        //         useNewUrlParser: true,
        //         useUnifiedTopology: true
        //     })
            .then(() => {
                done();
            })
            .catch(err => {
                logger.error(err);
                return done();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });

    test('GET /user', () => {
        return User.insertMany(insertUsers)
            .then(() => supertest(app).get('/user').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertUsers.length);

                response.body.forEach((user, index) => {
                    expect(user.firstName).toBe(insertUsers[index].firstName);
                    expect(user.lastName).toBe(insertUsers[index].lastName);
                    expect(user.email).toBe(insertUsers[index].email);
                    expect(user.active).toBe(insertUsers[index].active);
                    expect(user.password).toBe(insertUsers[index].password);
                    expect(user.role).toBe(insertUsers[index].role);
                });
            });
    });

    test('GET /user/:id', () => {
        let firstId;
        return User.insertMany(insertUsers)
            .then(response => {
                firstId = response[0]._id;
                return supertest(app).get(`/user/${firstId}`).expect(200);
            })
            .then(response => {
                const user = response.body;
                expect(user.firstName).toBe(insertUsers[0].firstName);
                expect(user.lastName).toBe(insertUsers[0].lastName);
                expect(user.email).toBe(insertUsers[0].email);
                expect(user.active).toBe(insertUsers[0].active);
                expect(user.password).toBe(insertUsers[0].password);
                expect(user.role).toBe(insertUsers[0].role);
            });
    });
});
