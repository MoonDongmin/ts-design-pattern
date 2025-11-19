import {Beverage}   from "@/05-decorator-pattern/beverage.ts";
import {Espresso}   from "@/05-decorator-pattern/espresso.ts";
import {HouseBlend} from "@/05-decorator-pattern/house-blend.ts";
import {Mocha}      from "@/05-decorator-pattern/mocha.ts";

function main() {
  const beverage: Beverage = new Espresso();
  console.log(beverage.getDescription() + " $ " + beverage.cost());

  let beverage2: Beverage = new HouseBlend();
  beverage2 = new Mocha(beverage2);
  console.log(beverage2.getDescription() + " $ " + beverage.cost());
}

main()
