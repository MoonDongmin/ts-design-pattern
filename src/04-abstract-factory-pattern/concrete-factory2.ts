import type {AbstractFactory}  from "@/04-abstract-factory-pattern/interface/abstract-factory.ts";
import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";
import type {AbstractProductB} from "@/04-abstract-factory-pattern/abstract-productB.ts";
import {ConcreteProductA2}     from "@/04-abstract-factory-pattern/concrete-productA2.ts";
import {ConcreteProductB2}     from "@/04-abstract-factory-pattern/concrete-productB2.ts";

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
