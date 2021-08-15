const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const billController = require('./controller');
const billService = require('./service');

jest.mock('./service');

describe("bill controler", () => {
    const mockData = [{
        "id": 1,
        "order": "ObjectId(61191541ebe41f12a013d8f2)",
        "amount": 6000,
        "date": "2021. 08. 11.",
        "status": "kifizetett"
      },
      {
        "id": 2,
        "order": "ObjectId(61191541ebe41f12a013d8f3)",
        "amount": 9000,
        "date": "2021. 08. 11.",
        "status": "stornózott"
      },
      {
        "id": 3,
        "order": "ObjectId(61191541ebe41f12a013d8ef)",
        "amount": 10000,
        "date": "2021. 08. 12.",
        "status": "stornózott"
      },
      {
        "id": 4,
        "order": "ObjectId(61191541ebe41f12a013d8f0)",
        "amount": 16000,
        "date": "2021. 08. 10.",
        "status": "kifizetett"
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        billService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const BILL_ID = 1;

        const request = mockRequest({
            params: {
                id: BILL_ID
            }
        });

        return billController.findOne(request, response, nextFunction)
            .then( () => {
                expect(billService.findOne).toBeCalledWith(BILL_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === BILL_ID)
                );                
            })
    });
});