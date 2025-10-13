import type {FlyBehavior}   from "@/01-strategy-pattern/interface/fly-behavior.ts";
import type {QuackBehavior} from "@/01-strategy-pattern/interface/quack-behavior.ts";

export abstract class Duck {
    private _flayBehavior!: FlyBehavior;

    private _quackBehavior!: QuackBehavior;

    protected constructor() {
    }

    abstract display(): void ;

    public performFly(): void {
        this._flayBehavior.fly();
    }

    public performQuack() {
        this._quackBehavior.quack();
    }

    public swim(): void {
        console.log("모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠");
    }

    set flayBehavior(fb: FlyBehavior) {
        this._flayBehavior = fb;
    }

    set quackBehavior(qb: QuackBehavior) {
        this._quackBehavior = qb;
    }
}
