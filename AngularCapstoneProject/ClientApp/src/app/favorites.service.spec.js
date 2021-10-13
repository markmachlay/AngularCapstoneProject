"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var favorites_service_1 = require("./favorites.service");
describe('FavoritesService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(favorites_service_1.FavoritesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=favorites.service.spec.js.map