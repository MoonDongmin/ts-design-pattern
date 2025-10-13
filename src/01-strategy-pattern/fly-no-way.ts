import type {FlyBehavior} from "@/01-strategy-pattern/interface/fly-behavior.ts";

export class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("저는 못 날아요");
    }
}
