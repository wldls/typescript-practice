// 타입 단언 (type assertion)
var a1; // any
// var b1 = a1  // b1: any
var b1 = a1 as string;  // b1: string

// DOM API 조작
const div = document.querySelector('div') as HTMLDivElement;

div.innerText;

if (div) {
  div.innerText;
}
