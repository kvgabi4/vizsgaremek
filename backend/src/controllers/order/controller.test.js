const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const orderController = require('./controller');
const orderService = require('./service');

jest.mock('./service');

describe("order controler", () => {
    const mockData = [{
        "id": 1,
        "customer": "ObjectId(61190d2aebe41f12a013d8d3)",
        "product": "ObjectId(6118fc66ebe41f12a013d883)",
        "quantity": 5,
        "price": 10000,
        "date": "2021. 08. 11.",
        "status": "új",
        "note": "Fejlett gyökerű töveket kérek!"
      },
      {
        "id": 2,
        "customer": "ObjectId(61190d2aebe41f12a013d8d1)",
        "product": "ObjectId(6118fc66ebe41f12a013d894)",
        "quantity": 8,
        "price": 16000,
        "date": "2021. 08. 10.",
        "status": "új",
        "note": ""
      },
      {
        "id": 3,
        "customer": "ObjectId(61190d2aebe41f12a013d8d2)",
        "product": "ObjectId(6118fc66ebe41f12a013d894)",
        "quantity": 8,
        "price": 16000,
        "date": "2021. 08. 10.",
        "status": "új",
        "note": ""
      },
      {
        "id": 4,
        "customer": "ObjectId(61190d2aebe41f12a013d8d4)",
        "product": "ObjectId(6118fc66ebe41f12a013d8c5)",
        "quantity": 3,
        "price": 6000,
        "date": "2021. 08. 10.",
        "status": "új",
        "note": ""
      },
      {
        "id": 5,
        "customer": "ObjectId(61190d2aebe41f12a013d8d8)",
        "product": "ObjectId(6118fc66ebe41f12a013d8c0)",
        "quantity": 3,
        "price": 9000,
        "date": "2021. 08. 10.",
        "status": "új",
        "note": ""
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        orderService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ORDER_ID = 1;

        const request = mockRequest({
            params: {
                id: ORDER_ID
            }
        });

        return orderController.findOne(request, response, nextFunction)
            .then( () => {
                expect(orderService.findOne).toBeCalledWith(ORDER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ORDER_ID)
                );                
            })
    });
});