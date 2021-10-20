import { IValidatorProvider } from "../IValidatorProvider";
import { RequestValidatorProvider } from "./RequestValidatorProvider";

let requestValidator: IValidatorProvider;

describe("test the Request Validator using a simulated request object", () => {
  beforeEach(() => {
    requestValidator = new RequestValidatorProvider();
  });

  it("should return false for an incomplete request object", () => {
    interface requestMock {
      var1: string;
      var2?: string;
    }

    const request: requestMock = {
      var1: "var1",
    };

    const { var1, var2 } = request;

    expect(requestValidator.validateParams({ var1, var2 })).toBeFalsy();
  });

  it("should return true for an complete request object", () => {
    interface requestMock {
      var1: string;
      var2?: string;
    }

    const request: requestMock = {
      var1: "var1",
      var2: "var2",
    };

    const { var1, var2 } = request;

    expect(requestValidator.validateParams({ var1, var2 })).toBeTruthy();
  });
});
