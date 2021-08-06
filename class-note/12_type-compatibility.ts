// 인터페이스 타입 호환
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;  
}

var developer: Developer;
var person: Person;
// developer = person;   // error: person 속성이 name밖에 없기 때문에 할당될 수 없다.
// 오른쪽에 있는 타입이 더 많은 속성을 가지고 있어야(구조적으로 클 때) 오류가 발생하지 않음

person = developer;   // 오류가 발생하지 않음

// 클래스도 선언해도 오류 발생
class Person {
  name: string;
}

// developer = new Person();  // error

// 함수 타입 호환 
var add = function(a: number) {
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}

// 구조적(타입적)으로 sum함수가 add 함수보다 크다고 볼 수 있다.
// add = sum;    // error
sum = add;  // sum > add이므로 오류가 발생하지 않음

// 제네릭 타입 호환
interface Empty<T>{
  // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;

// 제네릭 안이 비어있으므로 어떤 타입으로 넘겨도 동일하다고 간주함
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
  data: T;
}
var notempty1: NotEmpty<string>;
var NotEmpty2: NotEmpty<number>;

// notempty1과 notempty2의 타입이 달라졌으므로 호환이 되지 않음
// notempty1 = notEmpty2;   // error
// notEmpty2 = notempty1;   // error
