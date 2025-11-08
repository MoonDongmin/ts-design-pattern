import type {AbstractFactory}  from "@/04-abstract-factory-pattern/interface/abstract-factory.ts";
import type {AbstractProductA} from "@/04-abstract-factory-pattern/abstract-productA.ts";
import type {AbstractProductB} from "@/04-abstract-factory-pattern/abstract-productB.ts";
import {ConcreteProductB1}     from "@/04-abstract-factory-pattern/concrete-productB1.ts";
import {ConcreteProductA1}     from "@/04-abstract-factory-pattern/concrete-productA1.ts";


export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }

}
