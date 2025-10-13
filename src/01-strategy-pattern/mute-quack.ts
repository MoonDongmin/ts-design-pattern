import type {QuackBehavior} from "@/01-strategy-pattern/interface/quack-behavior.ts";

export class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log("<< 조용~ >>");
    }
}
