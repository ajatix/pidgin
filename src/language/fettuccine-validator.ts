import { ValidationAcceptor, ValidationChecks } from "langium";
import { FettuccineServices } from "./fettuccine-module";
import { FettuccineAstType, Model } from "./generated/ast";

export function registerValidationChecks(services: FettuccineServices) {
  const registry = services.validation.ValidationRegistry;
  const validator = services.validation.FettuccineValidator;
  const checks: ValidationChecks<FettuccineAstType> = {
    Model: validator.checkModel,
  };
  registry.register(checks, validator);
}

export class FettuccineValidator {
  checkModel(model: Model, accept: ValidationAcceptor): void {}
}
