export class ChocolateBoiler {
  private empty: boolean;

  private boiled: boolean;

  public static uniqueInstance: ChocolateBoiler;


  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  /**
   * TypeScript/Node.js 환경은 다름
   *
   * TypeScript (특히 Node.js)는 기본적으로 싱글스레드 기반의 이벤트 루프 구조입니다.
   * 즉, 동시 실행(thread-level concurrency)은 없어요.
   *
   * “한 번에 하나의 이벤트(작업)만 실행”
   * 하지만 비동기(async) I/O 때문에 동시에 실행되는 것처럼 보일 뿐이에요.
   *
   * 그래서 Java처럼 synchronized 같은 스레드 락(lock)을 걸 필요가 없습니다.
   */
  public static getInstance(): ChocolateBoiler {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new ChocolateBoiler();
    }
    return this.uniqueInstance;
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
      // 보일러에 우유와 초콜릿을 혼합한 재료를 넣음
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      // 끓인 재료를 다음 단계로 넘김
      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      // 재료를 끓임
      this.boiled = true;
    }
  }

  public isEmpty(): boolean {
    return this.empty;
  }


  public isBoiled(): boolean {
    return this.boiled;
  }
}
