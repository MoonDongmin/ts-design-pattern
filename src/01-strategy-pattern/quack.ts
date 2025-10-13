import type {QuackBehavior} from "@/01-strategy-pattern/interface/quack-behavior.ts";

export class Quack implements QuackBehavior {
    quack(): void {
        console.log("꽥");
    }
}
