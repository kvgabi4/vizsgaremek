const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const customerController = require('./controller');
const customerService = require('./service');

jest.mock('./service');

describe("customer controler", () => {
    const mockData = [{
        "id": 1,
        "lastName": "Kiss",
        "firstName": "István",
        "address": {
          "zip": 1111,
          "city": "Budapest",
          "street": "Nagy László utca 35."
        },
        "email": "kissi@gmail.com",
        "phone": "+36303336666",
        "active": true
      },
      {
        "id": 2,
        "lastName": "Héder",
        "firstName": "Elek",
        "address": {
          "zip": 1310,
          "city": "Budapest",
          "street": "Vértes utca 3."
        },
        "email": "helek@gmail.com",
        "phone": "+36303358766",
        "active": true
      },
      {
        "id": 3,
        "lastName": "Vajas",
        "firstName": "Edina",
        "address": {
          "zip": 6000,
          "city": "Kecskemét",
          "street": "Kossuth utca 49."
        },
        "email": "ve@gmail.com",
        "phone": "+36301155879",
        "active": true
      },
      {
        "id": 4,
        "lastName": "Péter",
        "firstName": "Olga",
        "address": {
          "zip": 6000,
          "city": "Kecskemét",
          "street": "Torma utca 1."
        },
        "email": "polga@gmail.com",
        "phone": "+36704568876",
        "active": true
      },
      {
        "id": 5,
        "lastName": "Kocsis",
        "firstName": "Viola",
        "address": {
          "zip": 5600,
          "city": "Békéscsaba",
          "street": "Orosházi út 15."
        },
        "email": "kv5@gmail.com",
        "phone": "+36704611769",
        "active": true
      },
      {
        "id": 6,
        "lastName": "Kovacsics",
        "firstName": "Jenő",
        "address": {
          "zip": 6726,
          "city": "Szeged",
          "street": "Hársfa  út 7."
        },
        "email": "kj701203@gmail.com",
        "phone": "+36701234567",
        "active": true
      },
      {
        "id": 7,
        "lastName": "Vigh",
        "firstName": "Viola",
        "address": {
          "zip": 6726,
          "city": "Szeged",
          "street": "Piroska  út 72."
        },
        "email": "vv@gmail.com",
        "phone": "+36701234666",
        "active": true
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        customerService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const CUSTOMER_ID = 1;

        const request = mockRequest({
            params: {
                id: CUSTOMER_ID
            }
        });

        return customerController.findOne(request, response, nextFunction)
            .then( () => {
                expect(customerService.findOne).toBeCalledWith(CUSTOMER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === CUSTOMER_ID)
                );                
            })
    });
});