import {Beverage} from "@/05-decorator-pattern/beverage.ts";

export abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  abstract override getDescription(): string;
}
