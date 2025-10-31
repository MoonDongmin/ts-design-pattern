import {PizzaStore}            from "@/03-factory-pattern/pizza-store.ts";
import type {Pizza}            from "@/03-factory-pattern/pizza.ts";
import {NYStyleCheesePizza}    from "@/03-factory-pattern/NYStyleCheesePizza.ts";
import {NYStylePepperoniPizza} from "@/03-factory-pattern/ny-style-pepperoni-pizza.ts";
import {NYStyleVeggiePizza}    from "@/03-factory-pattern/ny-style-veggie-pizza.ts";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    if (item === "cheese") {
      return new NYStyleCheesePizza();
    } else if (item === "pepperoni") {
      return new NYStylePepperoniPizza();
    } else if (item === "veggie") {
      return new NYStyleVeggiePizza();
    }

    throw new Error(`Unknown pizza type: ${item}`);
  }
}
