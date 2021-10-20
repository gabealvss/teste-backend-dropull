import { IValidatorProvider } from "../IValidatorProvider";

class RequestValidatorProvider implements IValidatorProvider {
  validateParams(params: object): boolean {
    let validation = true;

    Object.keys(params).forEach((key) => {
      if (typeof params[key] === "undefined") {
        validation = false;
      }
    });

    return validation;
  }
}

export { RequestValidatorProvider };
