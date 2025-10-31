import {Duck}     from "@/01-strategy-pattern/duck.ts";
import {FlyNoWay} from "@/01-strategy-pattern/strategy/fly-no-way.ts";
import {Quack}    from "@/01-strategy-pattern/strategy/quack.ts";

export class ModelDuck extends Duck{
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display(): void {
        console.log("저는 모형 오리입니다");
    }
}
