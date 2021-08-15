const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const productController = require('./controller');
const productService = require('./service');

jest.mock('./service');

describe("product controler", () => {
    const mockData = [{
        "id": 1,
        "name": "Serres Olivér",
        "category": "körte",
        "price": 2200,
        "active": true,
        "description": "Francia fajta, gyümölcs nagysága: közepes vagy kicsi (100-230 g) Gyümölcs színe, alakja: éretten sárgászöld, hálózatosan rozsdamázas, gömbölyű vagy lapított gömb, a csésze körül bordás. Gyümölcs húsa sárgásfehér, olvadó, bőlevű, optimális termőhelyen nagyon jóízű, finoman savas, fűszeres, de száraz helyen apró és kövecses, héja kemény, vastag .Biotermesztésre ajánlott. Érési ideje október eleje. Porzói: Vilmos, Hardenpont, Téli esperes, Bosc kobak, Avranhesi jó Lujza, Zöld Magdolna, Téli Esperes, Társulati esperes, Kieffer, Erdei vaj, Diel, Arabitka.",
        "image": "images/pear/serresOliver.jpg"
    },
    {
        "id": 2,
        "name": "Téli esperes",
        "category": "körte",
        "price": 2200,
        "active": true,
        "description": "Belgiumban egy kolostor kertjében találták, gyümölcse középnagy vagy nagy (150-230 g), sárgászöld, szembetűnő paraszemölcsökkel, hengeres, széles, vaskos, szabálytalan körte, felülete hullámos. Gyümölcs húsa vajfehér, olvadó, illatos, édes, enyhén savanykás, kellemes fűszeres ízű, a magház körül gyakran kövecses. Érési idő: október közepe. Porzói: Vilmos, Zöld Magdolna, Társulati Esperes, Hardenpont, Esperen bergamottja, Nemes Krasszán, Serres Olivér, Papkörte, Kieffer, Diel, Arabitka",
        "image": "images/pear/teliEsperes.jpg"
    },
    {
        "id": 3,
        "name": "Vilmos",
        "category": "körte",
        "price": 2200,
        "active": true,
        "description": "Angliai eredetű véletlen magonc, 1779-ben már ismert fajta. Érési ideje augusztus vége – szeptember eleje, gyümölcse középnagy vagy nagy (160-220 g), éretten szép sárga, napos oldalon enyhén pirosas bemosódással, csaknem szabályos körte alakú. Gyümölcs húsa fehér, olvadó, bőlevű, illatos, édes-savanykás, muskotályos ízű, héja vékony, sima tapintású, felülete enyhén hullámos, apró barnás paraszemölcsökkel. Biotermesztésre ajánlott. Porzói: Pachams Trimph, Conference, Clapp kedveltje, Dr. Guyot Gyula, Hardenpont, Bosc kobakja, Zöld Magdolna, Társulati esperes, Téli esperes, Serres Olivér, Papkörte, Kieffer, Esperen bergamottja, Avranchesi jó Lújza",
        "image": "images/pear/vilmos.jpg"
    },
    {
        "id": 4,
        "name": "Bigarreau Burlat",
        "category": "cseresznye",
        "price": 2500,
        "active": true,
        "description": "Termőképessége közepes, kedvező évjáratokban nagy, gyümölcse átlag 22-24 mm jó víz- és tápanyagellátottság esetén 24-26 mm átmérőjű. Átlagtömege 5-6 gramm. Széles tompa kúp alakú, a hasi varratnál lapított, enyhén kiemelkedő bordával, melynek vonalában a gyümölcs színe világosabb piros (világos sáv). Színe a fogyasztási érettség kezdetén piros, majd az érés előrehaladtával sötét bordóvá válik, héja fényes, vékony. Húsa tömött, közepesen kemény, ropogósba hajló. Íze kellemesen édes-savanykás. Kiváló minőségű étkezési gyümölcs. Kocsánya rövid vagy középhosszú. Magja kicsi, vagy közepesen nagy, félig- esetenként teljesen magvaváló. Érési idejénél fogva a cseresznyelégy nem károsítja. Május végén-, június elején érik. Porzói:  Germersdorfi, Samba, Merchant, Lapins, Münchenbergi korai, Szomolyai fekete, Vera, Van, Valerij Cskalov, Stella",
        "image": "images/cherry/bigarreauBurlat.jpg"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        productService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const PRODUCT_ID = 1;

        const request = mockRequest({
            params: {
                id: PRODUCT_ID
            }
        });

        return productController.findOne(request, response, nextFunction)
            .then( () => {
                expect(productService.findOne).toBeCalledWith(PRODUCT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === PRODUCT_ID)
                );                
            })
    });
});