import type {Pizza} from "@/03-factory-pattern/pizza.ts";

export class SimplePizzaFactory {
  constructor() {
  }

  public createPizza(type: string): Pizza {
    let pizza: Pizza = null;

    if (type === "cheese") {
      pizza = new CheesePizza();
    }
    // ...

    return pizza;
  }
}
