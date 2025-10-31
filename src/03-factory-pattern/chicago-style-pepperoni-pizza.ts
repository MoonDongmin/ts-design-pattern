import {Pizza} from "@/03-factory-pattern/pizza.ts";

export class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "시카고 스타일 페퍼로니 피자";
    this.dough = "아주 두꺼운 크러스트 도우";
    this.sauce = "플럼토마토 소스";

    this.toppings.push("잘게 조각낸 모짜렐라 치즈");
    this.toppings.push("슬라이스 페퍼로니");
  }

  override cut() {
    console.log("네모난 모양으로 피자 자르기");
  }
}