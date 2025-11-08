import type {AbstractFactory} from "@/04-abstract-factory-pattern/interface/abstract-factory.ts";
import {ConcreteFactory2}     from "@/04-abstract-factory-pattern/concrete-factory2.ts";

function main(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

main(new ConcreteFactory2());
