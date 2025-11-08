import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";

export interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
