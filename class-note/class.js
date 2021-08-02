// es5
function Person1(name, age){
  this.name = name;
  this.age = age;
}

var capt = new Person1('캡틴', 100);

// ES2015 (es6)
class Person2 {
	// 클래스 로직
	constructor(name, age){
		// 초기화 메서드
		console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
	}
}

var seho = new Person('세호', 30);	// 생성 되었습니다.
console.log(seho);