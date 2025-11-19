import {Beverage} from "@/05-decorator-pattern/beverage.ts";

export class Espresso extends Beverage {

  constructor() {
    super();
    this.description = "에스프레소";
  }

  public override cost(): number {
    return 1.99;
  }
}
