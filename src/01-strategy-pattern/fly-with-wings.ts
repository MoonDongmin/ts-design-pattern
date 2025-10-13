import type {FlyBehavior} from "@/01-strategy-pattern/interface/fly-behavior.ts";

export class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log("날고 있어요!!");
    }
}
