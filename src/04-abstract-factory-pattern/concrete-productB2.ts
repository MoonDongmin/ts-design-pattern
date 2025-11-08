import type {AbstractProductB} from "@/04-abstract-factory-pattern/abstract-productB.ts";
import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";

export class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B2.";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return "The result of the B2 collaborating with the " + result;

  }
}
