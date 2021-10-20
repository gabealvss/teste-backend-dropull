export interface IValidatorProvider {
  validateParams(params: object): boolean;
}
