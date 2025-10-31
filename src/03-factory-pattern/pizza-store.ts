import type {Pizza} from "@/03-factory-pattern/pizza.ts";

export abstract class PizzaStore {
  constructor() {
  }
  // public factory: SimplePizzaFactory;

  // constructor(factory: SimplePizzaFactory) {
  //   this.factory = factory;
  // }

  public orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }


  protected abstract createPizza(type: string): Pizza;
}
