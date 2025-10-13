import type {FlyBehavior} from "@/01-strategy-pattern/interface/fly-behavior.ts";

export class FlyRocketPowered implements FlyBehavior{
    fly(): void {
        console.log("로켓 추진으로 날아갑니다");
    }
}
