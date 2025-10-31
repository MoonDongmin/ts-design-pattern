import {NYPizzaStore}      from "@/03-factory-pattern/ny-pizza-store.ts";
import {ChicagoPizzaStore} from "@/03-factory-pattern/chicago-pizza-store.ts";
import type {Pizza}        from "@/03-factory-pattern/pizza.ts";

function main() {
  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  let pizza: Pizza;

  console.log("=== 에단이 뉴욕 스타일 치즈 피자 주문 ===");
  pizza = nyStore.orderPizza("cheese");
  console.log(`에단이 주문한 ${pizza.getName()}\n`);

  console.log("=== 조엘이 시카고 스타일 치즈 피자 주문 ===");
  pizza = chicagoStore.orderPizza("cheese");
  console.log(`조엘이 주문한 ${pizza.getName()}\n`);

  console.log("=== 에단이 뉴욕 스타일 페퍼로니 피자 주문 ===");
  pizza = nyStore.orderPizza("pepperoni");
  console.log(`에단이 주문한 ${pizza.getName()}\n`);

  console.log("=== 조엘이 시카고 스타일 페퍼로니 피자 주문 ===");
  pizza = chicagoStore.orderPizza("pepperoni");
  console.log(`조엘이 주문한 ${pizza.getName()}\n`);

  console.log("=== 에단이 뉴욕 스타일 야채 피자 주문 ===");
  pizza = nyStore.orderPizza("veggie");
  console.log(`에단이 주문한 ${pizza.getName()}\n`);

  console.log("=== 조엘이 시카고 스타일 야채 피자 주문 ===");
  pizza = chicagoStore.orderPizza("veggie");
  console.log(`조엘이 주문한 ${pizza.getName()}\n`);
}

main();