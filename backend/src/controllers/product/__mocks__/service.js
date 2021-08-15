const productService = jest.mock('./service');

let mockData;

productService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

productService.__setMockData = data => mockData = data;

module.exports = productService;
