import type { ValidationAcceptor, ValidationChecks } from "langium";
import type { FettuccineAstType, Person } from "./generated/ast.js";
import type { FettuccineServices } from "./fettuccine-module.js";

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: FettuccineServices) {
  const registry = services.validation.ValidationRegistry;
  const validator = services.validation.FettuccineValidator;
  const checks: ValidationChecks<FettuccineAstType> = {
    Person: validator.checkPersonStartsWithCapital,
  };
  registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class FettuccineValidator {
  checkPersonStartsWithCapital(
    person: Person,
    accept: ValidationAcceptor,
  ): void {
    if (person.name) {
      const firstChar = person.name.substring(0, 1);
      if (firstChar.toUpperCase() !== firstChar) {
        accept("warning", "Person name should start with a capital.", {
          node: person,
          property: "name",
        });
      }
    }
  }
}
