import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";

export class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}
