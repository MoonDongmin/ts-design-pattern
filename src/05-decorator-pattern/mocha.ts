import {CondimentDecorator} from "@/05-decorator-pattern/condiment-decorator.ts";
import type {Beverage}      from "@/05-decorator-pattern/beverage.ts";

export class Mocha extends CondimentDecorator {

  constructor(beverage: Beverage) {
    super(beverage);
    this.beverage = beverage;
  }

  public override getDescription(): string {
    return this.beverage.getDescription() + ", 모카";
  }

  public override cost(): number {
    return this.beverage.cost() + .20;
  }
}
