"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestValidatorProvider_1 = require("./RequestValidatorProvider");
let requestValidator;
describe("test the Request Validator using a simulated request object", () => {
    beforeEach(() => {
        requestValidator = new RequestValidatorProvider_1.RequestValidatorProvider();
    });
    it("should return false for an incomplete request object", () => {
        const request = {
            var1: "var1",
        };
        const { var1, var2 } = request;
        expect(requestValidator.validateParams({ var1, var2 })).toBeFalsy();
    });
    it("should return true for an complete request object", () => {
        const request = {
            var1: "var1",
            var2: "var2",
        };
        const { var1, var2 } = request;
        expect(requestValidator.validateParams({ var1, var2 })).toBeTruthy();
    });
});
