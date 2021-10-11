"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var event_service_service_1 = require("./event-service.service");
describe('EventServiceService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(event_service_service_1.EventServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=event-service.service.spec.js.map