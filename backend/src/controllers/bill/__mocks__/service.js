const billService = jest.mock('./service');

let mockData;

billService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

billService.__setMockData = data => mockData = data;

module.exports = billService;
