// 1. 기존 함수 선언 방식
function logText1(text){
	console.log(text);
	return text;
}

logText1(10);		// 숫자 10
logText1('hi');		// 문자열 hi
logText1(true);		// 진위값 true

// 2. 제네릭 기본 문법
function logText2<T>(text: T): T {
	console.log(text);
	return text;
}
logText2<string>('hi');

// 3. 기존 타입 정의 방식과 제네릭의 차이점
function logText3(text: string){
	console.log(text);
	// text.split('').reverse().join('');
	return text;
}

function logNumber(num: number){
	console.log(num);
	return num;
}

logText3('a');
logNumber(10);
// -> 타입 설정을 위해 중복 코드를 생산하는 것은 좋지 않다.

// 4. 유니온 타입을 이용한 선언 방식의 문제점
function logText4(text: string | number){
	// string과 number의 교집합 속성만 사용 가능
	console.log(text);
	return text;
}

// 리턴받은 a값의 타입 또한 string 또는 number로 표시됨
const a4 = logText4('a');		// a4 : string | number
// a.split('');	error : a가 string인지 number인지 알 수 없으므로 string의 속성 aplit을 사용할 수 없다.
logText4(10);

// 5. 제네릭의 장점과 타입 추론에서의 이점
function logText5<T>(text: T): T{
	console.log(text);
	return text;
}

const str = logText5<string>('a');
str.split('');		// a5 : string
const num = logText5<number>(10);
const flag = logText5<boolean>(true);

// 6. 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
	value: T;
	selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false};
const obj2: Dropdown<number> = { value: 10, selected: false};

// 7. 제네릭의 타입 제한
function logTextLength1<T>(text: T[]): T[]{
	// 제네릭의 타입이 배열이라고 가정하고 배열 관련 속성을 사용할 수 있다.
	console.log(text.length);
	text.forEach(function(text){
		console.log(text);
	});
	return text;
}
logTextLength1(['hi']);

// 8. 정의된 타입으로 타입 제한하기
interface LengthType {
	// length 속성을 정의
	length: number;
}

function logTextLength2<T extends LengthType>(text: T): T{
	// 제네릭으로 받은 타입에는 length 속성이 가능하다고 정의
	// *제네릭에 들어가는 타입들을 구별할 수 있다.
	console.log(text.length);
	return text;
}
logTextLength2('hi');
// logTextLength2(10);		- number는 length 속성을 사용하지 못하므로 매개변수 10 불가능
logTextLength2({ length: 10 });	// length라는 속성만 있으면 매개변수로 받아들여진다.

// 9. 제네릭 타입 제한 - key of
interface ShoppingItem{
	name: string;
	price: number;
	stock: number;
}

// ShoppingItem에 있는 key들 중에 한 가지가 T(제네릭) 타입이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
	return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");