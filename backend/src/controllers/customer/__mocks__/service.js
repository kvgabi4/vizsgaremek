const customerService = jest.mock('./service');

let mockData;

customerService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

customerService.__setMockData = data => mockData = data;

module.exports = customerService;
