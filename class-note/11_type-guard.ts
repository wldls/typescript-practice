interface Developer {
  name: string;  
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person{
  return { name: 'Tony', age: 33, skill: 'Iron Making'}
}

var tony = introduce();
console.log(tony.name); // Developer와 Person의 공통된 속성에만 접근 가능

// 타입 단언을 통해 skill을 출력
if((tony as Developer).skill){
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if((tony as Person).age){
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer{
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
  // tony가 Developer일 경우
  console.log(tony.skill);
} else{
  console.log(tony.age);
}
