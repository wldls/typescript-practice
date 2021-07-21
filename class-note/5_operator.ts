// function logMessage(value: any){
// 	console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입(Union Type) -> | 사용
var seho: string | number | boolean;
function logMessage(value: string | number){
	// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
	if(typeof value === 'number'){
		value.toLocaleString();		
	}
	if(typeof value === 'string'){
		value.toString();
	}
	// string과 number가 아닌 타입에 대해서 error를 발생시킴
	throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

// 유니온 타입 특징
interface Developer{
 name: string;
 skill: string;
}

interface Person{
	name: string;
	age: number;
}

function askSomeone(someone: Developer | Person){
	// name 이라는 공통속성만 사용 가능하다.
	someone.name
	// skill 이나 age를 쓰고 싶다면 타입가드를 이용해야 함
	// someone.skill
	// someone.age
}

// 함수 호출 시 developer 또는 person의 데이터를 주면 된다.
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

// 인터섹션 타입
var seho: string | number | boolean;
// string, number, boolean 을 모두 만족하는 하나의 타입
var capt: string & number & boolean;

function askSomeone2(someone: Developer & Person){		
	someone.name	
	someone.skill
	someone.age
}

// developer의 데이터와 person의  데이터를 합한 객체를 넘겨야 한다. -> 새로운 유형이 생기는 셈
askSomeone2({name: '디벨로퍼', skill: '웹 개발', age: 100});
askSomeone2({name: '캡틴', skill: '웹 개발', age: 100});