import {ChocolateBoiler} from "@/02-singleton-pattern/chocolate-boiler.ts";

function main() {
  const builder1: ChocolateBoiler = ChocolateBoiler.getInstance();
  const builder2: ChocolateBoiler = ChocolateBoiler.getInstance();

  const builder3: ChocolateBoiler = ChocolateBoiler.createNew();

  console.log(builder1 === builder2);
  console.log(builder1 === builder3);
}

main();
