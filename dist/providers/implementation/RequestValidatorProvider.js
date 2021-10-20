"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidatorProvider = void 0;
class RequestValidatorProvider {
    validateParams(params) {
        let validation = true;
        Object.keys(params).forEach((key) => {
            if (typeof params[key] === "undefined") {
                validation = false;
            }
        });
        return validation;
    }
}
exports.RequestValidatorProvider = RequestValidatorProvider;
