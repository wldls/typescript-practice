class Person {
  // ts에서는 멤버변수에 대한 타입정의, 유효범위 정의가 가능
  private name: string;
  public age: number;
  readonly log: string; // 읽기전용

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}