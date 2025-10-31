import {Duck}         from "@/01-strategy-pattern/duck.ts";
import {Quack}        from "@/01-strategy-pattern/strategy/quack.ts";
import {FlyWithWings} from "@/01-strategy-pattern/strategy/fly-with-wings.ts";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    override display() {
        console.log("저는 물오리입니다.");
    }
}
