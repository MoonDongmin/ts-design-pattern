import {Beverage} from "@/05-decorator-pattern/beverage.ts";

export class HouseBlend extends Beverage {

  constructor() {
    super();
    this.description = "하우스 블렌드 커피";
  }

  public override cost(): number {
    return .89;
  }
}
