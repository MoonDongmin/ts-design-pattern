import type {AbstractProductB} from "@/04-abstract-factory-pattern/abstract-productB.ts";
import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";

export class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return "The result of the B1 collaborating with the " + result;

  }
}
