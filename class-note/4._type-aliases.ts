// 타입 별칭 : 새로운 타입 값을 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것

// interface Person {
// 	name: string;
// 	age: number;
// }

type Person2 = {
	name: string;
	age: number;
}

var seho: Person2 = {
	name: '세호',
	age: 30
}

type MyString = string;
var str: MyString = 'hello';

// 타입의 값이 길어질 경우 타입 별칭을 사용하면 유용하다.
type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}