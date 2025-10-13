import type {Duck}        from "@/01-strategy-pattern/duck.ts";
import {MallardDuck}      from "@/01-strategy-pattern/mallard-duck.ts";
import {ModelDuck}        from "@/01-strategy-pattern/model-duck.ts";
import {FlyRocketPowered} from "@/01-strategy-pattern/fly-rocket-powered.ts";

function main() {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.flayBehavior = new FlyRocketPowered();
    model.performFly();
}

main();
