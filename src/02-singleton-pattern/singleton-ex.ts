export class SingletonEx {
  private static uniqueInstance: SingletonEx;

  // 기타 인스턴스 변수

  private constructor() {
  }

  public static getInstance(): SingletonEx {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new SingletonEx();
    }

    return this.uniqueInstance;
  }

  // 기타 메서드
}
