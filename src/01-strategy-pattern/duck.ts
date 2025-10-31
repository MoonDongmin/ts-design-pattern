import type {FlyBehavior}   from "@/01-strategy-pattern/interface/fly-behavior.ts";
import type {QuackBehavior} from "@/01-strategy-pattern/interface/quack-behavior.ts";

export abstract class Duck {
    private _flyBehavior!: FlyBehavior;

    private _quackBehavior!: QuackBehavior;

    protected constructor() {
    }

    abstract display(): void ;

    public performFly(): void {
        this._flyBehavior.fly();
    }

    public performQuack() {
        this._quackBehavior.quack();
    }

    public swim(): void {
        console.log("모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠");
    }

    set flyBehavior(fb: FlyBehavior) {
        this._flyBehavior = fb;
    }

    set quackBehavior(qb: QuackBehavior) {
        this._quackBehavior = qb;
    }
}
