import {PizzaStore}                 from "@/03-factory-pattern/pizza-store.ts";
import type {Pizza}                 from "@/03-factory-pattern/pizza.ts";
import {ChicagoStyleCheesePizza}    from "@/03-factory-pattern/chicago-style-cheese-pizza.ts";
import {ChicagoStylePepperoniPizza} from "@/03-factory-pattern/chicago-style-pepperoni-pizza.ts";
import {ChicagoStyleVeggiePizza}    from "@/03-factory-pattern/chicago-style-veggie-pizza.ts";

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    if (item === "cheese") {
      return new ChicagoStyleCheesePizza();
    } else if (item === "pepperoni") {
      return new ChicagoStylePepperoniPizza();
    } else if (item === "veggie") {
      return new ChicagoStyleVeggiePizza();
    }

    throw new Error(`Unknown pizza type: ${item}`);
  }
}
