const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const Bill = require('./models/bill.model');
const Customer = require('./models/customer.model');
const Order = require('./models/order.model');
const Product = require('./models/product.model');
const User = require('./models/user.model');
const { response } = require('express');

describe('REST API integration tests', () => {
    const insertBills = [
        {
            order: 'ObjectId(61191541ebe41f12a013d8ef)',
            amount:  10000,
            date: '2021. 08. 12.',
            status: 'stornózott'
          },
          {
            order: 'ObjectId(61191541ebe41f12a013d8f0)',
            amount:  16000,
            date: '2021. 08. 10.',
            status: 'kifizetett'
          },
          {
            order: 'ObjectId(61191541ebe41f12a013d8f1)',
            amount:  16000,
            date: '2021. 08. 13.',
            status: 'kifizetett'
          }
    ];
    const insertCustomers = [
        {
            lastName: 'Kiss',
            firstName: 'István',
            address: {
              zip: 1111,
              city: 'Budapest',
              street: 'Nagy László utca 35.'
            },
            email: 'kissi@gmail.com',
            phone: '+36303336666',
            active: true
          },
          {
            lastName: 'Héder',
            firstName: 'Elek',
            address: {
              zip: 1310,
              city: 'Budapest',
              street: 'Vértes utca 3.'
            },
            email: 'helek@gmail.com',
            phone: '+36303358766',
            active: true
          },
          {
            lastName: 'Vajas',
            firstName: 'Edina',
            address: {
              zip: 6000,
              city: 'Kecskemét',
              street: 'Kossuth utca 49.'
            },
            email: 've@gmail.com',
            phone: '+36301155879',
            active: true
          }
    ];
    const insertOrders = [
        {
            customer: 'ObjectId(61190d2aebe41f12a013d8d3)',
            product: 'ObjectId(6118fc66ebe41f12a013d883)',
            quantity: 5,
            price: 10000,
            date: '2021. 08. 11.',
            status: 'új',
            note: 'Fejlett gyökerű töveket kérek!'
          },
          {
            customer: 'ObjectId(61190d2aebe41f12a013d8d1)',
            product: 'ObjectId(6118fc66ebe41f12a013d894)',
            quantity: 8,
            price: 16000,
            date: '2021. 08. 10.',
            status: 'új',
            note: ''
          },
          {
            customer: 'ObjectId(61190d2aebe41f12a013d8d2)',
            product: 'ObjectId(6118fc66ebe41f12a013d894)',
            quantity: 8,
            price: 16000,
            date: '2021. 08. 10.',
            status: 'új',
            note: ''
          }
    ];
    const insertProducts = [
        {
            name: 'Véralma',
            category: 'alma',
            price: 2000,
            active: true,
            description: 'A véralma véletlen keresztezés „terméke”, sok változata ismert. Ágai enyhén vöröses színűek, a tavaszi levelek is rózsaszínűek. A gyümölcs húsa a héj alatt pirosas, íze édes, édes-savanykás, magas vas és antioxidáns tartalommal. Érése: szeptember közepe-vége. Porzói: öntermékeny',
            image: 'images/apple/veralma.jpg'
        },
        {
            name: 'Arabitka',
            category: 'körte',
            price: 2200,
            active: true,
            description: 'Magyar fajta, húsa fehér, bőlevű, édeskés ízű.  Gyümölcs színe, alakja: citromsárga, éretten aranysárga, széles, kerekded kúp alakú, de kissé megnyúltabb, mint az Árpával érő. Gyümölcs nagysága kicsi (40-50 g), csomóban hozza, gyümölcs húsa: fehér, bőlevű, édeskés ízű, gyengén illatos, keményebb a húsállománya és kevésbé szottyosodik, mint az Árpával érő vagy más nyári körte. Héja tetszetős, élénk, nem egészen éretten jól szállítható. Biotermesztésre ajánlott. Érési ideje: június vége – július eleje. Porzói: részben öntermékeny, Árpával érő, Diel, Kieffer, Papkörte',
            image: 'images/pear/arabitka.jpg'
        },
        {
            name: 'Árpával érő',
            category: 'körte',
            price: 2200,
            active: true,
            description: 'Gyümölcs nagysága: igen kicsi (35-45 mm), szalmasárga, sötétzöld pontokkal ritkán ellátott, a pontok eltűnők, világoszöld udvarral, igen széles, szinte kerekded körte alakú. Gyümölcs húsa: fehér, puha, bőlevű, C-vitaminban gazdag, héja vékony, puha, fénylő. Érési idő: június vége – július eleje. Porzói: Arabitka, Vilmos körte, Giffard, Mézes, Köcsög körte, Szűcsi őszi',
            image: 'images/pear/arpavalEro.jpg'
        }
    ];
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
        const { host } = config.get('database');

        // {
        //     "database": {
        //         "username": "NodeUser",
        //         "password": "y4iVtgYt6N5oeOHY",
        //         "host": "cluster0.td68u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        //     }
        // }
        

        mongoose
            // .connect(`mongodb://${host}/${databasename}`, {
            // // .connect(host, {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true
            // })
        mongoose
            .connect(`mongodb+srv://NodeUser:y4iVtgYt6N5oeOHY@cluster0.td68u.mongodb.net/vizsgaremek?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                done();
            })
            .catch(err => {
                logger.error(err);
                process.exit();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });

    // test('GET /bill', () => {
    //     return Bill.insertMany(insertBills)
    //         .then(() => supertest(app).get('/bill').expect(200))
    //         .then(response => {
    //             expect(Array.isArray(response.body)).toBeTruthy();
    //             expect(response.body.length).toEqual(insertBills.length);

    //             response.body.forEach((bill, index) => {
    //                 expect(bill.order).toBe(insertBills[index].order);
    //                 expect(bill.amount).toBe(insertBills[index].amount);
    //                 expect(bill.date).toBe(insertBills[index].date);
    //                 expect(bill.status).toBe(insertBills[index].status);
    //             });
    //         });
    // });

    // test('GET /bill/:id', () => {
    //     let firstPostId;
    //     return Bill.insertMany(insertBills)
    //         .then(people => {
    //             firstPostId = people[0]._id;
    //             return supertest(app).get(`/bill/${firstPostId}`).expect(200);
    //         })
    //         .then(response => {
    //             const bill = response.body;
    //             expect(bill.order).toBe(insertBills[0].order);
    //             expect(bill.amount).toBe(insertBills[0].amount);
    //             expect(bill.date).toBe(insertBills[0].date);
    //             expect(bill.status).toBe(insertBills[0].status);
    //         });
    // });

    // test('GET /customer', () => {
    //     return Customer.insertMany(insertCustomers)
    //         .then(() => supertest(app).get('/customer').expect(200))
    //         .then(response => {
    //             expect(Array.isArray(response.body)).toBeTruthy();
    //             expect(response.body.length).toEqual(insertCustomers.length);

    //             response.body.forEach((customer, index) => {
    //                 expect(customer.firstName).toBe(insertCustomers[index].firstName);
    //                 expect(customer.lastName).toBe(insertCustomers[index].lastName);
    //                 expect(customer.address.zip).toBe(insertCustomers[index].address.zip);
    //                 expect(customer.address.city).toBe(insertCustomers[index].address.city);
    //                 expect(customer.address.street).toBe(insertCustomers[index].address.street);
    //                 expect(customer.email).toBe(insertCustomers[index].email);
    //                 expect(customer.phone).toBe(insertCustomers[index].phone);
    //                 expect(customer.active).toBe(insertCustomers[index].active);
    //             });
    //         });
    // });

    // test('GET /customer/:id', () => {
    //     let firstPostId;
    //     return Customer.insertMany(insertCustomers)
    //         .then(people => {
    //             firstPostId = people[0]._id;
    //             return supertest(app).get(`/customer/${firstPostId}`).expect(200);
    //         })
    //         .then(response => {
    //             const customer = response.body;
    //             expect(customer.firstName).toBe(insertCustomers[0].firstName);
    //             expect(customer.lastName).toBe(insertCustomers[0].lastName);
    //             expect(customer.address.zip).toBe(insertCustomers[0].address.zip);
    //             expect(customer.address.city).toBe(insertCustomers[0].address.city);
    //             expect(customer.address.street).toBe(insertCustomers[0].address.street);
    //             expect(customer.email).toBe(insertCustomers[0].email);
    //             expect(customer.phone).toBe(insertCustomers[0].phone);
    //             expect(customer.active).toBe(insertCustomers[0].active);
    //         });
    // });

    // test('GET /order', () => {
    //     return Order.insertMany(insertOrders)
    //         .then(() => supertest(app).get('/order').expect(200))
    //         .then(response => {
    //             expect(Array.isArray(response.body)).toBeTruthy();
    //             expect(response.body.length).toEqual(insertOrders.length);

    //             response.body.forEach((order, index) => {
    //                 expect(order.customer).toBe(insertOrders[index].customer);
    //                 expect(order.product).toBe(insertOrders[index].product);
    //                 expect(order.quantity).toBe(insertOrders[index].quantity);
    //                 expect(order.price).toBe(insertOrders[index].price);
    //                 expect(order.date).toBe(insertOrders[index].date);
    //                 expect(order.status).toBe(insertOrders[index].status);
    //                 expect(order.note).toBe(insertOrders[index].note);
    //             });
    //         });
    // });
   
    // test('GET /order/:id', () => {
    //     let firstPostId;
    //     return Order.insertMany(insertOrders)
    //         .then(people => {
    //             firstPostId = people[0]._id;
    //             return supertest(app).get(`/order/${firstPostId}`).expect(200);
    //         })
    //         .then(response => {
    //             const order = response.body;
    //             expect(order.customer).toBe(insertOrders[0].customer);
    //             expect(order.product).toBe(insertOrders[0].product);
    //             expect(order.quantity).toBe(insertOrders[0].quantity);
    //             expect(order.price).toBe(insertOrders[0].price);
    //             expect(order.date).toBe(insertOrders[0].date);
    //             expect(order.status).toBe(insertOrders[0].status);
    //             expect(order.note).toBe(insertOrders[0].note);
    //         });
    // });

    // test('GET /product', () => {
    //     return Product.insertMany(insertProducts)
    //         .then(() => supertest(app).get('/product').expect(200))
    //         .then(response => {
    //             expect(Array.isArray(response.body)).toBeTruthy();
    //             expect(response.body.length).toEqual(insertProducts.length);

    //             response.body.forEach((product, index) => {
    //                 expect(product.name).toBe(insertProducts[index].name);
    //                 expect(product.category).toBe(insertProducts[index].category);
    //                 expect(product.price).toBe(insertProducts[index].price);
    //                 expect(product.active).toBe(insertProducts[index].active);
    //                 expect(product.description).toBe(insertProducts[index].description);
    //                 expect(product.image).toBe(insertProducts[index].image);
    //             });
    //         });
    // });


    // test('GET /product/:id', () => {
    //     let firstPostId;
    //     return Product.insertMany(insertProducts)
    //         .then(people => {
    //             firstPostId = people[0]._id;
    //             return supertest(app).get(`/product/${firstPostId}`).expect(200);
    //         })
    //         .then(response => {
    //             const product = response.body;
    //             expect(product.name).toBe(insertProducts[0].name);
    //             expect(product.category).toBe(insertProducts[0].category);
    //             expect(product.price).toBe(insertProducts[0].price);
    //             expect(product.active).toBe(insertProducts[0].active);
    //             expect(product.description).toBe(insertProducts[0].description);
    //             expect(product.image).toBe(insertProducts[0].image);
    //         });
    // });

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
        let firstPostId;
        return User.insertMany(insertUsers)
            .then(people => {
                firstPostId = people[0]._id;
                return supertest(app).get(`/user/${firstPostId}`).expect(200);
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
