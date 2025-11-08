import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";
import type {AbstractProductB} from "@/04-abstract-factory-pattern/abstract-productB.ts";

export interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}
